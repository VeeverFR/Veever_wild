import { styled } from "@mui/system";
import { MuiTelInput } from "mui-tel-input";
export const StyledTelInput = styled(MuiTelInput)(
  `
    width: var(--width-input-form);
    font-family: var(--textFont);
    font-size: calc(var(--font-size-ref) * 0.875);
    font-weight: var(--font-weight-S);
    line-height: 1.5;
    letter-spacing: var(--spacing-letter-ref); 
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
  `,
);
