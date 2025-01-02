import type { RequestHandler } from "express";

// Import access to data
import clientsRepository from "./clientsRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all client
    const clients = await clientsRepository.readAll();

    // Respond with the item in JSON format
    res.json(clients);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific client based on the provided ID
    const clientId = Number(req.params.id);
    const client = await clientsRepository.read(clientId);

    // If the client is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the client in JSON format
    if (client == null) {
      res.sendStatus(404);
    } else {
      res.json(client);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add: RequestHandler = async (req, res, next) => {
  try {
    // Extract the client data from the request body
    const newClient = {
      birthdate: req.body.birthdate,
      nickName: req.body.nickName,
      gender_Id: req.body.gender,
      user_id: req.body.user_id,
    };

    // Create the client
    const insertId = await clientsRepository.create(newClient);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted client
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read, add };