import { SnackbarProvider } from "notistack";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { LayoutPrivate, LayoutPublic } from "../components/layouts";
import { currentLocaleActions } from "../features/currentLocale";
import AuthPage from "./AuthPage";
import DashboardPage from "./DashboardPage";
import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";
import PostPage from "./PostPage";

export const Routes = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  useEffect(() => {
    dispatch(currentLocaleActions.handleLocale(i18n.language));
  }, [dispatch, i18n.language]);

  // #TODO need fix multi-layout routes
  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Switch>
        <Route path="/:lng/dashboard/:path?" exact>
          <LayoutPrivate>
            <Switch>
              <Route exact path={`/:lng/dashboard`} component={DashboardPage} />
              <Route exact path={`/:lng/dashboard/post`} component={PostPage} />
            </Switch>
          </LayoutPrivate>
        </Route>
        <Route path="/:lng/:path?" exact>
          <LayoutPublic>
            <Switch>
              <Route exact path={`/:lng/`} component={HomePage} />
              <Route exact path={`/:lng/auth`} component={AuthPage} />
            </Switch>
          </LayoutPublic>
        </Route>
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </SnackbarProvider>
  );
};
