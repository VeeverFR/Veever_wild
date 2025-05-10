import type { RequestHandler } from "express";
import Joi from "joi";

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "L'email doit être valide.",
    "any.required": "L'email est requis.",
  }),
  password: Joi.string().min(12).required().messages({
    "string.min": "Le mot de passe doit avoir au moins 12 caractères.",
    "any.required": "Le mot de passe est requis.",
  }),
});

const validateLogin: RequestHandler = (req, res, next) => {
  const { email, password } = req.body;

  const { error } = loginSchema.validate({ email, password });

  if (error) {
    res.status(400).json({ message: error.details[0].message });
  }

  next();
};

export default validateLogin;
