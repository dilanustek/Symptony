import { createMuiTheme } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors/";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: "#f3e5f5",
    },
  },
  typography: {
    fontFamily: "Roboto,sans-serif",
  },
});

theme.typography.h3 = {
  fontSize: "28px",
  "@media (min-width:600px)": {
    fontSize: "26px",
  },
  fontWeight: "300",
};

theme.typography.h6 = {
  fontWeight: "400",
  fontSize: "16px",
  color: "#999999",
};

export default theme;
