import { Input, inputClasses } from "@mui/base/Input";
import { styled } from "@mui/system";
export const StyledInput = styled(Input)(
  `
     display: inline-block;
    .${inputClasses.input} {
      width: var(--width-input-form);
      height: var(--height-input-form);
      font-family: var(--textFont);
      font-size: calc(var(--font-size-ref) * 0.875);
      font-weight: var(--font-weight-S);
      letter-spacing: var(--spacing-letter-ref);
      line-height: 1.5;
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
