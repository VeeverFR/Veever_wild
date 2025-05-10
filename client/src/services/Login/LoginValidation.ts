import { useCallback, useState } from "react";

export default function useLoginValidation() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrors, setEmailErrors] = useState({});
  const [passwordErrors, setPasswordErrors] = useState({});

  const validateEmail = useCallback((email: string) => {
    const newEmailErrors: Record<string, string> = {};
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      newEmailErrors.emailCheck = "Votre adresse e-mail est invalide";
    }

    return newEmailErrors;
  }, []);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailErrors(validateEmail(newEmail));
  };

  const validatePassword = useCallback((password: string) => {
    const newPasswordErrors: Record<string, string> = {};

    if (password.length < 12)
      newPasswordErrors.length =
        "Votre mot de passe doit contenir au moins 12 caractères";
    if (!/\d/.test(password)) {
      newPasswordErrors.number =
        "Votre mot de passe doit contenir au moins un chiffre";
    }
    if (password === password.toLowerCase()) {
      newPasswordErrors.maj =
        "Votre mot de passe doit contenir au moins une majuscule";
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      newPasswordErrors.specialChar =
        "Votre mot de passe doit contenir au moins un caractère spécial";
    }

    return newPasswordErrors;
  }, []);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value; // Récupérer la valeur de l'input
    setPassword(newPassword);
    setPasswordErrors(validatePassword(newPassword)); // Valider le mot de passe
  };

  return {
    email,
    emailErrors,
    handleEmailChange,
    password,
    passwordErrors,
    handlePasswordChange,
  };
}
