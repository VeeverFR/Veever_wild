import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";
import type {
  Gender,
  GenderData,
  UpdateGenderData,
} from "../../types/gender/genderTypes";

class GenderRepository {
  // The C of CRUD - Create operation

  async create(genderData: GenderData) {
    // Execute the SQL INSERT query to add a new restaurant to the "restaurant" table
    try {
      const [genderResult] = await databaseClient.query<Result>(
        ` INSERT INTO gender
          (type) values (?)`,
        [genderData.type],
      );

      return genderResult.insertId;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
    }
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific restaurant by its ID
    const [rows] = await databaseClient.query<Rows>(
      `SELECT type
       FROM gender 
       WHERE id = ?`,
      [id],
    );

    return rows[0] as Gender;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all restaurants from the "restaurant" table
    const [rows] = await databaseClient.query<Rows>(
      `SELECT id,type
       FROM gender`,
    );

    // Return the array of restaurants
    return rows as Gender[];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing restaurant
  async update({ type, id }: UpdateGenderData) {
    try {
      const [genderResult] = await databaseClient.query<Result>(
        `UPDATE gender
         SET type = ?
         WHERE id = ?`,
        [type, id],
      );

      return genderResult.affectedRows;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
    }
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an restaurant by its ID

  async delete(id: number) {
    try {
      const [genderRows] = await databaseClient.query<Result>(
        `DELETE gender 
         FROM gender
         WHERE id = ?`,
        [id],
      );

      return genderRows.affectedRows;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
    }
  }
}

export default new GenderRepository();
