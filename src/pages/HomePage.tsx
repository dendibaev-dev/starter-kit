import { Button, Typography } from "@material-ui/core";
import { ComponentType } from "react";
import { useTranslation } from "react-i18next";
import { Link, RouteComponentProps } from "react-router-dom";

const HomePage: ComponentType<RouteComponentProps> = () => {
  const { t } = useTranslation();

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
