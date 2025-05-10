import { useNavigate } from "react-router-dom";
import "./SignUp.css";

export default function SignUp() {
  const navigate = useNavigate();

  return (
    // TODO: changer la redirection vers la page d'inscription quand ça sera merge
    <button
      type="button"
      className="signUpBtn"
      onClick={() => {
        navigate("/form-create-sign-up");
      }}
    >
      S'inscrire
    </button>
  );
}
