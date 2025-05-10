import { useState } from "react";
import type { ItineraryCard } from "../../types/ItineraryTypes/ItineraryTypes";

export const useItineraryFilter = () => {
  const [filters, setFilters] = useState({
    all: true,
    pending: false,
    validated: false,
  });

  const handleFilterChange = (filterName: "all" | "pending" | "validated") => {
    if (filterName === "all") {
      const newValue = !filters.all;
      setFilters({
        all: newValue,
        pending: newValue,
        validated: newValue,
      });
    } else {
      setFilters((prev) => {
        const newFilters = {
          ...prev,
          [filterName]: !prev[filterName],
        };

        const allSelected = newFilters.pending && newFilters.validated;
        return {
          ...newFilters,
          all: allSelected,
        };
      });
    }
  };

  const filterItineraries = (itineraries: ItineraryCard[]) => {
    return itineraries.filter(
      (itinerary) =>
        filters[itinerary.status as "all" | "pending" | "validated"] ||
        filters.all,
    );
  };

  return { filters, handleFilterChange, filterItineraries };
};
