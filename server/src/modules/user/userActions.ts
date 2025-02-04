import type { RequestHandler } from "express";
import authServices from "../../services/authServices";
import userRepository from "./userRepository";

const authenticateUser: RequestHandler = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await userRepository.getUserEmailWithRole(email);

    if (!user) {
      res.status(401).json({ message: "Email incorrect." });
    }

    const isPasswordMatch = authServices.matchPassword(password, user.password);

    if (!isPasswordMatch) {
      res.status(401).json({ message: "Mot de passe incorrect." });
    }

    req.body.password = null;

    const token = authServices.generateToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600000,
      sameSite: "lax",
    });

    res.status(200).json({
      message: "Connexion réussie",
      role: user.role,
      token,
    });
  } catch (error) {
    next(error);
  }
};

export default { authenticateUser };
