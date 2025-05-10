import databaseClient from "../../../database/client";
import type { Rows } from "../../../database/client";

class userRepository {
  async getUserEmail(email: string) {
    const [result] = await databaseClient.query<Rows>(
      `
      SELECT email, password
      FROM user
      WHERE email = ?
      `,
      [email],
    );

    return result[0];
  }
}

export default new userRepository();
