import { Button } from "baseui/button"
import { styled } from "baseui"

export const FullWidthButton = styled(Button, ({ $theme }) => ({
  color: $theme.colors.accent,
  width: "100%",
}))
