import { useCallback, useState } from "react";
import type { passwordCheck } from "../../types/FormValidation/PasswordCheck";

export default function useFormValidation() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isSamePassword, setIsSamePassword] = useState(true);

  const validatePassword = useCallback((password: string) => {
    const newErrors: passwordCheck = {};

    if (password.length < 12) {
      newErrors.length =
        "Votre mot de passe doit contenir au moins 12 caractères";
    }
    if (!/\d/.test(password)) {
      newErrors.number = "Votre mot de passe doit contenir au moins un chiffre";
    }
    if (password === password.toLowerCase()) {
      newErrors.maj = "Votre mot de passe doit contenir au moins une majuscule";
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      newErrors.specialChar =
        "Votre mot de passe doit contenir au moins un caractère spécial";
    }

    return newErrors;
  }, []);

  const handlePasswordChange = (newPassword: string) => {
    setPassword(newPassword);
    setErrors(validatePassword(newPassword));
  };

  const handleConfirmPasswordChange = (newPassword: string) => {
    setConfirmPassword(newPassword);
    setIsSamePassword(newPassword === password);
  };

  const validateEmail = useCallback((email: string) => {
    const newErrors: Record<string, string> = {};
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      newErrors.emailCheck = "Votre adresse e-mail est invalide";
    }

    return newErrors;
  }, []);

  const handleEmailChange = (newEmail: string) => {
    setEmail(newEmail);
    setErrors(validateEmail(newEmail));
  };

  const handleEmailCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleEmailChange(e.target.value);
  };

  return {
    email,
    password,
    errors,
    confirmPassword,
    isSamePassword,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleEmailCheckChange,
  };
}
