import { ADD_USER_INFO } from "store/types";
import { call, takeLatest } from "redux-saga/effects";
import axios from "axios";

interface ResponseGenerator {
  data: any;
}
const apiCall = (): Promise<ResponseGenerator> => {
  return axios
    .get("https://api.publicapis.org/entries")
    .then((response) => response);
};
function* sagaApiData() {
  try {
    const res: ResponseGenerator = yield call(apiCall);
    for (let i = 0; i < 50; i++) {
      console.log(`Object ${i} data: `, res.data.entries[i]);
    }
  } catch (error) {
    console.log("error", error);
  }
}
/// Watcher Function ///
export function* watcherSagaApi() {
  yield takeLatest(ADD_USER_INFO, sagaApiData);
}
