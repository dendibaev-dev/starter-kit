import { Hidden, Typography } from "@material-ui/core";
import { ComponentType } from "react";
import { ReactComponent as LogoIcon } from "./assets/logo.svg";
import useStyles from "./styles";

export const Logo: ComponentType<{ size?: string; text?: string | any }> = ({
  size,
  text,
}) => {
  const classes = useStyles({
    size,
  });

  return (
    <div className={classes.root}>
      <LogoIcon className={classes.icon} />
      <Hidden smDown>
        {text && (
          <Typography className={classes.text} variant="h6" component="div">
            {text}
          </Typography>
        )}
      </Hidden>
    </div>
  );
};
