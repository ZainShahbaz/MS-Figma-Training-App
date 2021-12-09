import { ADD_API_DATA } from "store/types";

export const addApiDataToReduxAction = (addApiData: any) => ({
  type: ADD_API_DATA,
  payload: addApiData,
});
