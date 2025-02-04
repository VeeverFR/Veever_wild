import logo from "../../assets/images/logo.svg";
import ExternalSystemLogin from "../../components/Login/ExternalSystemLogin";
import LoginForm from "../../components/Login/LoginForm";
import PasswordForgotten from "../../components/Login/PasswordForgotten";
import SignUp from "../../components/Login/SignUp";
import "./Login.css";

export default function Login() {
  return (
    <main className="loginMain">
      <img src={logo} alt="Veever logo" />
      <h2>Connexion</h2>
      <p>Connectez-vous pour accéder à Veever</p>
      <LoginForm />
      <PasswordForgotten />
      <p>ou</p>
      <ExternalSystemLogin />
      <SignUp />
    </main>
  );
}
