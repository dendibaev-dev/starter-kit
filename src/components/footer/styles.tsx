import { makeStyles, Theme } from "@material-ui/core";

const options = {
  name: "footer",
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      maxWidth: theme.breakpoints.values.xl,
      padding: theme.spacing(1, 3),
    },
  }),
  options
);

export default useStyles;
