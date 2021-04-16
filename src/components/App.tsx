import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { State } from "../common/store";
import { Routes } from "../pages/routes";
import { checkAuth } from "../thunks/auth";

export const App = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const currentLocale = useSelector((state: State) => state.currentLocale);

  useEffect(() => {
    dispatch(checkAuth(`/${currentLocale}/`)); // #TODO redirect
  }, [dispatch, currentLocale]);

  return (
    <Switch>
      <Route path={`/${i18n.language}`}>
        <Routes />
      </Route>
      <Route>
        <Routes />
      </Route>
    </Switch>
  );
};
