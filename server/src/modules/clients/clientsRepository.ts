import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";
import authServices from "../../services/authServices";
import type { Client } from "../../types/clientsTypes/clientsTypes";

class ClientsRepository {
  async update(updateClient: Client): Promise<boolean> {
    const connection = await databaseClient.getConnection();
    const hashedPassword = await authServices.hashPassword(
      updateClient.password,
    );
    try {
      await connection.beginTransaction();

      const [clientResult] = await connection.execute<Result>(
        `
        UPDATE client
        SET birthdate = ?, nickname = ?, gender_id = ?
        WHERE id = ?
        `,
        [
          updateClient.birthdate,
          updateClient.nickname,
          updateClient.gender_id,
          updateClient.id,
        ],
      );

      if (clientResult.affectedRows === 0) {
        throw new Error("Failed to update client");
      }

      const [userResult] = await connection.execute<Result>(
        `
        UPDATE user
        SET email = ?, password = ?, firstname = ?, lastname = ?
        WHERE id = (SELECT user_id FROM client WHERE id = ?)
        `,
        [
          updateClient.email,
          hashedPassword,
          updateClient.firstname,
          updateClient.lastname,
          updateClient.id,
        ],
      );

      if (updateClient.phoneNumber) {
        const [phoneResult] = await connection.execute<Result>(
          `
          INSERT INTO phone (client_id, phone_number)
          VALUES (?, ?)
          ON DUPLICATE KEY UPDATE phone_number = ?
          WHERE client_id = ?
          `,
          [
            updateClient.id,
            updateClient.phoneNumber,
            updateClient.phoneNumber,
            updateClient.id,
          ],
        );
      }

      if (userResult.affectedRows === 0) {
        throw new Error("User update failed");
      }

      await connection.commit();
      return true;
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }

  async create(client: Omit<Client, "id">): Promise<number> {
    const connection = await databaseClient.getConnection();
    try {
      await connection.beginTransaction();
      const hashedPassword = await authServices.hashPassword(client.password);
      const [userResult] = await connection.execute<Result>(
        `
        INSERT INTO user
            (email, password, firstname, lastname)
        VALUES (?, ?, ?, ?)
        `,
        [client.email, hashedPassword, client.firstname, client.lastname],
      );

      const userId = userResult.insertId;

      if (!userId) {
        throw new Error("User creation failed");
      }

      const [clientResult] = await connection.execute<Result>(
        `
        INSERT INTO client
            (birthdate, nickname, gender_id, user_id)
        VALUES (?, ?, ?, ?)
        `,
        [client.birthdate, client.nickname, client.gender_id, userId],
      );

      const clientId = clientResult.insertId;

      if (!clientId) {
        throw new Error("Client creation failed");
      }

      if (client.phoneNumber) {
        const [phoneResult] = await connection.execute<Result>(
          `
          INSERT INTO phone (client_id, phone_number)
          VALUES (?, ?)
          `,
          [clientId, client.phoneNumber],
        );

        if (!phoneResult.insertId) {
          throw new Error("Phone creation failed");
        }
      }

      await connection.commit();
      return clientId;
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      `
      SELECT client.nickname, client.birthdate, user.email, user.firstname, user.lastname, phone.phone_number, gender.type
      FROM client
      INNER JOIN user ON client.user_id = user.id
      INNER JOIN gender ON client.gender_id = gender.id
      LEFT JOIN phone ON client.id = phone.client_id
      WHERE client.id = ?
      `,
      [id],
    );

    return rows[0] as Client;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      ` 
      SELECT client.nickname, client.birthdate, user.email, user.firstname, user.lastname, phone.phone_number, gender.type
      FROM client
      INNER JOIN user ON client.user_id = user.id
      INNER JOIN phone ON client.id = phone.client_id
      INNER JOIN gender ON client.gender_id = gender.id
      `,
    );

    return rows as Client[];
  }

  async destroy(id: number): Promise<boolean> {
    const [result] = await databaseClient.execute<Result>(
      `
        DELETE FROM user
        WHERE id = (SELECT user_id FROM client WHERE id = ?)
        `,
      [id],
    );

    return result.affectedRows > 0;
  }
}

export default new ClientsRepository();
