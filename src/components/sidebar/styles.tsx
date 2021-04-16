import { makeStyles, Theme } from "@material-ui/core";

const options = {
  name: "sidebar",
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      height: "100%",
      width: "100%",
      minWidth: 280,
      maxWidth: 280,
    },
    header: {
      padding: theme.spacing(1.5, 1),
    },
    nav: {
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(1.5, 1),
    },
    link: {},
    activeLink: {},
    footer: {
      display: "flex",
      justifyContent: "center",
      marginTop: "auto",
    },
  }),
  options
);

export default useStyles;
