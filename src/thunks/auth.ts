import { Dispatch } from "redux";
import { api } from "../common/utils";
import { authActions } from "../features/auth";

export const login = (data?: any) => async (dispatch: Dispatch) => {
  dispatch(authActions.loginRequest());
  try {
    const result = await api.fakeAuth(data);
    dispatch(authActions.loginSuccess(result));
  } catch (e) {
    dispatch(authActions.loginFailed());
  }
};
