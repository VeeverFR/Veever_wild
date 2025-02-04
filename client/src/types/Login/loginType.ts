export type EmailType = {
  email: string;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type PasswordType = {
  password: string;
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type LoginFormType = {
  onSubmit: (email: string, password: string) => Promise<void>;
  isLoading: boolean;
};

export type DecodedTokenType = {
  id: number;
  email: string;
  role: "admin" | "client";
  exp: number;
  iat: number;
};
