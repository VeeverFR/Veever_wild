import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Restaurant = {
  id: number;
  chr_id: number;
};

class RestaurantRepository {
  // The C of CRUD - Create operation

  async create(restaurant: Omit<Restaurant, "id">) {
    // Execute the SQL INSERT query to add a new restaurant to the "restaurant" table
    const [result] = await databaseClient.query<Result>(
      `INSERT 
       INTO restaurant 
      (chr_id) values (?)`,
      [restaurant.chr_id],
    );

    // Return the ID of the newly inserted restaurant
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific restaurant by its ID
    const [rows] = await databaseClient.query<Rows>(
      `SELECT *
       FROM restaurant 
       where id = ?`,
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
  async update(id: number, editRestaurant: Partial<Omit<Restaurant, "id">>) {
    const [rows] = await databaseClient.query<Rows>(
      `UPDATE restaurant
       SET chr_id = ?
       WHERE id = ?`,
      [editRestaurant.chr_id, id],
    );
    return rows as Restaurant[];
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
