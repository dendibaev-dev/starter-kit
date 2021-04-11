import { makeStyles, Theme } from "@material-ui/core";

const options = {
  name: "not-found",
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      maxWidth: theme.breakpoints.values.lg,
      margin: theme.spacing(0, "auto"),
      [theme.breakpoints.up("md")]: {
        alignItems: "flex-start",
        textAlign: "center",
      },
    },
    title: {
      textAlign: "center",
    },
    text: {
      maxWidth: theme.breakpoints.values.sm,
      textAlign: "center",
      [theme.breakpoints.up("md")]: {
        textAlign: "left",
      },
    },
    actions: {
      marginTop: theme.spacing(2),
    },
    btn: {},
  }),
  options
);

export default useStyles;
