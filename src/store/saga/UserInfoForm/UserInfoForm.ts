import { ADD_USER_INFO } from "store/types";
import { call, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import { addApiDataFromRedux } from "store/actions/addApiDataFromRedux";
import { setReduxKey } from "store/actions/App";
interface ResponseGenerator {
  data: any;
}
let some: any = [];
const apiCall = (): Promise<ResponseGenerator> => {
  return axios
    .get("https://api.publicapis.org/entries")
    .then((response) => response);
};
function* sagaApiData() {
  try {
    yield put(setReduxKey("loaderKey", true));
    const res: ResponseGenerator = yield call(apiCall);
    for (let i = 0; i < 50; i++) {
      some.push(res.data.entries[i]);
    }
    yield put(addApiDataFromRedux(some));
    yield put(setReduxKey("loaderKey", false));
  } catch (error) {
    console.log("error", error);
  }
}
/// Watcher Function ///
export function* watcherSagaApi() {
  yield takeLatest(ADD_USER_INFO, sagaApiData);
}
