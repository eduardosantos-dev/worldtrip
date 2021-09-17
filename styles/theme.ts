import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      50: "#e7f5fc",
      100: "#cfdddf",
      200: "#b5c5c8",
      300: "#9badb1",
      400: "#809699",
      500: "#677d80",
      600: "#47585B",
      700: "#364549",
      800: "#1e2b2c",
      900: "#001111",
    },
    highlight: "#FFBA08",
    highlight50: "rgba(255,186,8, 0.5)",
    dark: {
      black: "#000",
      text: "#47585B",
      info: "#999999",
      info50: "rgba(153,153,153,0.5)",
    },
    light: {
      white: "#FFFFFF",
      text: "#F5F8FA",
      info: "#DADADA",
    },
  },
  fonts: {
    headings: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "gray.600",
      },
    },
  },
});
