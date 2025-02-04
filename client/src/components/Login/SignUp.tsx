import { useNavigate } from "react-router-dom";
import "./SignUp.css";

export default function SignUp() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="signUpBtn"
      onClick={() => {
        navigate("/createAccount");
      }}
    >
      S'inscrire
    </button>
  );
}
