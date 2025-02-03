import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";
import type {
  Activities,
  ChrData,
  UpdateResponse,
} from "../../types/ActivityTypes.ts/ActivityTypes";
class ActivityRepository {
  // The C of CRUD - Create operation
  async create(chrData: ChrData) {
    const connection = await databaseClient.getConnection();
    try {
      await connection.beginTransaction();
      // Execute the SQL INSERT query to add a new activity to the "activity" table
      const [chrResult] = await connection.query<Result>(
        `INSERT 
        INTO chr 
        (name, address, description, average_budget) values (?, ?, ?, ?)`,
        [
          chrData.name,
          chrData.address,
          chrData.description,
          chrData.average_budget,
        ],
      );
      if (!chrResult || !chrResult.insertId) {
        await connection.rollback();
        throw new Error("Insertion chr échoué");
      }
      // Return the ID of the newly inserted activity
      const chrId = chrResult.insertId;
      const [activityResult] = await connection.query<Result>(
        `INSERT INTO activity
        (chr_id, duration) values (?, ?)`,
        [chrId, chrData.duration],
      );
      if (!activityResult.insertId) {
        await connection.rollback();
        throw new Error("Insertion activité échoué");
      }
      await connection.commit();
      return activityResult.insertId;
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific activity by its ID
    const [rows] = await databaseClient.query<Rows>(
      `SELECT chr.name, chr.address, chr.description, chr.average_budget, activity.duration
       FROM activity
       INNER JOIN chr
       ON activity.chr_id = chr.id
       WHERE activity.id = ?`,
      [id],
    );

    // Return the first row of the result, which represents the activity
    return rows[0] as Activities;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all activities from the "activity" table
    const [rows] = await databaseClient.query<Rows>(
      `SELECT chr.name, chr.address, chr.description, chr.average_budget, activity.duration
       FROM activity
       INNER JOIN chr
       ON activity.chr_id = chr.id`,
    );

    // Return the array of activities
    return rows as Activities[];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing activity

  async update({ activityId, chrData }: UpdateResponse) {
    try {
      const [chrResult] = await databaseClient.query<Result>(
        `UPDATE chr
         SET name = ?, address = ?, description = ?, average_budget = ?, duration = ?
         WHERE id = (
          SELECT chr_id
          FROM activity
          WHERE id = ?
        )`,
        [
          chrData.name,
          chrData.address,
          chrData.description,
          chrData.average_budget,
          chrData.duration,
          activityId,
        ],
      );
      return chrResult.affectedRows;
    } catch (error) {
      throw new Error("Echec de la mise à jour");
    }
  }

  // The D of CRUD - Delete operation
  async delete(id: number) {
    try {
      const [activityResult] = await databaseClient.query<Result>(
        `DELETE activity, chr 
           FROM activity 
           INNER JOIN chr ON activity.chr_id = chr.id 
           WHERE activity.id = ?`,
        [id],
      );

      return activityResult.affectedRows;
    } catch (error) {
      throw new Error("Erreur lors de la suppression");
    }
  }
}

export default new ActivityRepository();
