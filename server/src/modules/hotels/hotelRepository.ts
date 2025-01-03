import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Hotels = {
  id: number;
  chr_id: number;
};

class HotelsRepository {
  // The C of CRUD - Create operation
  async create(hotel: Omit<Hotels, "id">) {
    // Execute the SQL INSERT query to add a new hotel to the "hotel" table
    const [result] = await databaseClient.query<Result>(
      `INSERT INTO hotel 
      (chr_id) values (?)`,
      [hotel.chr_id],
    );

    // Return the ID of the newly inserted hotel
    return result.insertId;
  }

  // The Rs of CRUD - Read operations
  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific hotel by its ID
    const [rows] = await databaseClient.query<Rows>(
      `SELECT *
       FROM hotel 
       WHERE id = ?`,
      [id],
    );

    // Return the first row of the result, which represents the hotel
    return rows[0] as Hotels;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all hotels from the "hotel" table
    const [rows] = await databaseClient.query<Rows>(
      `SELECT *
       FROM hotel`,
    );

    // Return the array of hotels
    return rows as Hotels[];
  }

  // The U of CRUD - Update operation for hotels

  async update(
    hotelId: number,
    chrId: number,
    chrData: { address: string; minPrice: number; maxPrice: number },
  ): Promise<{
    chrId: number;
    chrData: { address: string; minPrice: number; maxPrice: number };
  }> {
    const connection = await databaseClient.getConnection();

    try {
      await connection.beginTransaction();
      await connection.query(
        `UPDATE chr
         SET address = ?, minPrice = ?, maxPrice = ?
         WHERE id = ?`,
        [chrData.address, chrData.minPrice, chrData.maxPrice, chrId],
      );

      await connection.query(
        `UPDATE hotel
         SET chr_id = ?
         WHERE id = ?`,
        [chrId, hotelId],
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
  async delete(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      `DELETE FROM hotel
      WHERE id = ?`,
      [id],
    );
    return rows as Hotels[];
  }
}

export default new HotelsRepository();
