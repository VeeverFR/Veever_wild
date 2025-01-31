import type { RequestHandler } from "express";
import restaurantRepository from "./restaurantRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all restaurants
    const restaurants = await restaurantRepository.readAll();

    // Respond with the restaurants in JSON format
    res.json(restaurants);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific restaurant based on the provided ID
    const restaurantId = Number(req.params.id);
    const restaurant = await restaurantRepository.read(restaurantId);

    // If the restaurant is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the restaurant in JSON format
    if (restaurant == null) {
      res.sendStatus(404);
    } else {
      res.json(restaurant);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const updateData = {
      restaurantId: Number(req.params.id),
      chrData: {
        name: req.body.name,
        address: req.body.address,
        description: req.body.description,
        average_budget: req.body.average_budget,
        type: req.body.type,
      },
    };

    const updateRestaurant = await restaurantRepository.update(updateData);

    if (updateRestaurant) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const restaurantId = Number(req.params.id);

    const wasDeleted = await restaurantRepository.delete(restaurantId);

    if (!wasDeleted) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  const chrData = {
    name: req.body.name,
    address: req.body.address,
    description: req.body.description,
    average_budget: req.body.average_budget,
    type: req.body.type,
  };
  try {
    const insertId = await restaurantRepository.create(chrData);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

export default { browse, read, add, edit, destroy };
