import { useSaveCards } from "../../../services/saveCardsContext/saveCardsContext";
import type { RecapChrProps } from "../../../types/Catalog/CatalogTypes";
import useFilters from "./useFilters";

export default function useCatalogLogic() {
  const { filters, handleFilterChange } = useFilters();
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
    {
      name: "Offres likées",
      emoji: "/src/assets/images/heart.svg",
      count: counts.all,
      type: "all",
    },
    {
      name: "Hôtels",
      emoji: "/src/assets/images/hotel.svg",
      count: counts.hotels,
      type: "hotels",
    },
    {
      name: "Restaurants",
      emoji: "/src/assets/images/restaurant.svg",
      count: counts.restaurants,
      type: "restaurants",
    },
    {
      name: "Activités",
      emoji: "/src/assets/images/activity.svg",
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
