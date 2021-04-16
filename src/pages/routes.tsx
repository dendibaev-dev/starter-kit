import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { State } from "../common/store";
import Dashboard from "../components/dashboard";
import { LayoutPrivate, LayoutPublic } from "../components/layouts";
import { currentLocaleActions } from "../features/currentLocale";
import AuthPage from "./AuthPage";
import HomePage from "./HomePage";

export const Routes = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const isSigned = useSelector((state: State) => state.auth.isSigned);

  const match = useRouteMatch();
  const url = match.url === "/" ? "" : match.url;

  useEffect(() => {
    dispatch(currentLocaleActions.handleLocale(i18n.language));
  }, [dispatch, i18n.language]);

  let routes;

  if (!isSigned) {
    routes = (
      <LayoutPublic>
        <Switch>
          <Route path={`${url}/`} component={HomePage} exact />
          <Route path={`${url}/auth`} component={AuthPage} exact />
        </Switch>
      </LayoutPublic>
    );
  } else {
    routes = (
      <LayoutPrivate>
        <Switch>
          <Route path={`${url}/dashboard`} component={Dashboard} />
        </Switch>
      </LayoutPrivate>
    );
  }

  return routes;
};
