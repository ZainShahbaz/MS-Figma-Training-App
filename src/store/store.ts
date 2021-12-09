import { createStore, compose, applyMiddleware } from "redux";
import formReducer from "store/reducers/mainForm";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "store/saga";

const sagaMiddleWare = createSagaMiddleware();
const composeEnhancer: typeof compose =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
  formReducer,
  composeEnhancer(applyMiddleware(sagaMiddleWare))
);
sagaMiddleWare.run(rootSaga);
export default store;
