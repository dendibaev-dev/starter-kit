import { Box, Toolbar } from "@material-ui/core";
import Language from "../language";
import Logo from "../logo";
import useStyles from "./styles";

export const Header = () => {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.root}>
      <Toolbar className={classes.content}>
        <Logo text="Starter kit" />
        <Language />
      </Toolbar>
    </Box>
  );
};
