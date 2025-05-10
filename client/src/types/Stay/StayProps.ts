export type StayTopPageProps = {
  selectedDates: Date[];
  onChange: (date: Date | null) => void;
  errorMessage: string | null;
  setSelectedDates: (dates: Date[]) => void;
};

export type StayBottomPageProps = {
  selectedDates: Date[];
  selectedDate: Date | null;
  numberOfDays: number;
  mealOptionsVisible: { [key: string]: boolean };
  setMealOptionsVisible: React.Dispatch<
    React.SetStateAction<{ [key: string]: boolean }>
  >;
  handleCheckboxChange: (dayKey: string, option: string) => void;
  checkBoxes: { [key: string]: boolean };
};
