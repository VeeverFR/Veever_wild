export type MealOption = "dejeuner" | "diner" | "dejeuner-diner";

export interface AvailableDate {
  date: string;
  isAvailable: boolean;
}

export interface TimeSlotSelection {
  selected: MealOption;
  selectedDate?: string;
}

export type RestaurantTimeSlotProps = {
  onSelectionChange: (selection: TimeSlotSelection) => void;
  availableDates?: AvailableDate[];
};
