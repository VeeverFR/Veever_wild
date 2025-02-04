import type { NextFunction, Request, Response } from "express";

export const checkClientPhoneNumber = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { phoneNumber } = req.body;

    if (phoneNumber) {
      const phoneRegex = /^\+?([0-9]{1,3})?[-. ]?([0-9]{6,12})$/;

      if (!phoneRegex.test(phoneNumber)) {
        res.status(400).json({ error: "Invalid phone number" });
        return;
      }
    }

    next();
  } catch (error) {
    next(error);
  }
};
