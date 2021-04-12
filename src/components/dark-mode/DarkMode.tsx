import { ButtonBase } from "@material-ui/core";
import { ReactComponent as MoonIcon } from "./assets/icons/moon.svg";
import { ReactComponent as SunnyIcon } from "./assets/icons/sunny.svg";
import useStyles from "./styles";

export const DarkMode = () => {
  const classes = useStyles();
  const darkMode = localStorage.getItem("dark-mode");

  const handleMode = () => {
    if (Boolean(darkMode)) localStorage.removeItem("dark-mode");
    else localStorage.setItem("dark-mode", "true");

    window.location.reload();
  };

  return (
    <ButtonBase className={classes.root} disableRipple onClick={handleMode}>
      {Boolean(darkMode) ? (
        <MoonIcon className={classes.icon} />
      ) : (
        <SunnyIcon className={classes.icon} />
      )}
    </ButtonBase>
  );
};
