import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const StyledButton = styled(Button)(
  `
  margin: calc(var(--spacing-ref)* 2);
  background: var(--gradientColor);
  font-family: var(--textFont);
  color: var(--bckgColor);
  padding: 1rem !important;
  border-radius: calc(var(--border-ref) * 3);
  width: 60%;
  `,
);
