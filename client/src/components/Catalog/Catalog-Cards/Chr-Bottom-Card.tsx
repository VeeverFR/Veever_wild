import "./Chr-Bottom-Card.css";
import { useNavigate } from "react-router-dom";

export default function ChrBottomCard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/stay");
  };

  return (
    <section className="chr-bottom-section">
      <button className="next-button" type="button" onClick={handleClick}>
        Suivant
      </button>
    </section>
  );
}
