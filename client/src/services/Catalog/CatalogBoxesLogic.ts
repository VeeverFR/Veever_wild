import { useState } from "react";
import type { CheckBoxProps } from "../../types/Catalog/CatalogTypes";

export default function useCatalogBoxes() {
  const [filters, setFilters] = useState<CheckBoxProps>({
    restaurants: false,
    activities: false,
    hotels: false,
    all: true,
  });

  const handleFilterChange = (filterName: keyof CheckBoxProps) => {
    if (filterName === "all") {
      const newValue = !filters.all;
      setFilters({
        restaurants: newValue,
        activities: newValue,
        hotels: newValue,
        all: newValue,
      });
    } else {
      setFilters((box) => {
        const newFilters = {
          ...box,
          [filterName]: !box[filterName],
        };

        const allSelected =
          newFilters.restaurants && newFilters.activities && newFilters.hotels;

        return {
          ...newFilters,
          all: allSelected,
        };
      });
    }
  };

  return { filters, handleFilterChange };
}
