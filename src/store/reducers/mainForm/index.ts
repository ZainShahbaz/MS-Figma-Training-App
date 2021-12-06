import { createStore } from "redux";
import { ADD_DATA } from "store/types";

let intialState = {
  user: {},
};
function formReducer(state = intialState, action: any) {
  switch (action.type) {
    case action.type === ADD_DATA:
      return {
        ...state,
        user: action.payload,
      };
    default:
  }
  return state;
}
let store = createStore(formReducer);
export default store;
