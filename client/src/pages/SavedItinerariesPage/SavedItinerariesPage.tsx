import { useEffect, useState } from "react";
import ItineraryCalendar from "../../components/Saved-Itineraries/SavedItinerariesCalendar/SavedItinerariesCalendar";
import ItineraryFilters from "../../components/Saved-Itineraries/SavedItinerariesFilters/SavedItinerariesFilters";
import ItineraryList from "../../components/Saved-Itineraries/SavedItinerariesList/SavedItinerariesList";
import { useSaveCards } from "../../services/saveCardsContext/saveCardsContext";
import "./SavedItinerariesPage.css";

import type {
  Itinerary,
  ItineraryStatus,
  ViewMode,
} from "../../types/SavedItinerariesTypes/SavedItinerariesTypes";

export default function SavedItinerariesPage() {
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [selectedFilters, setSelectedFilters] = useState<ItineraryStatus[]>([]);
  const [itineraries, setItineraries] = useState<Itinerary[]>([]);
  const { saveCards } = useSaveCards();

  useEffect(() => {
    const transformedItineraries = saveCards.reduce(
      (acc: Itinerary[], card) => {
        const existingItinerary = acc.find(
          (itinerary) =>
            itinerary.title ===
            `Séjour du ${new Date().toLocaleDateString("fr-FR")}`,
        );

        if (existingItinerary) {
          existingItinerary?.activities.push({
            id: card.id,
            name: card.name,
            type: card.type,
          });
        } else {
          acc.push({
            id: Date.now(),
            title: `Séjour du ${new Date().toLocaleDateString("fr-FR")}`,
            status: "created",
            startDate: new Date(),
            endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            activities: [
              {
                id: card.id,
                name: card.name,
                type: card.type,
              },
            ],
          });
        }
        return acc;
      },
      [],
    );

    setItineraries(transformedItineraries);
  }, [saveCards]);

  const filteredItineraries = itineraries.filter(
    (itinerary) =>
      selectedFilters.length === 0 ||
      selectedFilters.includes(itinerary.status),
  );

  const handleFilterChange = (status: ItineraryStatus) => {
    setSelectedFilters((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status],
    );
  };

  return (
    <main className="my-itineraries">
      <h1>Mes Itinéraires</h1>
      <ItineraryFilters
        filters={[
          {
            label: "Créés",
            value: "created",
            count: filteredItineraries.filter((i) => i.status === "created")
              .length,
          },
          {
            label: "Réservés",
            value: "reserved",
            count: filteredItineraries.filter((i) => i.status === "reserved")
              .length,
          },
          {
            label: "Finalisés",
            value: "completed",
            count: filteredItineraries.filter((i) => i.status === "completed")
              .length,
          },
        ]}
        selectedFilters={selectedFilters}
        viewMode={viewMode}
        onFilterChange={handleFilterChange}
        onViewModeChange={setViewMode}
      />
      {viewMode === "list" ? (
        <ItineraryList itineraries={itineraries} />
      ) : (
        <ItineraryCalendar itineraries={itineraries} />
      )}
    </main>
  );
}
