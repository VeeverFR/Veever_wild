import { useNavigate } from "react-router-dom";
import "./SignUp.css";

export default function SignUp() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="signUpBtn"
      onClick={() => {
        navigate("/signup");
      }}
    >
      S'inscrire
    </button>
  );
}
