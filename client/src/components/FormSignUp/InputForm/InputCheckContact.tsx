import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import type { FormInput } from "../../../types/FormInput/FormInput";

export default function InputCheckContact({ handleChange, value }: FormInput) {
  return (
    <FormControl className="formGroup checkContact" required>
      <FormLabel id="demo-radio-buttons-group-label">
        Pour les réservations préférez vous être contacté par:
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue=""
        name="radio-buttons-group"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      >
        <FormControlLabel
          className="checkBox"
          id="emailCheck"
          value="email"
          control={<Radio id="emailCheck" />}
          label="E-mail"
        />
        <FormControlLabel
          className="checkBox"
          value="tel"
          id="telCheck"
          control={<Radio id="telCheck" />}
          label="Téléphone"
        />
      </RadioGroup>
    </FormControl>
  );
}
