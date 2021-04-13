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
    padding: theme.spacing(1, 0),
  },
}));

export default useStyles;
