import { createStore } from "redux";

let intialState = {
  user: {},
};
function formReducer(state = intialState, action:any) {
  state={...state}
  if (action.type === "ADD_DATA") {
    state.user=action.payload;
  }
  return state;
}
let store = createStore(formReducer);
export default store;
