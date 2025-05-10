import "./ItinerayStyles.css";
import type { CardProps } from "../../types/ItineraryHomePage/ItinerayTypes";

const ItineraryCard = ({ title, imageSrc, onReserve }: CardProps) => {
  return (
    <section className="card">
      <img src={imageSrc} alt={title} className="card_image" />
      <h3 className="card-title">{title}</h3>
      <button type="button" className="reserve-button" onClick={onReserve}>
        Voir plus d'infos
      </button>
    </section>
  );
};

export default ItineraryCard;
