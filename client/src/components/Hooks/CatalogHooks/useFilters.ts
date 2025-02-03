import { useState } from "react";
import type { CheckBoxProps } from "../../../types/Catalog/CatalogTypes";

export default function useFilters() {
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
      setFilters((prevFilters) => ({
        ...prevFilters,
        [filterName]: !prevFilters[filterName],
        all: false,
      }));
    }
  };

  return {
    filters,
    handleFilterChange,
  };
}
