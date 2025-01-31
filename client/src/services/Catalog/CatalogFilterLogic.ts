import { useSaveCards } from "../../services/saveCardsContext/saveCardsContext";
import type { RecapChrProps } from "../../types/Catalog/CatalogTypes";
import useCatalogFilter from "./CatalogBoxesLogic";

export default function useCatalogLogic() {
  const { filters, handleFilterChange } = useCatalogFilter();
  const { saveCards } = useSaveCards();

  const filteredCards = saveCards.filter(
    (card) => filters[card.type] || filters.all,
  );

  const counts = {
    all: saveCards.length,
    hotels: saveCards.filter((card) => card.type === "hotels").length,
    restaurants: saveCards.filter((card) => card.type === "restaurants").length,
    activities: saveCards.filter((card) => card.type === "activities").length,
  };

  const recapData: RecapChrProps[] = [
    { name: "Offres likées", emoji: "❤️", count: counts.all, type: "all" },
    { name: "Hôtels", emoji: "🏨", count: counts.hotels, type: "hotels" },
    {
      name: "Restaurants",
      emoji: "🍴",
      count: counts.restaurants,
      type: "restaurants",
    },
    {
      name: "Activités",
      emoji: "🏃‍♀️",
      count: counts.activities,
      type: "activities",
    },
  ];

  const filteredRecapData = recapData.filter((item) => filters[item.type]);
  return {
    filters,
    handleFilterChange,
    filteredCards,
    filteredRecapData,
  };
}
