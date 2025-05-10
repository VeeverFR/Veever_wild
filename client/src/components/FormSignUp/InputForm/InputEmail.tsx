import { FormControl } from "@mui/material";
import { StyledInput } from "../../../Styles/StyledInput";
import type { EmailValidation } from "../../../types/FormValidation/FormValidationCheck";

export default function InputEmail({
  email,
  handleEmailCheckChange,
  errors,
}: EmailValidation) {
  return (
    <FormControl className="formGroup">
      <StyledInput
        value={email}
        onChange={handleEmailCheckChange}
        type="email"
        name="email"
        id="email"
        placeholder="Votre adresse email"
      />
      {errors && <p className="errors">{errors.emailCheck}</p>}
    </FormControl>
  );
}
