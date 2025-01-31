import type { RequestHandler } from "express";
import type { Illustration, Keyword } from "../../types/keyword/keywordTypes";
import keywordRepository from "./keywordRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    const keywords = await keywordRepository.readAll();

    res.json(keywords);
  } catch (error) {
    next(error);
  }
};
// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    const keywordId = Number(req.params.id);
    const keyword = await keywordRepository.read(keywordId);

    if (!keyword) {
      res.sendStatus(404);
    } else {
      res.json(keyword);
    }
  } catch (error) {
    next(error);
  }
};
// The E of BREAD - Edit operation
const edit: RequestHandler = async (req, res, next) => {
  const keywordId = Number(req.params.id);
  try {
    const keywordData: Keyword & Illustration = {
      name: req.body.name,
      link: req.body.link,
      id: keywordId,
    };

    const updatedKeyword = await keywordRepository.update(keywordData);

    if (!updatedKeyword) {
      res.sendStatus(404);
    }

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

// The A of BREAD - Add operation
const add: RequestHandler = async (req, res, next) => {
  try {
    const keywordData: Omit<Keyword & Illustration, "id"> = {
      name: req.body.name,
      link: req.body.link,
    };

    const insertId = await keywordRepository.create(keywordData);

    res.status(201).json({ insertId });
  } catch (error) {
    next(error);
  }
};
// The D of BREAD - Delete operation
const destroy: RequestHandler = async (req, res, next) => {
  try {
    const keywordId = Number(req.params.id);

    const affectedRows = await keywordRepository.destroy(keywordId);

    if (!affectedRows) {
      res.sendStatus(404);
    }

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

export default { browse, read, edit, add, destroy };
