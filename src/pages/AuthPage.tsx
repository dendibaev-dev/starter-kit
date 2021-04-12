import { ComponentType } from "react";
import { RouteComponentProps } from "react-router-dom";
import Auth from "../components/auth";

const AuthPage: ComponentType<RouteComponentProps> = () => {
  return <Auth />;
};

export default AuthPage;
