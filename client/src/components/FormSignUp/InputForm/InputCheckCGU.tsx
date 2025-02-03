import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import { Link } from "react-router-dom";
import type { FormInput } from "../../../types/FormInput/FormInput";

export default function InputCheckCGU({ handleChange, value }: FormInput) {
  return (
    <FormControl className="formGroup checkCGU">
      <FormLabel className="checkLabel">
        Merci de bien vouloir lire les
        <Link to="/cgu-veever"> conditions général d'utilisation</Link>
      </FormLabel>
      <FormControlLabel
        className="checkBox"
        required
        control={
          <Checkbox
            value={value}
            onChange={(e) => handleChange(e.target.value)}
          />
        }
        label="Accepter"
      />
    </FormControl>
  );
}
