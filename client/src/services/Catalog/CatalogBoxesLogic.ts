import { useState } from "react";
import type { CheckBoxProps } from "../../types/Catalog/CatalogTypes";

export default function useCatalogBoxes() {
  const [filters, setFilters] = useState<CheckBoxProps>({
    restaurant: false,
    activity: false,
    hotel: false,
    all: true,
  });

  const handleFilterChange = (filterName: keyof CheckBoxProps) => {
    if (filterName === "all") {
      const newValue = !filters.all;
      setFilters({
        restaurant: newValue,
        activity: newValue,
        hotel: newValue,
        all: newValue,
      });
    } else {
      setFilters((box) => {
        const newFilters = {
          ...box,
          [filterName]: !box[filterName],
        };

        const allSelected =
          newFilters.restaurant && newFilters.activity && newFilters.hotel;

        return {
          ...newFilters,
          all: allSelected,
        };
      });
    }
  };

  return { filters, handleFilterChange };
}
