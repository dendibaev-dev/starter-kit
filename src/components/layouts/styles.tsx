import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "100%",
  },
  container: {
    marginBottom: theme.spacing(4),
  },
  row: {},
  col: {},
  colSidebar: {
    flexGrow: 0,
    flexBasis: "320px",
    maxWidth: "320px",
  },
  colMain: {
    flexGrow: 0,
    flexBasis: "calc(100% - 320px)",
    maxWidth: "calc(100% - 320px)",
  },
  main: {},
  sidebar: {},
  header: {
    flexShrink: 0,
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  footer: {
    flexShrink: 0,
    width: "100%",
  },
}));

export default useStyles;
