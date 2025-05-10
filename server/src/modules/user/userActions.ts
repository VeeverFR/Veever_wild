import bcrypt from "bcryptjs";
import type { RequestHandler } from "express";
import userRepository from "./userRepository";

const authenticateUser: RequestHandler = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await userRepository.getUserEmail(email);

    if (!user) {
      res.sendStatus(404);
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      res.sendStatus(401);
    }

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

export default { authenticateUser };
