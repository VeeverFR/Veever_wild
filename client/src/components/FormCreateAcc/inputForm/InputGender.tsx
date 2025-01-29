import { FormControl, FormLabel } from "@mui/material";

import { useEffect, useState } from "react";
import { StyledSelect } from "../../../services/Form/StyledSelect";
import type { FormInput } from "../../../types/FormInput/FormInput";

type Gender = {
  id: number;
  type: string;
};

export default function InputGender({ handleChange, value }: FormInput) {
  const [genders, setGenders] = useState<Gender[]>([]);
  useEffect(() => {
    const fetchGenders = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/genders`);
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération de donnée");
        }
        const data = await response.json();
        setGenders(data);
      } catch (error) {
        console.error("Erreur lors du fetch: ", error);
      }
    };

    fetchGenders();
  }, []);
  return (
    <FormControl className="formGroup">
      <FormLabel htmlFor="gender">Votre genre</FormLabel>
      <StyledSelect
        required
        name="gender"
        id="gender"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="">Veuillez sélectionner</option>
        {genders.map((gender) => (
          <option key={gender.id} value={gender.id}>
            {gender.type}
          </option>
        ))}
      </StyledSelect>
    </FormControl>
  );
}
