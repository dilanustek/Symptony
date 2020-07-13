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
});

export default theme;
