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
    },
  }),
  options
);

export default useStyles;
