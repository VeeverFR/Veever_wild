import { FormControl, FormLabel } from "@mui/material";
import { StyledInput } from "../../../Styles/StyledInput";
import type { PasswordValidation } from "../../../types/FormValidation/FormValidationCheck";

export default function InputPassword({
  password,
  confirmPassword,
  errors,
  isSamePassword,
  handlePasswordChange,
  handleConfirmPasswordChange,
}: PasswordValidation) {
  return (
    <>
      <FormControl className="formGroup" required>
        <FormLabel htmlFor="password">
          Veuillez entrer un mot de passe
        </FormLabel>
        <StyledInput
          value={password}
          onChange={(e) => handlePasswordChange(e.target.value)}
          type="password"
          name="password"
          id="password"
          placeholder="Votre mot de passe"
        />
        {Object.keys(errors).length > 0 && (
          <ul className="errors">
            {errors.length && <li className="error">{errors.length}</li>}
            {errors.maj && <li className="error">{errors.maj}</li>}
            {errors.number && <li className="error">{errors.number}</li>}
            {errors.specialChar && (
              <li className="error">{errors.specialChar}</li>
            )}
          </ul>
        )}
      </FormControl>

      <FormControl className="formGroup" required>
        <FormLabel htmlFor="confirmedPassword">
          Veuillez confirmer votre mot de passe
        </FormLabel>
        <StyledInput
          value={confirmPassword}
          onChange={(e) => handleConfirmPasswordChange(e.target.value)}
          placeholder="Confirmez votre mot de passe"
          type="password"
          name="confirmedPassword"
          id="confirmedPassword"
        />
        {!isSamePassword && <p className="errors">Mots de passe différents</p>}
      </FormControl>
    </>
  );
}
