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
