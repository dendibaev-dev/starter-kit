import { Button, Divider } from "@material-ui/core";
import { ComponentType } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../thunks/auth";
import Logo from "../logo";
import SidebarNav from "./sidebar-nav/Sidebar-nav";
import useStyles from "./styles";

export const Sidebar: ComponentType = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const exit = () => dispatch(logout());

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Logo text="Starter kit" />
      </div>
      <Divider />
      <SidebarNav />
      <div className={classes.footer}>
        <Button onClick={exit} variant="outlined" color="inherit">
          Log out
        </Button>
      </div>
    </div>
  );
};
