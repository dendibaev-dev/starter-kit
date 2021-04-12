import { Grid, Typography } from "@material-ui/core";
import { ComponentType } from "react";
import { useTranslation } from "react-i18next";
import AuthForm from "./auth-form";
import useStyles from "./styles";

export const Auth: ComponentType = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Grid
      container
      direction="column"
      alignItems="flex-start"
      spacing={2}
      className={classes.root}
    >
      <Grid item xs={12} lg={8}>
        <Typography variant="h4">{t("auth")}</Typography>
      </Grid>
      <Grid item xs={12} lg={8}>
        <AuthForm />
      </Grid>
    </Grid>
  );
};
