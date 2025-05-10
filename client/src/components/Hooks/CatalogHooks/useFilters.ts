import { useState } from "react";
import type { CheckBoxProps } from "../../../types/Catalog/CatalogTypes";

export default function useFilters() {
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
