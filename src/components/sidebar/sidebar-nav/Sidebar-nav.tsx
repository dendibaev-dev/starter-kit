import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import {
  AssessmentOutlined as AssessmentOutlinedIcon,
  PermIdentityOutlined as PermIdentityOutlinedIcon,
} from "@material-ui/icons";
import { ComponentType } from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const SidebarNav: ComponentType = () => {
  const classes = useStyles();

  return (
    <List component="nav" aria-label="sidebar-nav" className={classes.root}>
      <ListItem
        selected
        component={Link}
        to="/dashboard"
        className={classes.link}
      >
        <ListItemIcon className={classes.linkIcon}>
          <AssessmentOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Overview" className={classes.linkText} />
      </ListItem>
      <ListItem
        component={Link}
        to="/dashboard/account"
        className={classes.link}
      >
        <ListItemIcon className={classes.linkIcon}>
          <PermIdentityOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Account" className={classes.linkText} />
      </ListItem>
    </List>
  );
};

export default SidebarNav;
