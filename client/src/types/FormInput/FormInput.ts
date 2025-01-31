export type FormInput = {
  handleChange: (value: string) => void;
  value: string;
};

export type FormCheckBox = {
  handleChange: (value: boolean) => void;
  value: boolean;
};

export type FormEmail = {
  handleChange: FormInput;
  value: FormInput;
  errors: string;
};
