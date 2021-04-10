import { Typography } from "@material-ui/core";
import { ComponentType } from "react";
import { RouteComponentProps } from "react-router-dom";

const AuthPage: ComponentType<RouteComponentProps> = () => {
  return <Typography variant="h2">Auth page</Typography>;
};

export default AuthPage;
