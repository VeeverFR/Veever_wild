export type PasswordValidation = {
  password: string;
  confirmPassword: string;
  errors: Record<string, string>;
  isSamePassword: boolean;
  handlePasswordChange: (value: string) => void;
  handleConfirmPasswordChange: (value: string) => void;
};

export type EmailValidation = {
  handleEmailCheckChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  email: string;
  errors: Record<string, string>;
};
