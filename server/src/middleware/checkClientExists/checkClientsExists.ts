import type { NextFunction, Request, Response } from "express";
import clientsRepository from "../../modules/clients/clientsRepository";

export const checkClientExists = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const clientId = +req.params.id;
    const client = await clientsRepository.read(clientId);

    if (client) {
      next();
    } else {
      res.status(404).json({ error: "Client not found" });
    }
  } catch (error) {
    next(error);
  }
};
