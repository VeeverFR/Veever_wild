import { styled } from "@mui/system";
import DatePicker from "react-datepicker";
export const StyledDatePicker = styled(DatePicker)(
  `
  display: inline-block;
  
  input {
    width: var(--width-input-form);
    height: var(--height-input-form);
    font-family: var(--textFont)
    font-size: calc(var(--font-size-ref) * 0.875);
    font-weight: var(--font-weight-S);
    line-height: 1.5;
    letter-spacing: var(--spacing-letter-ref);
    padding: var(--padding-input);
    border-radius: var(--border-ref);
    color: var(--color-input);
    background: var(--bckgColor-input);
    border: var(--border-input);
    box-shadow: var(--box-shadow-input);
  
    &:hover {
      border-color: var(--border-color-input-focus);
    }
  
    &:focus {
      outline: 0;
      border-color: var(--border-color-input-focus);
      box-shadow: var(--box-shadow-input-focus);
    }
  }

`,
);
