import { responsiveFontSizes } from "@mui/material";
import createTheme from "@mui/material/styles/createTheme";

let theme = createTheme({
    palette: {
      primary: {
        main: '#292929',
      },
      secondary: {
        main: '#191970',
      },
    },
    typography:{
        fontFamily: 'Helvetica Neue',
    }
  });
  theme = responsiveFontSizes(theme);
  export default theme;