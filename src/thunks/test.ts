import { Dispatch } from "redux";
import { api } from "../common/utils";
import { testActions } from "../features/test";

export const fetchUsers = (props?: any) => async (dispatch: Dispatch) => {
  dispatch(testActions.fetchAllRequest());
  try {
    const result = await api.get(`users`);
    dispatch(testActions.fetchAllSuccess(result));
  } catch (e) {
    dispatch(testActions.fetchAllFailed());
  }
};
