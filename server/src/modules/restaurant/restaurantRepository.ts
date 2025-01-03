import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Restaurant = {
  id: number;
  chr_id: number;
};

class RestaurantRepository {
  // The C of CRUD - Create operation

  async create(
    restaurant: Omit<Restaurant, "id">,
    chrData: { address: string; minPrice: number; maxPrice: number },
  ) {
    const connection = await databaseClient.getConnection();
    // Execute the SQL INSERT query to add a new restaurant to the "restaurant" table
    try {
      await connection.beginTransaction();
      const [chrResult] = await connection.query<Result>(
        ` INSERT INTO chr
          (address, min_price, max_price) values (?, ?, ?)`,
        [chrData.address, chrData.maxPrice, chrData.minPrice],
      );

      const chrId = chrResult.insertId;

      const [restaurantResult] = await connection.query<Result>(
        `INSERT INTO restaurant
         (chr_id) values(?)`,
        [chrId],
      );

      await connection.commit();
      return restaurantResult.insertId;
    } catch (error) {
      await connection.rollback();
      console.error("Erreur lors de la transaction", error);
      throw error;
    } finally {
      connection.release();
    }
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific restaurant by its ID
    const [rows] = await databaseClient.query<Rows>(
      `SELECT *
       FROM restaurant 
       WHERE id = ?`,
      [id],
    );

    // Return the first row of the result, which represents the restaurant
    return rows[0] as Restaurant;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all restaurants from the "restaurant" table
    const [rows] = await databaseClient.query<Rows>(
      `SELECT *
       FROM restaurant`,
    );

    // Return the array of restaurants
    return rows as Restaurant[];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing restaurant
  async update(
    restaurantId: number,
    chrId: number,
    chrData: { address: string; minPrice: number; maxPrice: number },
  ): Promise<{
    chrId: number;
    chrData: { address: string; minPrice: number; maxPrice: number };
  }> {
    const connection = await databaseClient.getConnection();

    try {
      await connection.beginTransaction();
      await connection.query<Result>(
        `UPDATE chr
         SET address = ? , minPrice = ? , maxPrice = ?
         WHERE id = ?`,
        [chrData.address, chrData.minPrice, chrData.maxPrice, chrId],
      );

      await connection.query<Result>(
        `UPDATE restaurant
         SET chr_id = ?
         WHERE id = ?`,
        [chrId, restaurantId],
      );

      await connection.commit();
      console.info("Transaction réussie !");

      return { chrId, chrData };
    } catch (error) {
      await connection.rollback();
      console.error("Erreur lors de la transaction: ", error);
      throw error;
    } finally {
      connection.release();
    }
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an restaurant by its ID
  async delete(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      `DELETE 
       FROM restaurant
       WHERE id = ?`,
      [id],
    );
    return rows as Restaurant[];
  }
}

export default new RestaurantRepository();
