import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { State } from "../common/store";
import { AuthPage, DashboardPage, HomePage } from "../pages";
import { checkAuth } from "../thunks/auth";
import { LayoutPrivate, LayoutPublic } from "./layouts";

export const App = () => {
  const dispatch = useDispatch();
  const currentLocale = useSelector((state: State) => state.currentLocale);
  const isSigned = useSelector((state: State) => state.auth.isSigned);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch, currentLocale]);

  let routes;

  if (!isSigned) {
    routes = (
      <LayoutPublic>
        <Switch>
          <Route path={`/`} component={HomePage} exact />
          <Route path={`/auth`} component={AuthPage} exact />
          <Redirect to={`/`} />
        </Switch>
      </LayoutPublic>
    );
  } else {
    routes = (
      <LayoutPrivate>
        <Switch>
          <Route path={`/dashboard`} component={DashboardPage} />
          <Redirect to={`/dashboard`} />
        </Switch>
      </LayoutPrivate>
    );
  }

  return routes;
};
