import { Divider } from "@material-ui/core";
import { ComponentType } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../logo";
import useStyles from "./styles";

export const Sidebar: ComponentType = () => {
  const classes = useStyles();
  //   const { t } = useTranslation();

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
    </div>
  );
};
