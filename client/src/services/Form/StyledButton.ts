import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const StyledButton = styled(Button)(
  `
  margin: calc(var(--spacing-ref)* 2);
  background: var(--gradientColor-CTA);
  font-family: var(--textFont);
  `,
);
