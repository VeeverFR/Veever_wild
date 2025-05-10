import type { EmailType } from "../../../types/Login/loginType";

export default function EmailInput({ email, handleEmailChange }: EmailType) {
  return (
    <>
      <label htmlFor="email">Email :</label>
      <input
        value={email}
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        onChange={handleEmailChange}
        aria-labelledby="emailError"
      />
    </>
  );
}
