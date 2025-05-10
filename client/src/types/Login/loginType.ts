export type EmailType = {
  email: string;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  emailErrors: Record<string, string>;
};

export type PasswordType = {
  password: string;
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  passwordErrors: Record<string, string>;
};

export type LoginFormType = {
  onSubmit: (email: string, password: string) => Promise<void>;
  isLoading: boolean;
};
