import { Box, Button, Typography } from "@material-ui/core";
import { ComponentType } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const NotFound: ComponentType = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.title} variant="h5" component="p">
        {t("page.notFound")}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {t("page.notFound.text")}
      </Typography>
      <div className={classes.actions}>
        <Button
          component={Link}
          to="/"
          className={classes.btn}
          variant="contained"
          color="primary"
        >
          {t("action.backHome")}
        </Button>
      </div>
    </Box>
  );
};

export default NotFound;
