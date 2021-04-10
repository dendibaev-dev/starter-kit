import { Typography } from "@material-ui/core";
import { ComponentType, useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { fetchUsers } from "../thunks/test";

const HomePage: ComponentType<RouteComponentProps> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return <Typography variant="h2">Home page</Typography>;
};

export default HomePage;
