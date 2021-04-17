import { makeStyles, Theme } from "@material-ui/core";

const options = {
  name: "sidebar",
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      width: "100%",
      minWidth: 280,
      maxWidth: 280,
    },
    header: {
      padding: theme.spacing(1.5, 1),
    },
    footer: {
      display: "flex",
      justifyContent: "center",
      marginTop: "auto",
      padding: theme.spacing(1.5, 0),
    },
  }),
  options
);

export default useStyles;
