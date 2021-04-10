import { Route, Switch } from "react-router-dom";
import AuthPage from "./AuthPage";
import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/auth" component={AuthPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};
