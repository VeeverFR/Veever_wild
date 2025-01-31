import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";
import type { Admin, User } from "../../types/admin/adminTypes";

class adminRepository {
  // The C of CRUD - Create operation
  async create(userData: Omit<User, "id">) {
    const connection = await databaseClient.getConnection();

    try {
      await connection.beginTransaction();

      const [userResult] = await connection.execute<Result>(
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

      if (!userId) {
        throw new Error("Insertion échouée dans la table user");
      }

      const [adminResult] = await connection.execute<Result>(
        `
        INSERT INTO admin (user_id)
        VALUES (?)
        `,
        [userId],
      );
      const adminId = adminResult.insertId;

      if (!adminId) {
        throw new Error("Insertion échouée dans la table admin");
      }

      await connection.commit();

      return adminId;
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }

  // The Rs of CRUD - Read operations
  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      `
      SELECT admin.id, user.id as user_id, email, firstname, lastname, created_at, updated_at
      FROM admin
      INNER JOIN user
      ON user.id = admin.user_id
      WHERE admin.id = ?
      `,
      [id],
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      `
      SELECT admin.id, user.id as user_id, email, firstname, lastname, created_at, updated_at
      FROM admin
      INNER JOIN user
      ON user.id = admin.user_id
      `,
    );

    return rows;
  }

  // The U of CRUD - Update operation
  async update(userData: User) {
    const [userResult] = await databaseClient.execute<Result>(
      `
        UPDATE user
        SET email = ?, password = ?, firstname = ?, lastname = ?, updated_at = CURRENT_TIMESTAMP
        WHERE id = (SELECT user_id FROM admin WHERE id = ?)
        `,
      [
        userData.email,
        userData.password,
        userData.firstname,
        userData.lastname,
        userData.id,
      ],
    );

    return userResult.affectedRows > 0;
  }

  // The D of CRUD - Delete operation
  async destroy(adminId: number): Promise<number> {
    const [result] = await databaseClient.execute<Result>(
      `
        DELETE user, admin
        FROM user
        INNER JOIN admin
        ON admin.user_id = user.id
        WHERE admin.id = ?;
        `,
      [adminId],
    );

    return result.affectedRows;
  }
}

export default new adminRepository();
