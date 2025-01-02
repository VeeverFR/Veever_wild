import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Client = {
  id: number;
  birthdate: Date;
    nickName: string;
    gender_Id: number;
  user_id: number;
};

class ItemRepository {
  // The C of CRUD - Create operation

  async create(client: Omit <Client, "id">) : Promise<number> {
    // Execute the SQL INSERT query to add a new client to the "client" table
    const [result] = await databaseClient.query<Result>(`
        INSERT INTO clients
            (birthdate, nickname, gender_id, user_id)
        VALUES (?, ?, ?, ?)
        `,
      [client.birthdate, client.nickName, client.gender_Id, client.user_id],
    );

    // Return the ID of the newly inserted client
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific client by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from client where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the client
    return rows[0] as Client;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "client" table
    const [rows] = await databaseClient.query<Rows>("select * from client");

    // Return the array of items
    return rows as Client[];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing client

  // async update(client: Client) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an client by its ID

  // async delete(id: number) {
  //   ...
  // }
}

export default new ItemRepository();