import { Box, Hidden, IconButton, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import { ComponentType } from "react";
import DarkMode from "../dark-mode";
import Language from "../language";
import Logo from "../logo";
import useStyles from "./styles";

interface HeaderProps {
  mode: string;
  handleDrawerToggle?: (event: any) => void;
}
export const Header: ComponentType<HeaderProps> = ({
  mode,
  handleDrawerToggle,
}) => {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.root}>
      <Toolbar className={classes.content}>
        {mode === "private" ? (
          <Hidden lgUp implementation="css">
            <IconButton
              color="inherit"
              aria-label="menu"
              edge="start"
              onClick={handleDrawerToggle}
              className={`classes.menuButton`}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        ) : (
          <Logo text="Starter kit" />
        )}
        <div
          className={clsx(
            classes.actions,
            mode === "private" && classes.actionsRight
          )}
        >
          <Language />
          <DarkMode />
        </div>
      </Toolbar>
    </Box>
  );
};
