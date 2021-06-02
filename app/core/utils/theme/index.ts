import { createDarkTheme } from "baseui"

const primitives = {
  primary: "#36257e",
  primary50: "#e8e8f3",
  primary100: "#c5c4e3",
  primary200: "#a09fcf",
  primary300: "#7c7abc",
  primary400: "#635dae",
  primary500: "#4b409f",
  primary600: "#463996",
  primary700: "#3d2f8a",
  primary900: "#291269",
  accent: "#b3c03e",
  accent50: "#f6f7e8",
  accent100: "#e8ecc5",
  accent200: "#d9e09f",
  accent300: "#cad378",
  accent400: "#bec95b",
  accent500: "#b3c03e",
  accent600: "#acba38",
  accent700: "#a3b230",
  accent800: "#9aaa28",
  accent900: "#8b9c1b",
}

export const theme = createDarkTheme(primitives, {
  colors: {
    buttonPrimaryFill: primitives.accent50,
    buttonPrimaryText: primitives.primary,
    buttonPrimaryHover: primitives.accent,
    buttonPrimaryActive: primitives.accent200,
  },
})
