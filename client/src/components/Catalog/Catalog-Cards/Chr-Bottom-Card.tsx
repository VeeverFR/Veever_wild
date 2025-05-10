import { StyledButton } from "../../../Styles/StyledButton";
import "./Chr-Bottom-Card.css";
import { useNavigate } from "react-router-dom";

export default function ChrBottomCard() {
  const navigate = useNavigate();

  return (
    <section className="chr-bottom-section">
      <StyledButton onClick={() => navigate("/stay")}>Suivant</StyledButton>
    </section>
  );
}
