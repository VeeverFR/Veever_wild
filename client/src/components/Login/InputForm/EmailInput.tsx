import type { EmailType } from "../../../types/Login/loginType";

export default function EmailInput({
  email,
  handleEmailChange,
  emailErrors,
}: EmailType) {
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
        aria-describedby="emailError"
      />
      {emailErrors?.emailCheck && (
        <p id="emailError" className="error">
          {emailErrors.emailCheck}
        </p>
      )}
    </>
  );
}
