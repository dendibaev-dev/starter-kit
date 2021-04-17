import { Grid, Typography } from "@material-ui/core";
import { useSnackbar } from "notistack";
import { ComponentType, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../common/store";
import { login } from "../../thunks/auth";
import AuthForm from "./auth-form";
import useStyles from "./styles";

export const Auth: ComponentType = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const authErrors = useSelector((state: State) => state.auth.errors);

  const submitForm = (data: Record<string, any>) => {
    dispatch(login(data, "/dashboard"));
  };

  useEffect(() => {
    if (authErrors?.text) {
      enqueueSnackbar(t(authErrors?.text), {
        variant: "error",
      });
    }
  }, [authErrors, enqueueSnackbar, t]);

  return (
    <Grid
      container
      direction="column"
      alignItems="flex-start"
      spacing={2}
      className={classes.root}
    >
      <Grid item xs={12} lg={6}>
        <Typography variant="h4">{t("auth")}</Typography>
      </Grid>
      <Grid item xs={12} lg={6}>
        <AuthForm submitForm={submitForm} />
      </Grid>
    </Grid>
  );
};
