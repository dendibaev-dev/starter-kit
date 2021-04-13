import { ComponentType } from "react";
import { RouteComponentProps } from "react-router-dom";
import NotFound from "../components/not-found";

const NotFoundPage: ComponentType<RouteComponentProps> = () => {
  return <NotFound />;
};

export default NotFoundPage;
