import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Admin = {
  id: number;
  user_id: number;
};

export type User = {
  id: number;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
};

class adminRepository {
  // The C of CRUD - Create operation
  async create(
    userData: User,
  ): Promise<{ message: string; profile: User & { adminId: number } }> {
    const connection = await databaseClient.getConnection();

    try {
      await connection.beginTransaction();

      const [userResult] = await connection.query<Result>(
        `
        INSERT INTO user (email, password, firstname, lastname)
        VALUES (?, ?, ?, ?)
        `,
        [
          userData.email,
          userData.password,
          userData.firstname,
          userData.lastname,
        ],
      );
      const userId = userResult.insertId;

      const [adminResult] = await connection.query<Result>(
        `
        INSERT INTO admin (user_id)
        VALUES (?)
        `,
        [userId],
      );
      const adminId = adminResult.insertId;

      await connection.commit();

      return {
        message: "Administrateur créé.",
        profile: {
          email: userData.email,
          password: userData.password,
          firstname: userData.firstname,
          lastname: userData.lastname,
          id: userId,
          adminId: adminId,
        },
      };
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }

  // The Rs of CRUD - Read operations
  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific admin by its ID
    const [rows] = await databaseClient.query<Rows>(
      `
      SELECT admin.id, user.id as user_id, email, password, firstname, lastname
      FROM admin
      INNER JOIN user
      ON user.id = admin.user_id
      WHERE admin.id = ?
      `,
      [id],
    );

    // Return the first row of the result, which represents the admin
    const { password, ...rest } = rows[0];
    return rest as Omit<User & Admin, "password">;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all admins from the "admin" table
    const [rows] = await databaseClient.query<Rows>(
      `
      SELECT admin.id, user.id as user_id, email, password, firstname, lastname
      FROM admin
      INNER JOIN user
      ON user.id = admin.user_id
      `,
    );

    // Return the array of admins
    return rows.map(({ password, ...rest }) => rest);
  }

  // The U of CRUD - Update operation
  async update(userData: User): Promise<{ message: string; profile: User }> {
    const connection = await databaseClient.getConnection();

    try {
      const [userResult] = await connection.query<Result>(
        `
        UPDATE user
        SET email = ?, password = ?, firstname = ?, lastname = ?
        WHERE id = ?
        `,
        [
          userData.email,
          userData.password,
          userData.firstname,
          userData.lastname,
          userData.id,
        ],
      );

      if (userResult.affectedRows === 0) {
        throw new Error(
          "Utilisateur non trouvé ou aucune modification effectuée",
        );
      }

      await connection.commit();

      return {
        message: "Administrateur modifié.",
        profile: {
          email: userData.email,
          password: userData.password,
          firstname: userData.firstname,
          lastname: userData.lastname,
          id: userData.id,
        },
      };
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }

  // The D of CRUD - Delete operation
  async destroy(adminId: number): Promise<{ message: string }> {
    const connection = await databaseClient.getConnection();

    try {
      await connection.beginTransaction();
      const [adminResult] = await connection.query<Result>(
        `
        DELETE FROM admin
        WHERE id = ?
        `,
        [adminId],
      );

      if (adminResult.affectedRows === 0) {
        throw new Error("Administrateur non trouvé");
      }

      const [userResult] = await connection.query<Result>(
        `
        DELETE user FROM user
        INNER JOIN admin ON admin.user_id = user.id
        WHERE admin.id = ?
        `,
        [adminId],
      );

      if (userResult.affectedRows === 0) {
        throw new Error("Utilisateur non trouvé");
      }

      await connection.commit();

      return {
        message: "Administrateur supprimé.",
      };
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }
}

export default new adminRepository();
