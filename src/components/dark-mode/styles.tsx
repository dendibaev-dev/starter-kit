import { makeStyles, Theme } from "@material-ui/core";

const options = {
  name: "dark-mode",
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {},
    icon: {
      height: 22,
      width: 22,
    },
  }),
  options
);

export default useStyles;
