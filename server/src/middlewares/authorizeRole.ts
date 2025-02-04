import type { RequestHandler } from "express";

const authorizeRole = (allowedRoles: string[]): RequestHandler => {
  return (req, res, next) => {
    try {
      const userRole = req.user?.role;

      if (!userRole) {
        throw new Error("Accès interdit: rôle non défini.");
      }

      if (!allowedRoles.includes(userRole)) {
        throw new Error("Accès interdit: rôle insuffisant.");
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};

export default authorizeRole;
