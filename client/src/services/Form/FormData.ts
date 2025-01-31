import { useState } from "react";
import type { FormData } from "../../types/FormData/FormData";

export default function useFormData() {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    lastname: "",
    firstname: "",
    gender: "",
    date: "",
    phone: "",
    checkContact: "",
    checkCGU: "",
  });
  const handleChange = (name: string) => (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return { handleChange, formData };
}
