import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    minHeight: "100%",
  },
  container: {
    marginBottom: theme.spacing(4),
  },
  colSidebar: {
    flexGrow: 0,
    [theme.breakpoints.up("lg")]: {
      flexBasis: "280px",
      maxWidth: "280px",
    },
  },
  colMain: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    flexGrow: 1,
    minHeight: "100%",
    [theme.breakpoints.up("lg")]: {
      flexGrow: 0,
      flexBasis: "calc(100% - 280px)",
      maxWidth: "calc(100% - 280px)",
    },
  },
  header: {
    flexShrink: 0,
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  footer: {
    flexShrink: 0,
    width: "100%",
    padding: theme.spacing(1, 0),
  },
}));

export default useStyles;
