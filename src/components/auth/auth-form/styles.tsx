import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const options = {
  name: "auth-form",
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
    formControl: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2),
    },
    actions: {
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.up("md")]: {
        flexDirection: "row",
        alignItems: "center",
      },
    },
    btn: {},
    link: {
      marginLeft: theme.spacing(2),
    },
  }),
  options
);

export default useStyles;
