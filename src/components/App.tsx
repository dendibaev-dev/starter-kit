import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Routes } from "../pages/routes";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Routes} />
        <Route component={Routes} />
      </Switch>
    </BrowserRouter>
  );
};
