import useLoginValidation from "../../services/Login/LoginValidation";
import EmailInput from "./InputForm/EmailInput";
import PasswordInput from "./InputForm/PasswordInput";
import "./LoginForm.css";

export default function LoginForm() {
  const {
    email,
    emailErrors,
    handleEmailChange,
    password,
    handlePasswordChange,
    passwordErrors,
  } = useLoginValidation();

  return (
    <form className="loginForm">
      <EmailInput
        email={email}
        handleEmailChange={handleEmailChange}
        emailErrors={emailErrors}
      />
      <PasswordInput
        password={password}
        handlePasswordChange={handlePasswordChange}
        passwordErrors={passwordErrors}
      />
      <button type="submit">Connexion</button>
    </form>
  );
}
