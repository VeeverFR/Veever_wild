export type UserType = {
  id: number;
  email: string;
  role: "admin" | "client";
};

export type AuthContextType = {
  user: UserType | null;
  login: (user: UserType) => void;
  logout: () => void;
  isAdmin: () => boolean;
  checkToken: () => Promise<UserType | null>;
};
