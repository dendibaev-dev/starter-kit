import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import { Routes } from "../pages/routes";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="ru/" />} />
        <Route path="/ru/*" component={Routes} />
        <Route path="/en/*" component={Routes} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};
