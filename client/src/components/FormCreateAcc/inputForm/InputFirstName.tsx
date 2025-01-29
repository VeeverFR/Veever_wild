import { FormControl, FormLabel } from "@mui/material";
import { StyledInput } from "../../../services/Form/inputStyle";
import type { FormInput } from "../../../types/FormInput/FormInput";

export default function InputFirstName({ handleChange, value }: FormInput) {
  return (
    <FormControl className="formGroup">
      <FormLabel htmlFor="firstname">Votre Prénom</FormLabel>
      <StyledInput
        required
        type="text"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        name="firstname"
        id="firstname"
        placeholder="Votre prénom"
      />
    </FormControl>
  );
}
