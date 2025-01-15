import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

import type { Client } from "../../types/clientsTypes/clientsTypes";

class ClientsRepository {
  async update(updateClient: Omit<Client, "user_id">): Promise<boolean> {
    const [rows] = await databaseClient.query<Rows>(
      `
      SELECT user_id FROM client
      WHERE id = ?
      `,
      [updateClient.id],
    );

    if (rows.length === 0) {
      return false;
    }

    const [result] = await databaseClient.query<Result>(
      `
    UPDATE client
    SET birthdate = ?, nickname = ?, gender_id = ?
    WHERE id = ?
    `,
      [
        updateClient.birthdate,
        updateClient.nickName,
        updateClient.gender_Id,
        updateClient.id,
      ],
    );

    return result.affectedRows > 0;
  }

  async create(client: Omit<Client, "id">): Promise<number> {
    // Execute the SQL INSERT query to add a new client to the "client" table
    const connection = await databaseClient.getConnection();
    try {
      await connection.beginTransaction();

      const [userResult] = await connection.query<Result>(
        `
        INSERT INTO user
            (email, password, firstname, lastname)
        VALUES (?, ?, ?, ?)
        `,
        [client.email, client.password, client.firstname, client.lastname],
      );

      const userId = userResult.insertId;

      if (!userId) {
        throw new Error("User creation failed");
      }

      const [clientResult] = await connection.query<Result>(
        `
        INSERT INTO client
            (birthdate, nickname, gender_id, user_id)
        VALUES (?, ?, ?, ?)
        `,
        [client.birthdate, client.nickName, client.gender_Id, userId],
      );

      const clientId = clientResult.insertId;

      if (!clientId) {
        throw new Error("Client creation failed");
      }

      const [phoneResult] = await connection.query<Result>(
        `
      INSERT INTO phone (client_id, phone_number)
      VALUES (?, ?)
      `,
        [clientId, client.phoneNumber],
      );

      if (!phoneResult.insertId) {
        throw new Error("Phone creation failed");
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

  // The Rs of CRUD - Read operations
  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific client by its ID
    const [rows] = await databaseClient.query<Rows>(
      `
      SELECT client.nickname, client.birthdate, user.email, user.firstname, user.lastname, phones.phone_number, gender.type
      FROM client
      INNER JOIN user ON client.user_id = user.id
      INNER JOIN phones ON client.id = phone.client_id
      INNER JOIN gender ON client.gender_id = gender.id
      WHERE id = ?
      `,
      [id],
    );

    // Return the first row of the result, which represents the client
    return rows[0] as Client;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "client" table
    const [rows] = await databaseClient.query<Rows>(
      ` 
      SELECT client.nickname, client.birthdate, user.email, user.firstname, user.lastname, phone.phone_number, gender.type
      FROM client
      INNER JOIN user ON client.user_id = user.id
      INNER JOIN phone ON client.id = phone.client_id
      INNER JOIN gender ON client.gender_id = gender.id
      `,
    );

    // Return the array of items
    return rows as Client[];
  }

  // The D of CRUD - Delete operation
  async destroy(id: number): Promise<boolean> {
    const [result] = await databaseClient.query<Result>(
      `
      DELETE FROM client
      WHERE id = ?
      `,
      [id],
    );
    return result.affectedRows > 0;
  }
}

export default new ClientsRepository();
