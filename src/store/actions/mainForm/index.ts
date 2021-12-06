import { ADD_DATA } from "store/types";

export const mainFormData = (data: any) => ({
  type: ADD_DATA,
  payload: data,
});
