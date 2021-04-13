import { ComponentType } from "react";
import { RouteComponentProps } from "react-router-dom";
import Dashboard from "../components/dashboard";

const DashboardPage: ComponentType<RouteComponentProps> = () => {
  return <Dashboard />;
};

export default DashboardPage;
