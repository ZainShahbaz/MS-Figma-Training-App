import { ADD_USER_INFO } from "store/types";
import { call, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import { addApiDataToReduxAction } from "store/actions/addApiDataToReduxAction";
import { setReduxKey } from "store/actions/App";
import { toast } from "react-toastify";
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
    yield put(setReduxKey("loaderKey", true));
    const res: ResponseGenerator = yield call(apiCall);
    const apiTablesData = res.data.entries.slice(0, 50);
    yield put(addApiDataToReduxAction(apiTablesData));
    yield put(setReduxKey("loaderKey", false));
  } catch (error) {
    toast.error(error, {
      position: "top-right",
    });
  }
}
/// Watcher Function ///
export function* watcherSagaApi() {
  yield takeLatest(ADD_USER_INFO, sagaApiData);
}
