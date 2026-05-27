import { createTheme } from "@mui/material";
import { brandedTokens } from "@/styles/theme";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  ...brandedTokens,
  components: {
    /*MuiFormGroup: {
      // In the case without "status>>lable with custom backgroundColor"
      styleOverrides: {
        root: {
          fontWeight: "400",
          color: grey["500"],
        },
      },
    },*/
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontWeight: "500",
          borderRadius: "2em",
          paddingInline: "0.9em",
          color: "hsl(0deg 0% 0% / 49%)",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          border: `1px solid ${grey["400"]}`,
          borderRadius: "0.5em",
          overflow: "hidden",
          /* FIXME: activity button */
          backgroundColor: "white",
        },
      },
    },
  },
});

export default theme;
