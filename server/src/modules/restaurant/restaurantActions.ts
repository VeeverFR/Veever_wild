import type { RequestHandler } from "express";

// Import access to data
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
    const restaurantId = Number(req.params.id);
    const editRestaurant = {
      chr_id: Number(req.body.chr_id),
    };
    const updateRestaurant = await restaurantRepository.update(
      restaurantId,
      editRestaurant,
    );

    if (updateRestaurant == null) {
      res.sendStatus(404);
    } else {
      res.json(updateRestaurant);
    }
  } catch (err) {
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const restaurantId = Number(req.params.id);

    const restaurantDeleted = await restaurantRepository.delete(restaurantId);

    if (restaurantDeleted) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add: RequestHandler = async (req, res, next) => {
  try {
    // Extract the restaurant data from the request body
    const newRestaurant = {
      chr_id: req.body.chr_id,
    };

    // Create the restaurant
    const insertId = await restaurantRepository.create(newRestaurant);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted restaurant
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read, add, edit, destroy };
