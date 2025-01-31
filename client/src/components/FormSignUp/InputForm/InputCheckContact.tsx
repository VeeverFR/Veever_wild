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
          id="email"
          value="email"
          control={<Radio id="email" />}
          label="E-mail"
        />
        <FormControlLabel
          className="checkBox"
          value="tel"
          id="tel"
          control={<Radio id="tel" />}
          label="Téléphone"
        />
      </RadioGroup>
    </FormControl>
  );
}
