import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";
import type {
  Restaurant,
  UpdateChrData,
  chrData,
} from "../../types/chr/chrData";

class RestaurantRepository {
  // The C of CRUD - Create operation

  async create(chrData: chrData) {
    const connection = await databaseClient.getConnection();
    // Execute the SQL INSERT query to add a new restaurant to the "restaurant" table
    try {
      await connection.beginTransaction();
      const [chrResult] = await connection.query<Result>(
        ` INSERT INTO chr
          (name, address, description, average_budget) values (?, ?, ?, ?)`,
        [
          chrData.name,
          chrData.address,
          chrData.description,
          chrData.average_budget,

          chrData.type,
        ],
      );

      if (!chrResult.insertId) {
        await connection.rollback();
        throw new Error("Insertion échouée");
      }
      const chrId = chrResult.insertId;

      const [restaurantResult] = await connection.query<Result>(
        `INSERT INTO restaurant
         (chr_id, type) values(?,?)`,
        [chrId, chrData.type],
      );

      if (!restaurantResult.insertId) {
        await connection.rollback();
        throw new Error("Insertion échouée");
      }

      await connection.commit();
      return restaurantResult.insertId;
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific restaurant by its ID
    const [rows] = await databaseClient.query<Rows>(
      `SELECT chr.name AS name, chr.address, chr.description, chr.average_budget, restaurant.type
       FROM restaurant 
       INNER JOIN chr
       ON restaurant.chr_id = chr.id
       WHERE restaurant.id = ?`,
      [id],
    );

    return rows[0] as Restaurant;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all restaurants from the "restaurant" table
    const [rows] = await databaseClient.query<Rows>(
      `SELECT chr.name AS name, chr.address, chr.description, chr.average_budget, restaurant.type
       FROM restaurant
       INNER JOIN chr
       ON restaurant.chr_id = chr.id`,
    );

    // Return the array of restaurants
    return rows as Restaurant[];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing restaurant
  async update({ restaurantId, chrData }: UpdateChrData) {
    try {
      const [chrResult] = await databaseClient.query<Result>(
        `UPDATE chr
         SET name = ?, address = ?, description = ?, average_budget = ?, type = ?
         WHERE id = (SELECT chr_id FROM restaurant WHERE id = ?)`,
        [
          chrData.name,
          chrData.address,
          chrData.description,
          chrData.average_budget,
          chrData.type,
          restaurantId,
        ],
      );

      return chrResult.affectedRows;
    } catch (error) {
      if (error instanceof Error) {
        throw error; //
      }
    }
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an restaurant by its ID

  async delete(restaurantId: number) {
    try {
      const [chrRows] = await databaseClient.query<Result>(
        `DELETE chr, restaurant 
         FROM chr
         INNER JOIN restaurant
         ON restaurant.chr_id = chr.id
         WHERE restaurant.id = ?`,
        [restaurantId],
      );

      return chrRows.affectedRows;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
    }
  }
}

export default new RestaurantRepository();
