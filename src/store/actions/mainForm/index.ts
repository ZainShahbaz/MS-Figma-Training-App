import { ADD_DATA } from "store/types";

export const addUserInfoToReduxAction = (userInfo: any) => ({
  type: ADD_DATA,
  payload: userInfo,
});
