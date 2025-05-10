import { Checkbox, FormControlLabel } from "@mui/material";
import type {
  ItineraryFilter,
  ItineraryStatus,
  ViewMode,
} from "../../../types/SavedItinerariesTypes/SavedItinerariesTypes";
import "./SavedItinerariesFilters.css";

interface ItineraryFiltersProps {
  filters: ItineraryFilter[];
  selectedFilters: ItineraryStatus[];
  viewMode: ViewMode;
  onFilterChange: (status: ItineraryStatus) => void;
  onViewModeChange: (mode: ViewMode) => void;
}

export default function ItineraryFilters({
  filters,
  selectedFilters,
  viewMode,
  onFilterChange,
  onViewModeChange,
}: ItineraryFiltersProps) {
  return (
    <section className="itinerary-filters">
      <div className="status-filters">
        {filters.map((filter) => (
          <FormControlLabel
            key={filter.value}
            control={
              <Checkbox
                checked={selectedFilters.includes(filter.value)}
                onChange={() => onFilterChange(filter.value)}
              />
            }
            label={`${filter.label} (${filter.count})`}
          />
        ))}
      </div>
      <div className="view-filters">
        <FormControlLabel
          control={
            <Checkbox
              checked={viewMode === "list"}
              onChange={() => onViewModeChange("list")}
            />
          }
          label="Vue liste"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={viewMode === "calendar"}
              onChange={() => onViewModeChange("calendar")}
            />
          }
          label="Vue calendrier"
        />
      </div>
    </section>
  );
}
