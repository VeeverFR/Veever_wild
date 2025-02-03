import { Fragment, useState } from "react";
import type { Card } from "../../types/Catalog/CatalogTypes";
import "./VersusCard.css";
import { Link } from "react-router-dom";
import { StyledButton } from "../../services/Form/StyledButton";

type VersusCardProps = {
  versusCards: Card[];
  handleValidationVersus: (cardId: number) => void;
  handleRewind: () => void;
};

export default function Versus({
  versusCards,
  handleValidationVersus,
  handleRewind,
}: VersusCardProps) {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  if (versusCards.length === 0) {
    return <p>Aucune carte sauvegardée.</p>;
  }

  const handleSelectVersus = (cardId: number) => {
    setSelectedCard(cardId);
  };

  return (
    <main className="versus-container">
      <h1 className="versus-title">Choissisez votre {versusCards[0].type}</h1>
      <button type="button" onClick={handleRewind}>
        Rewind
      </button>
      {versusCards.map((card) => (
        <Fragment key={card.id}>
          <article
            key={card.id}
            className={`versus-card ${selectedCard === card.id ? "selected" : ""}`}
            onKeyDown={() => handleSelectVersus(card.id)}
            onClick={() => handleSelectVersus(card.id)}
          >
            <figure className="tag-img-container">
              <img
                className="versus-img"
                src={`http://localhost:3310/${card.images[0].link}`}
                alt=""
              />
              <figcaption className="tag-versus-container">
                <h2>{card.name}</h2>
                <p> Prix moyen: {card.average_budget / 100} euros</p>
                <p>{card.type}</p>
                <p>{card.address}</p>
                {selectedCard === card.id ? (
                  <svg
                    id="Calque_1"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="0 0 24 24"
                    width="50"
                    fill="#f69d41"
                  >
                    <title>check selection</title>
                    <path
                      className="st0"
                      d="M9,21c-1.7,0-3.1-.6-4.3-1.8s-1.8-2.6-1.8-4.3v-6c0-1.7.6-3.1,1.8-4.3s2.6-1.8,4.3-1.8h6c1.7,0,3.1.6,4.3,1.8s1.8,2.6,1.8,4.3v6c0,1.7-.6,3.1-1.8,4.3s-2.6,1.8-4.3,1.8h-6ZM11,16l6-6-1.4-1.4-4.6,4.6-2.2-2.2-1.4,1.4,3.6,3.6ZM9,19h6c1.1,0,2-.4,2.8-1.2.8-.8,1.2-1.7,1.2-2.8v-6c0-1.1-.4-2-1.2-2.8s-1.7-1.2-2.8-1.2h-6c-1.1,0-2,.4-2.8,1.2-.8.8-1.2,1.7-1.2,2.8v6c0,1.1.4,2,1.2,2.8.8.8,1.7,1.2,2.8,1.2Z"
                    />
                  </svg>
                ) : null}
              </figcaption>
            </figure>
            <Link to="/prestataire">+ d'infos</Link>
          </article>
          <p className="vs">vs</p>
        </Fragment>
      ))}
      <StyledButton
        onClick={() =>
          selectedCard !== null && handleValidationVersus(selectedCard)
        }
      >
        Valider mon choix
      </StyledButton>
    </main>
  );
}
