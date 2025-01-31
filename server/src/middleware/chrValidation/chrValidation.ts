import type { NextFunction, Request, Response } from "express";

const validateChr = (req: Request, res: Response, next: NextFunction): void => {
  const { name, address, average_budget, description } = req.body;

  if (typeof name !== "string" || name.trim() === "") {
    res.status(400).json({
      error: "Le champ 'name' est requis et doit être une chaîne non vide.",
    });
    return;
  }

  if (typeof address !== "string" || address.trim() === "") {
    res.status(400).json({
      error: "Le champ 'address' est requis et doit être une chaîne non vide.",
    });
    return;
  }

  if (typeof description !== "string" || description.trim() === "") {
    res.status(400).json({
      error:
        "Le champ 'description' est requis et doit être une chaîne non vide.",
    });
    return;
  }

  const parsedAverageBudget = Number(average_budget);

  if (Number.isNaN(parsedAverageBudget) || Number.isNaN(parsedAverageBudget)) {
    res.status(400).json({
      error:
        "Le champ 'average_budget' est requis et doit être un nombre valide.",
    });
    return;
  }

  if (parsedAverageBudget < 0) {
    res.status(400).json({
      error: "Le champ 'average_budget doit être supérieur ou égal à 0.",
    });
    return;
  }

  req.body.average_budget = parsedAverageBudget;
  req.body.name = name.trim();
  req.body.address = address.trim();
  req.body.description = description.trim();

  next();
};

export default validateChr;
