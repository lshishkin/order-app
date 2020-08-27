import { all, fork } from "redux-saga/effects";
import { orderWatcher } from "./orders/sagas";

export function* rootSaga() {
  try {
    yield all([fork(orderWatcher)]);
  } catch (error) {
    console.log("→ error caught", error);
  }
}
