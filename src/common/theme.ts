import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#5BE584",
      main: "#00AB55",
      dark: "#007B55",
    },
    info: {
      light: "#74CAFF",
      main: "#1890FF",
      dark: "#0C53B7",
    },
    success: {
      light: "#AAF27F",
      main: "#54D62C",
      dark: "#229A16",
    },
    warning: {
      light: "#FFE16A",
      main: "#FFC107",
      dark: "#B78103",
    },
    error: {
      light: "#FFA48D",
      main: "#FF4842",
      dark: "#B72136",
    },
    grey: {
      100: "#F9FAFB",
      200: "#F4F6F8",
      300: "#DFE3E8",
      400: "#C4CDD5",
      500: "#919EAB",
      600: "#637381",
      700: "#454F5B",
      800: "#212B36",
      900: "#161C24",
    },
  },
  typography: {
    fontFamily: ["JetBrains Mono", "sans-serif"].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'html, body, #root': {
          height: '100%',
          width: '100%'
        }
      },
    },
  }
});

export default theme;
