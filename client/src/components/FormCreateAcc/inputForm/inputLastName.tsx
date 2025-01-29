import { FormControl, FormLabel } from "@mui/material";
import { StyledInput } from "../../../services/Form/inputStyle";

import type { FormInput } from "../../../types/FormInput/FormInput";

export default function InputLastName({ handleChange, value }: FormInput) {
  return (
    <FormControl className="formGroup">
      <FormLabel htmlFor="lastname">Votre Nom</FormLabel>
      <StyledInput
        required
        type="text"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        name="lastname"
        id="lastname"
        placeholder="Votre nom"
      />
    </FormControl>
  );
}
