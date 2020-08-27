import { takeEvery, put, all, select } from "redux-saga/effects";
import { History } from "history";
import { types, OrderInterface } from "./types";
import { orderActions } from "./action";
import { applicationActions } from "../application/action";
import { api } from "../../api";
import { IApplicationState } from "../types";

const getOrders = (state: IApplicationState) => state.orders.orders;

export function* ordersWorker() {
  yield put(applicationActions.setLoad(true));
  try {
    const response = yield api.fetchOrders();
    const data = yield response.json();
    yield put(orderActions.fillOrders(data));
    yield put(applicationActions.setLoad(false));
  } catch (e) {
    yield put(applicationActions.setLoad(false));
    yield put(applicationActions.setErrorModal(true));
  }
}

export function* updateOrderWorker(action: {
  type: string;
  payload: { id: string; params: OrderInterface; history: History };
}) {
  const { id, params, history } = action.payload;
  yield put(applicationActions.setLoad(true));
  try {
    yield api.updateOrder(action.payload);
    let orders = yield select(getOrders);
    yield put(
      orderActions.fillOrders(
        orders.map((item: OrderInterface) =>
          id === item._id ? { ...item, ...params } : item
        )
      )
    );
    yield put(applicationActions.setLoad(false));
    history.push("/");
  } catch (e) {
    yield put(applicationActions.setLoad(false));
    yield put(applicationActions.setErrorModal(true));
  }
}

export function* createOrderWorker(action: {
  type: string;
  payload: { params: OrderInterface; history: History };
}) {
  const { params, history } = action.payload;
  yield put(applicationActions.setLoad(true));
  try {
    const order = yield api.createOrder(params);
    let orders = yield select(getOrders);
    yield put(orderActions.fillOrder({ ...orders, order }));
    yield put(applicationActions.setLoad(false));
    history.push("/");
  } catch (e) {
    yield put(applicationActions.setLoad(false));
    yield put(applicationActions.setErrorModal(true));
  }
}

export function* deleteOrderWorker(action: { type: string; payload: string }) {
  yield put(applicationActions.setLoad(true));
  try {
    yield api.deleteOrder(action.payload);
    let orders = yield select(getOrders);
    yield put(
      orderActions.fillOrders(
        orders.filter((order: OrderInterface) => order._id !== action.payload)
      )
    );
    yield put(applicationActions.setLoad(false));
  } catch (e) {
    yield put(applicationActions.setLoad(false));
    yield put(applicationActions.setErrorModal(true));
  }
}

export function* orderWatcher() {
  yield all([
    takeEvery(types.FETCH_ORDERS_ASYNC, ordersWorker),
    takeEvery(types.FETCH_UPDATE_ORDER_ASYNC, updateOrderWorker),
    takeEvery(types.FETCH_CREATE_ORDER_ASYNC, createOrderWorker),
    takeEvery(types.FETCH_DELETE_ORDER_ASYNC, deleteOrderWorker),
  ]);
}
