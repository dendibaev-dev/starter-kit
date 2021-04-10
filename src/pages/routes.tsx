import { Route, Switch } from "react-router-dom";
import AuthPage from "./AuthPage";
import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";
import PostPage from "./PostPage";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={`/:lng/`} component={HomePage} />
      <Route exact path={`/:lng/auth`} component={AuthPage} />
      <Route exact path={`/:lng/post/:id`} component={PostPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};
