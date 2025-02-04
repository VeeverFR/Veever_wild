import type { RequestHandler } from "express";
import jwt, { decode } from "jsonwebtoken";
import type { CustomJwtPayload } from "../types/express";

const jwtSecret = process.env.JWT_SECRET;

if (!jwtSecret) {
  throw new Error(
    "La clé secrète JWT_SECRET n'est pas définie dans le fichier .env",
  );
}

const verifyToken: RequestHandler = (req, res, next) => {
  console.info("cookies reçus :", req.cookies.token);
  const token = req.cookies.token;
  if (!token) {
    throw new Error("Accès non autorisé, token manquant.");
  }

  try {
    const decoded = jwt.verify(token, jwtSecret) as CustomJwtPayload;
    req.user = { id: decoded.id, role: decoded.role };
    next();
  } catch (error) {
    next(error);
  }
};

export default verifyToken;
