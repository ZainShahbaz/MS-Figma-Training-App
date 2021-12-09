import { ADD_USER_INFO } from "store/types";
import { call, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import { addApiDataToReduxAction } from "store/actions/addApiDataToReduxAction";
import { setReduxKey } from "store/actions/App";
import { ToastContainer, toast } from "react-toastify";
interface ResponseGenerator {
  data: any;
}
const apiCall = (): Promise<ResponseGenerator> => {
  return axios
    .get("https://api.publicapis.org/entries")
    .then((response) => response);
};
function* sagaApiData() {
  const errorNotify = (error: any) => {
    toast.error(error, {
      position: "top-right",
    });
  };
  try {
    yield put(setReduxKey("loaderKey", true));
    const res: ResponseGenerator = yield call(apiCall);
    let apiTablesData: any = [];
    apiTablesData = res.data.entries.slice(0, 50);
    yield put(addApiDataToReduxAction(apiTablesData));
    yield put(setReduxKey("loaderKey", false));
  } catch (error) {
    errorNotify(error);
    <ToastContainer />;
  }
}
/// Watcher Function ///
export function* watcherSagaApi() {
  yield takeLatest(ADD_USER_INFO, sagaApiData);
}
