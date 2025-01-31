import type { RequestHandler } from "express";
import type { UpdateGenderData } from "../../types/gender/genderTypes";
import genderRepository from "./genderRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all genders
    const genders = await genderRepository.readAll();

    // Respond with the genders in JSON format
    res.json(genders);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific gender based on the provided ID
    const genderId = Number(req.params.id);
    const gender = await genderRepository.read(genderId);

    // If the gender is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the gender in JSON format
    if (gender == null) {
      res.sendStatus(404);
    } else {
      res.json(gender);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const updateData: UpdateGenderData = {
      type: req.body.type,
      id: req.params.id,
    };

    const updategender = await genderRepository.update(updateData);

    if (updategender) {
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
    const genderId = Number(req.params.id);

    const wasDeleted = await genderRepository.delete(genderId);

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
  const genderData = {
    type: req.body.type,
  };
  try {
    const insertId = await genderRepository.create(genderData);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

export default { browse, read, add, edit, destroy };
