import { makeStyles, Theme } from "@material-ui/core";

const options = {
  name: "language",
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {},
    icon: {
      height: 24,
      width: 28,
    },
  }),
  options
);

export default useStyles;
