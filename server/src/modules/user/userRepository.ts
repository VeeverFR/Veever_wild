import databaseClient from "../../../database/client";
import type { Rows } from "../../../database/client";

class userRepository {
  async getUserEmailWithRole(email: string) {
    const [result] = await databaseClient.query<Rows>(
      `
      SELECT
        email,
        password,
        CASE
          WHEN admin.user_id IS NOT NULL THEN 'admin'
          WHEN client.user_id IS NOT NULL THEN 'client'
          ELSE NULL
        END AS role
      FROM user
      LEFT JOIN admin
        ON admin.user_id = user.id
      LEFT JOIN client
        ON client.user_id = user.id
      WHERE email = ?
      `,
      [email],
    );

    return result[0];
  }
}

export default new userRepository();
