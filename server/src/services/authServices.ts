import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const generateToken = (payload: object) => {
  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    throw new Error(
      "La clé secrète JWT_SECRET n'est pas définie dans le fichier .env",
    );
  }
  return jwt.sign(payload, jwtSecret as string, { expiresIn: "1h" });
};

const hashPassword = async (password: string) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  } catch (error) {
    throw new Error("Erreur lors du hachage du mot de passe.");
  }
};

const matchPassword = async (password: string, hashedPassword: string) => {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
  } catch (error) {
    throw new Error("Erreur lors de la comparaison des mots de passe.");
  }
};

export default { generateToken, hashPassword, matchPassword };
