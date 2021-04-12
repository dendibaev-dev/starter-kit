import { Button, Typography } from "@material-ui/core";
import { ComponentType, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Link, RouteComponentProps } from "react-router-dom";
import { fetchUsers } from "../thunks/test";

const HomePage: ComponentType<RouteComponentProps> = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <Typography variant="h2">Home page</Typography>
      <Button component={Link} to="auth" className={`btn`} variant="contained">
        {t("auth.btn")}
      </Button>
    </div>
  );
};

export default HomePage;
