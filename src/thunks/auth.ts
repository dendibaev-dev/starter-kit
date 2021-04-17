import { Dispatch } from "redux";
import { history } from "../common/history";
import { api } from "../common/utils";
import { authActions } from "../features/auth";

export const login = (data: any, successUrl: string) => async (
  dispatch: Dispatch
) => {
  dispatch(authActions.loginRequest());
  try {
    const result = await api.fakeAuth(data);
    localStorage.setItem("is-signed", "true");
    history.push(successUrl);
    dispatch(authActions.loginSuccess(result));
  } catch (e) {
    dispatch(authActions.loginFailed());
  }
};

export const checkAuth = () => async (dispatch: Dispatch) => {
  dispatch(authActions.loginRequest());
  if (Boolean(localStorage.getItem("is-signed"))) {
    dispatch(authActions.loginSuccess({ success: true, errors: false }));
  }
};

export const logout = () => async (dispatch: Dispatch) => {
  localStorage.removeItem("is-signed");
  history.push("/");
  dispatch(authActions.logout());
};
