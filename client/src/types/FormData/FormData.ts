export type FormData = {
  nickname: string;
  lastname: string;
  firstname: string;
  gender_id: number;
  birthdate: string;
  phoneNumber: string;
  checkContact: string;
  checkCGU: string;
};

export type FormDataContact = {
  checkContact: string;
  phone?: string;
};
