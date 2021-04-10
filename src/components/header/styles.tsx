import { makeStyles, Theme } from "@material-ui/core";

const options = {
  name: "header",
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      padding: theme.spacing(0, 2),
    },
  }),
  options
);

export default useStyles;
