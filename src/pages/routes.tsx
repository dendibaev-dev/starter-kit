import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { currentLocaleActions } from "../features/currentLocale";
import AuthPage from "./AuthPage";
import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";
import PostPage from "./PostPage";

export const Routes = () => {
  const dispatch = useDispatch();
  const {i18n} = useTranslation()

  
  useEffect(() => {
    dispatch(currentLocaleActions.handleLocale(i18n.language));
  }, [dispatch, i18n.language]);

  return (
    <Switch>
      <Route exact path={`/:lng/`} component={HomePage} />
      <Route exact path={`/:lng/auth`} component={AuthPage} />
      <Route exact path={`/:lng/post/:id`} component={PostPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};
