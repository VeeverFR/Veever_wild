import type { PasswordType } from "../../../types/Login/loginType";

export default function PasswordInput({
  password,
  passwordErrors,
  handlePasswordChange,
}: PasswordType) {
  return (
    <>
      <label htmlFor="password">Mot de passe :</label>
      <input
        value={password}
        type="password"
        name="password"
        id="password"
        placeholder="Mot de passe"
        onChange={handlePasswordChange}
        aria-describedby="passwordError"
      />
      {Object.keys(passwordErrors).length > 0 && (
        <ul className="errors">
          {passwordErrors.length && (
            <li className="error">{passwordErrors.length}</li>
          )}
          {passwordErrors.maj && (
            <li className="error">{passwordErrors.maj}</li>
          )}
          {passwordErrors.number && (
            <li className="error">{passwordErrors.number}</li>
          )}
          {passwordErrors.specialChar && (
            <li className="error">{passwordErrors.specialChar}</li>
          )}
        </ul>
      )}
    </>
  );
}
