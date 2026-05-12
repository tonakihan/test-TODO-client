import type { ThemeOptions } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const brandedTokens: ThemeOptions = {
  palette: {
    primary: {
      main: "#fbbf24",
    },
    secondary: {
      main: "#525252",
    },
    info: {
      main: "#2563eb",
    },
  },
  typography: {
    fontFamily: "var(--font-primary)",
  },
};

const appTheme = createTheme({
  ...brandedTokens,
});

export { appTheme };
