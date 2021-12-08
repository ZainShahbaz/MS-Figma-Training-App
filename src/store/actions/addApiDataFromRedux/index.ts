import { API_DATA } from "store/types";

export const addApiDataFromRedux = (apiData: any) => ({
  type: API_DATA,
  payload: apiData,
});
