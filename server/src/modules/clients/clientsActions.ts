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
      nickname: req.body.nickname,
      gender_id: req.body.gender_id,
      email: req.body.email,
      password: req.body.password,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      phoneNumber: req.body.phoneNumber,
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

const update: RequestHandler = async (req, res, next) => {
  try {
    // Extract the client data from the request body
    const updateClient = {
      birthdate: req.body.birthdate,
      nickname: req.body.nickname,
      gender_id: req.body.gender_id,
      id: +req.params.id,
      email: req.body.email,
      password: req.body.password,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      phoneNumber: req.body.phoneNumber,
    };

    // Update the client
    const updateId = await clientsRepository.update(updateClient);

    if (updateId) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
    // Respond with HTTP 201 (Created) and the ID of the newly inserted client
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Delete operation
const destroy: RequestHandler = async (req, res, next) => {
  try {
    // Extract the client ID from the request parameters
    const clientId = Number(req.params.id);
    // Delete the client
    const destroyed = await clientsRepository.destroy(clientId);
    // If the client was deleted, respond with HTTP 204 (No Content)
    // Otherwise, respond with HTTP 404 (Not Found)
    if (destroyed) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read, add, update, destroy };
