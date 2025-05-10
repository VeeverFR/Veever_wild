import type { StayBottomPageProps } from "../../types/Stay/StayProps";
import "./StayBottomPage.css";
import { useNavigate } from "react-router-dom";
export default function StayBottomPage(_: StayBottomPageProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/settings");
  };
  return (
    <main className="stay-container">
      <article className="other-informations">
        <h3>Autres informations</h3>
        <label>
          <input type="checkbox" />
          Accès PMR
        </label>
        <label>
          <input type="checkbox" />
          Pour toute la famille
        </label>
        <label>
          <input type="checkbox" />
          Animaux acceptés
        </label>

        <h3>Accessibilité</h3>
        <label>
          <input type="checkbox" />
          Véhiculé
        </label>
        <label>
          <input type="checkbox" />
          Transports en commun
        </label>
      </article>
      <button className="next-button" type="button" onClick={handleClick}>
        Suivant
      </button>
      2
    </main>
  );
}
