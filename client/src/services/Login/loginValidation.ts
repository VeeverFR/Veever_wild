import Joi from "joi";
import { useState } from "react";

export default function useLoginValidation() {
  const [email, setEmail] = useState<string>("");
  const [emailErrors, setEmailErrors] = useState<Record<string, string>>({});
  const [password, setPassword] = useState<string>("");
  const [passwordErrors, setPasswordErrors] = useState<Record<string, string>>(
    {},
  );

  const loginSchema = Joi.object({
    email: Joi.string()
      .pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      .required()
      .messages({
        "string.pattern.base": "L'email doit être valide.",
        "any.required": "L'email est requis.",
      }),
    password: Joi.string().min(12).required().messages({
      "string.min": "Le mot de passe doit avoir au moins 12 caractères.",
      "any.required": "Le mot de passe est requis.",
    }),
  });

  const validate = () => {
    const { error } = loginSchema.validate({ email, password });

    if (error) {
      const errors: Record<string, string> = {};

      for (const err of error.details) {
        if (err.context?.key === "email") {
          errors.emailCheck = err.message;
        } else if (err.context?.key === "password") {
          errors.passwordCheck = err.message;
        }
      }

      setEmailErrors(
        errors.emailCheck ? { emailCheck: errors.emailCheck } : {},
      );
      setPasswordErrors(
        errors.passwordCheck ? { passwordCheck: errors.passwordCheck } : {},
      );
      return false;
    }

    setEmailErrors({});
    setPasswordErrors({});
    return true;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return {
    email,
    emailErrors,
    handleEmailChange,
    password,
    passwordErrors,
    handlePasswordChange,
    validate,
  };
}
