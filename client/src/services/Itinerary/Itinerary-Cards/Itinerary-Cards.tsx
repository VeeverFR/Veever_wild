// src/components/Itinerary/Itinerary-Cards/Itinerary-Cards.tsx
import type { ItineraryCardsProps } from "../../../types/ItineraryTypes/ItineraryTypes";
import "./Itinerary-Cards.css";

export default function ItineraryCards({ itineraries }: ItineraryCardsProps) {
  if (itineraries.length === 0) {
    return <p>Aucun itinéraire trouvé.</p>;
  }

  return (
    <section className="itinerary-cards">
      {itineraries.map((itinerary) => (
        <article
          key={itinerary.id}
          className={`itinerary-card itinerary-card-${itinerary.status}`}
        >
          <h2>{itinerary.title}</h2>
          <time dateTime={itinerary.date}>
            {new Date(itinerary.date).toLocaleDateString("fr-FR")}
          </time>
          <p className="price">{itinerary.totalPrice}€</p>
          <ul className="itinerary-items">
            {itinerary.items.map((item) => (
              <li key={item.id} className={`item-type-${item.type}`}>
                {item.name}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
