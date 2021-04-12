import { makeStyles, Theme } from "@material-ui/core";

const options = {
  name: "logo",
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
    },
    icon: (props: any) => ({
      height: props.size === "large" ? 50 : 32,
      width: props.size === "large" ? 54 : 36,
    }),
    text: {
      color: theme.palette.primary.main,
      paddingLeft: theme.spacing(1),
    },
  }),
  options
);

export default useStyles;
