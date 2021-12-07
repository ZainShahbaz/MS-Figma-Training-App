import { ADD_DATA, SET_REDUX_KEY } from "store/types";

let intialState = {
  user: {},
};
export default function formReducer(state = intialState, action: any) {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        user: action.payload,
      };
    case SET_REDUX_KEY:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    default:
  }
  return state;
}
