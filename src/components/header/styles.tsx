import { makeStyles, Theme } from "@material-ui/core";

const options = {
  name: "header",
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {},
    content: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: theme.breakpoints.values.xl,
    },
    actions: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      minWidth: 72,
      [theme.breakpoints.up("md")]: {
        minWidth: 84,
      },
    },
  }),
  options
);

export default useStyles;
