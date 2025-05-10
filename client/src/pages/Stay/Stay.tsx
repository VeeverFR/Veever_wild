import { useStayLogic } from "../../components/Hooks/Stay/useStayLogic";
import RestaurantTimeSlot from "../../components/RestaurantTimeSlot/RestaurantTimeSlot";
import StayBottomPage from "../../components/Stay/StayBottomPage";
import StayTopPage from "../../components/Stay/StayTopPage";

export default function Stay() {
  const {
    selectedDates,
    setSelectedDates,
    errorMessage,
    handleDateChange,
    mealOptionsVisible,
    setMealOptionsVisible,
    handleCheckboxChange,
    checkBoxes,
  } = useStayLogic();

  const handleSelectionChange = () => {};

  return (
    <>
      <StayTopPage
        selectedDates={selectedDates}
        onChange={handleDateChange}
        errorMessage={errorMessage}
        setSelectedDates={setSelectedDates}
      />
      <RestaurantTimeSlot
        availableDates={selectedDates.map((date) => ({
          date: date.toString(),
          isAvailable: true,
        }))}
        onSelectionChange={handleSelectionChange}
      />
      <StayBottomPage
        selectedDates={selectedDates}
        selectedDate={selectedDates[0] || null}
        numberOfDays={selectedDates.length}
        mealOptionsVisible={mealOptionsVisible}
        setMealOptionsVisible={setMealOptionsVisible}
        handleCheckboxChange={handleCheckboxChange}
        checkBoxes={checkBoxes}
      />
    </>
  );
}
