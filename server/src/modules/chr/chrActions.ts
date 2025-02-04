import type { RequestHandler } from "express";
import chrRepository from "./chrRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const chr = await chrRepository.readAll();

    if (!chr) {
      res.sendStatus(404);
    }

    res.json(chr);
  } catch (error) {
    next(error);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const chrId = Number(req.params.id);
    const chr = await chrRepository.read(chrId);

    if (!chr) {
      res.sendStatus(404);
    }

    res.json(chr);
  } catch (error) {}
};

export default { browse, read };
