import { ADD_DATA } from "store/types";
import { call, takeLatest } from "redux-saga/effects";
import axios from "axios";

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

const apiCall = (): Promise<ResponseGenerator> => {
  return axios
    .get("https://api.publicapis.org/entries")
    .then((response) => response);
};

function* sagaFun() {
  try {
    const res: ResponseGenerator = yield call(apiCall);
    console.log(res);
  } catch (error) {
    console.log("error", error);
  }
}
/// Watcher Function ///
export function* watcherSagaApi() {
  yield takeLatest(ADD_DATA, sagaFun);
}
