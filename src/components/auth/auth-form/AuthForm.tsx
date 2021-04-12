import { Button, ButtonBase, Grid, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import { ComponentType } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { State } from "../../../common/store";
import { authInitialValues, authValidationScheme } from "../auth-model";
import useStyles from "./styles";

export const AuthForm: ComponentType = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const currentLocale = useSelector((state: State) => state.currentLocale);

  const formik = useFormik({
    initialValues: authInitialValues,
    validationSchema: authValidationScheme,
    onSubmit: (data) => console.log(data),
  });

  return (
    <form
      noValidate
      autoComplete="off"
      className={classes.root}
      onSubmit={formik.handleSubmit}
    >
      <div className={classes.formControl}>
        <TextField
          name="login"
          label={t("login")}
          placeholder={t("login.placeholder")}
          value={formik.values.login}
          onChange={formik.handleChange}
          error={formik.touched && Boolean(formik.errors.login)}
          variant="outlined"
          fullWidth
        />
      </div>
      <div className={classes.formControl}>
        <TextField
          name="password"
          label={t("password")}
          placeholder={t("password.placeholder")}
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched && Boolean(formik.errors.password)}
          variant="outlined"
          fullWidth
        />
      </div>
      <Grid container className={classes.actions} spacing={2}>
        <Grid item md={2}>
          <Button type="submit" className={classes.btn} variant="contained">
            {t("auth.btn")}
          </Button>
        </Grid>
        <Grid item>
          <ButtonBase component={Link} to={`/${currentLocale}/reg`}>
            {t("sign.btn")}
          </ButtonBase>
        </Grid>
      </Grid>
    </form>
  );
};
