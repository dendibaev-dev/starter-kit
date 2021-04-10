import { makeStyles, Theme } from "@material-ui/core";

const options = {
  name: "language",
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {},
    icon: {
      height: 20,
      width: 24,
    },
  }),
  options
);

export default useStyles;
