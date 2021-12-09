import { ADD_USER_INFO } from "store/types";

export const addUserInfoToReduxAction = (userInfo: any) => ({
  type: ADD_USER_INFO,
  payload: userInfo,
});
