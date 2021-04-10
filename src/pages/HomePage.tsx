import { Typography } from "@material-ui/core";
import { ComponentType } from "react";
import { RouteComponentProps } from "react-router-dom";

const HomePage: ComponentType<RouteComponentProps> = () => {
  return <Typography variant="h2">Home page</Typography>;
};

export default HomePage;
