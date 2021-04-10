import Language from "../language";
import useStyles from "./styles";

export const Header = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Language />
    </div>
  );
};
