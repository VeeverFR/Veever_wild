import { useState } from "react";
import type { NewsLetterServiceProps } from "../../types/Newsletter/NewsletterType";

export default function useNewsLetterService({
  onSubmitSuccess,
}: NewsLetterServiceProps = {}) {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || emailRegex.test(email)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
      alert("Merci de votre intérêt pour Veever !");
      setEmail("");
      if (onSubmitSuccess) onSubmitSuccess();
    }
  }

  return { handleInput, handleSubmit, email, isEmailValid };
}
