import { watcherSagaApi } from "./UserInfoForm";
import { all } from "@redux-saga/core/effects";

export default function* rootSaga() {
  const sagas = [watcherSagaApi()];
  yield all(sagas);
}
