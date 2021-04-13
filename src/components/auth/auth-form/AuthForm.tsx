import { Button, ButtonBase, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import { ComponentType } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { State } from "../../../common/store";
import { authInitialValues, authValidationScheme } from "../auth-model";
import useStyles from "./styles";

export const AuthForm: ComponentType<{ submitForm: Function }> = ({
  submitForm,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const currentLocale = useSelector((state: State) => state.currentLocale);

  const formik = useFormik({
    initialValues: authInitialValues,
    validationSchema: authValidationScheme,
    onSubmit: (data) => submitForm(data),
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
          error={formik.touched.login && Boolean(formik.errors.login)}
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
          error={formik.touched.password && Boolean(formik.errors.password)}
          variant="outlined"
          fullWidth
        />
      </div>
      <div className={classes.actions}>
        <Button type="submit" className={classes.btn} variant="contained">
          {t("auth.btn")}
        </Button>
        <ButtonBase
          className={classes.link}
          component={Link}
          to={`/${currentLocale}/reg`}
        >
          {t("sign.btn")}
        </ButtonBase>
      </div>
    </form>
  );
};
