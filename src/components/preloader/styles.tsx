import { makeStyles, Theme } from "@material-ui/core";

const options = {
  name: "preloader",
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
      color: theme.palette.primary.main,
    },
  }),
  options
);

export default useStyles;
