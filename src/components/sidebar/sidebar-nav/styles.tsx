import { makeStyles, Theme } from "@material-ui/core";

const options = {
  name: "sidebar-nav",
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      "& .Mui-selected": {
        background: theme.palette.grey[200],
      },
    },
    link: {
      "&:hover": {
        background: theme.palette.grey[200],
      },
    },
    linkIcon: {
      minWidth: 32,
      color: theme.palette.info.main,
    },
    linkText: {
      color: theme.palette.info.main,
    },
    activeLink: {},
  }),
  options
);

export default useStyles;
