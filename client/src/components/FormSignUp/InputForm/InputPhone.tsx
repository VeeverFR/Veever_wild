import { FormControl, FormLabel } from "@mui/material";
import { StyledTelInput } from "../../../Styles/StyledTelInput";
import type { FormInput } from "../../../types/FormInput/FormInput";

export default function InputPhone({ handleChange, value }: FormInput) {
  const handleChangePhone = (newValue: string) => {
    handleChange(newValue);
  };
  return (
    <FormControl className="formGroup phone">
      <FormLabel htmlFor="tel">Votre numéro de téléphone</FormLabel>
      <StyledTelInput
        required
        id="tel"
        value={String(value)}
        onChange={handleChangePhone}
        defaultCountry="FR"
      />
    </FormControl>
  );
}
