import type { PasswordType } from "../../../types/Login/loginType";

export default function PasswordInput({
  password,
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
        aria-labelledby="passwordError"
      />
    </>
  );
}
