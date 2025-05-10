import type { Itinerary } from "../../../types/SavedItinerariesTypes/SavedItinerariesTypes";
import "./SavedItinerariesList.css";

interface ItineraryListProps {
  itineraries: Itinerary[];
}

export default function ItineraryList({ itineraries }: ItineraryListProps) {
  if (itineraries.length === 0) {
    return <p className="no-itineraries">Aucun itinéraire trouvé</p>;
  }

  return (
    <section className="itinerary-list">
      {itineraries.map((itinerary) => (
        <article
          key={itinerary.id}
          className={`itinerary-card ${itinerary.status}`}
        >
          <header>
            <h2>{itinerary.title}</h2>
            <span className="status-badge">{itinerary.status}</span>
          </header>
          <main className="dates">
            <time dateTime={itinerary.startDate.toISOString()}>
              Du {itinerary.startDate.toLocaleDateString()}
            </time>
            <time dateTime={itinerary.endDate.toISOString()}>
              au {itinerary.endDate.toLocaleDateString()}
            </time>
          </main>
          <ul className="activities-list">
            {itinerary.activities.map((activity) => (
              <li
                key={activity.id}
                className={`activity-item ${activity.type}`}
              >
                {activity.name}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
