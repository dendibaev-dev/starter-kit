import { Button, Divider } from "@material-ui/core";
import { ComponentType } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../thunks/auth";
import Logo from "../logo";
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
      <div className={classes.nav}>
        <NavLink className={classes.link} to="#">
          Overview
        </NavLink>
        <NavLink className={classes.link} to="#">
          Finance
        </NavLink>
        <NavLink className={classes.link} to="#">
          Account
        </NavLink>
      </div>
      <div className={classes.footer}>
        <Button onClick={exit} variant="outlined">
          Log out
        </Button>
      </div>
    </div>
  );
};
