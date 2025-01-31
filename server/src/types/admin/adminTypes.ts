export type Admin = {
  id: number;
  user_id: number;
};

export type User = {
  id: number;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
};
