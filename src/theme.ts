import { responsiveFontSizes } from "@mui/material";
import createTheme from "@mui/material/styles/createTheme";

let theme = createTheme({
    palette: {
      primary: {
        main: "#000080",
      },
      secondary: {
        main: "#00BFFF",
      },
    },
    typography:{
        fontFamily: "Helvetica Neue",
    }
  });
  theme = responsiveFontSizes(theme);
  export default theme;