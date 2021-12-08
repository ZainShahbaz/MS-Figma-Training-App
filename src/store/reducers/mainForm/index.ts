import { ADD_USER_INFO, SET_REDUX_KEY, API_DATA } from "store/types";

let intialState = {
  user: {},
  apiData: [],
};
export default function formReducer(state = intialState, action: any) {
  switch (action.type) {
    case ADD_USER_INFO:
      return {
        ...state,
        user: action.payload,
      };
    case SET_REDUX_KEY:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case API_DATA:
      return {
        ...state,
        apiData: action.payload,
      };
    default:
  }
  return state;
}
