import { useState } from "react";
import type { MealOption } from "../../../types/TimeSlot/TimeSlotTypes";

export const useRestaurantTimeSlotLogic = (
  availableDates: { date: string; isAvailable: boolean }[],
) => {
  const [selectedOptionsByDate, setSelectedOptionsByDate] = useState<
    Record<string, MealOption[]>
  >({});
  const [selectedDate, setSelectedDates] = useState<string[]>([]);

  const handleOptionSelect = (date: string, option: MealOption) => {
    setSelectedOptionsByDate((prevOptions) => {
      const optionsForDates = prevOptions[date] || [];
      if (optionsForDates.includes(option)) {
        return {
          ...prevOptions,
          [date]: optionsForDates.filter((opt) => opt !== option),
        };
      }
      return {
        ...prevOptions,
        [date]: [...optionsForDates, option],
      };
    });
  };

  const handleDateSelect = (date: string) => {
    setSelectedDates((prevDates) => {
      if (prevDates.includes(date)) {
        return prevDates.filter((d) => d !== date);
      }
      return [...prevDates, date];
    });
  };

  return {
    availableDates,
    selectedOptionsByDate,
    selectedDate,
    handleOptionSelect,
    handleDateSelect,
  };
};
