import type { RequestHandler } from "express";

const verifyId: RequestHandler = (req, res, next) => {
  if (!req.user) {
    res.status(401).json({ message: "Utilisateur non authentifié." });
    return;
  }

  const userFromToken = req.user.id;
  const userFromRequest = req.params.id;

  if (req.user.role === "admin" || userFromToken === userFromRequest) {
    next();
  }

  res
    .sendStatus(403)
    .json({ message: "Vous ne pouvez pas modifier ou supprimer ces données." });
  return;
};

export default verifyId;
