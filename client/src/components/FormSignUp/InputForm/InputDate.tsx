import { FormControl, FormLabel } from "@mui/material";
import { fr } from "date-fns/locale/fr";
import { StyledDatePicker } from "../../../Styles/StyledDatePickers";
import type { FormInput } from "../../../types/FormInput/FormInput";

export default function InputDate({ handleChange, value }: FormInput) {
  const today = new Date().toISOString();
  return (
    <FormControl className="formGroup">
      <FormLabel htmlFor="birthday">Votre date de naissance</FormLabel>
      <StyledDatePicker
        id="birthday"
        required
        className="birthdayCalendar"
        locale={fr}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        showIcon
        toggleCalendarOnIconClick
        selected={value ? new Date(value) : new Date(today)}
        onChange={(date: Date | null) =>
          handleChange(date ? date.toDateString() : "")
        }
      />
    </FormControl>
  );
}
