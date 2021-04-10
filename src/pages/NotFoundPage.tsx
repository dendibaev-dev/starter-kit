import { Typography } from "@material-ui/core";
import { ComponentType } from "react";
import { RouteComponentProps } from "react-router-dom";

const NotFoundPage: ComponentType<RouteComponentProps> = () => {
  return <Typography variant="h2">NotFound page</Typography>;
};

export default NotFoundPage;
