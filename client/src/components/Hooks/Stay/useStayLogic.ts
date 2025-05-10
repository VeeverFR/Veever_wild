import { useState } from "react";

const min_price = 0;
const max_price = 1000;

export function useStayLogic() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [groupChoice, setGroupChoice] = useState<string>("");
  const [selectedNumber, setSelectedNumber] = useState<number | string>("");
  const [checkBoxes, setCheckBoxes] = useState<{ [key: string]: boolean }>({});
  const [selectedDays, setSelectedDays] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [priceRange, setPriceRange] = useState<number[]>([
    min_price,
    max_price,
  ]);
  const formatPrice = (value: number) => `${value}€`;
  const [hotel, setHotel] = useState(false);
  const [activity, setActivity] = useState(false);
  const [restaurant, setRestaurant] = useState(false);

  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [mealOptionsVisible, setMealOptionsVisible] = useState<{
    [key: string]: boolean;
  }>({});

  const handleCheckboxChange = (dayKey: string, option: string) => {
    setMealOptionsVisible((prev) => ({
      ...prev,
      [`${dayKey}-${option}`]: !prev[`${dayKey}-${option}`],
    }));
    setCheckBoxes((prev) => ({
      ...prev,
      [`${dayKey}-${option}`]: !prev[`${dayKey}-${option}`],
    }));
  };

  const handleDateChange = (date: Date | null) => {
    if (!date) return;

    const updatedDates = [...selectedDates];
    const dateIndex = updatedDates.findIndex(
      (d) => d.getTime() === date.getTime(),
    );

    if (dateIndex !== -1) {
      updatedDates.splice(dateIndex, 1);
    } else {
      if (updatedDates.length < 3) {
        updatedDates.push(date);
      } else {
        setErrorMessage("Vous ne pouvez sélectionner que jusqu'à 3 jours.");
        return;
      }
    }

    setErrorMessage(null);
    setSelectedDates(updatedDates);
    onChange([updatedDates[0] || null, updatedDates[1] || null]);
  };

  const threeDaysMaximum = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    if (start && end) {
      const diffInDays =
        (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
      if (diffInDays > 3) {
        setErrorMessage("Le séjour ne peut pas dépasser 3 jours.");
        return false;
      }
    }
    setErrorMessage(null);
    return true;
  };

  const handleDaySelection = (days: number) => {
    setSelectedDays(days);

    const updatedCheckBoxes: { [key: string]: boolean } = {};
    for (let day = 1; day <= days; day++) {
      for (let option = 1; option <= 3; option++) {
        const key = `${day}-${option}`;
        updatedCheckBoxes[key] = false;
      }
    }
    setCheckBoxes(updatedCheckBoxes);
  };

  const onChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setSelectedDate(start);
    setStartDate(start);
    setEndDate(end);
  };

  const handlePriceRangeChange = (_: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  const groupOptions = ["Famille", "Amis", "Couple", "Seul"];
  const numberOptions = [];
  for (let i = 1; i <= 12; i++) {
    numberOptions.push(i);
  }

  return {
    hotel,
    setHotel,
    activity,
    setActivity,
    restaurant,
    setRestaurant,
    errorMessage,
    startDate,
    endDate,
    threeDaysMaximum,
    checkBoxes,
    handleCheckboxChange,
    handleDaySelection,
    selectedDays,
    onChange,
    selectedDate,
    groupChoice,
    setGroupChoice,
    selectedNumber,
    setSelectedNumber,
    groupOptions,
    numberOptions,
    priceRange,
    handlePriceRangeChange,
    formatPrice,
    min_price,
    max_price,
    selectedDates,
    setSelectedDates,
    handleDateChange,
    mealOptionsVisible,
    setMealOptionsVisible,
  };
}
