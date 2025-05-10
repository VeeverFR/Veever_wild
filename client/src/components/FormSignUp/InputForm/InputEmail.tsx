import { FormControl, FormLabel } from "@mui/material";
import { StyledInput } from "../../../Styles/StyledInput";
import type { EmailValidation } from "../../../types/FormValidation/FormValidationCheck";

export default function InputEmail({
  email,
  handleEmailCheckChange,
  errors,
}: EmailValidation) {
  return (
    <FormControl className="formGroup">
      <FormLabel htmlFor="email">Votre adresse e-mail</FormLabel>
      <StyledInput
        value={email}
        onChange={handleEmailCheckChange}
        type="email"
        name="email"
        id="email"
        placeholder="Votre e-mail"
      />
      {errors && <p className="errors">{errors.emailCheck}</p>}
    </FormControl>
  );
}
