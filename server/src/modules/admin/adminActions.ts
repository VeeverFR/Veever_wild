import type { RequestHandler } from "express";

import type { User } from "../../types/admin/adminTypes";
import adminRepository from "./adminRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    const admins = await adminRepository.readAll();

    if (!admins) {
      res.sendStatus(404);
    } else {
      res.json(admins);
    }
  } catch (error) {
    next(error);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    const adminId = Number(req.params.id);
    const admin = await adminRepository.read(adminId);

    if (!admin) {
      res.sendStatus(404);
    } else {
      res.json(admin);
    }
  } catch (error) {
    next(error);
  }
};

// The E of BREAD - Edit operation
const edit: RequestHandler = async (req, res, next) => {
  const adminId = Number(req.params.id);
  try {
    const userData: User = {
      email: req.body.email,
      password: req.body.password,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      id: adminId,
    };

    const updateAdmin = await adminRepository.update(userData);

    if (!updateAdmin) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    next(error);
  }
};

// The A of BREAD - Add (Create) operation
const add: RequestHandler = async (req, res, next) => {
  try {
    const userData: Omit<User, "id"> = {
      email: req.body.email,
      password: req.body.password,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    };

    const insertId = await adminRepository.create(userData);

    res.status(201).json({ insertId });
  } catch (error) {
    next(error);
  }
};

// The D of BREAD - Delete operation
const destroy: RequestHandler = async (req, res, next) => {
  try {
    const adminId = Number(req.params.id);

    const affectedRows = await adminRepository.destroy(adminId);

    if (affectedRows === 0) {
      res.sendStatus(404);
    }

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

export default { browse, read, edit, add, destroy };
