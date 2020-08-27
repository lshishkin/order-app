import { types, OrderInterface } from "./types";
import { History } from "history";

export const orderActions = {
  fetchOrderAsync: (id: string) => ({
    type: types.FETCH_ORDER_ASYNC,
    payload: id,
  }),
  fillOrder: (order: OrderInterface) => ({
    type: types.FILL_ORDER,
    payload: order,
  }),
  fetchOrdersAsync: () => ({
    type: types.FETCH_ORDERS_ASYNC,
  }),
  fillOrders: (orders: OrderInterface[]) => ({
    type: types.FILL_ORDERS,
    payload: orders,
  }),
  fetchUpdataOrderAsync: (payload: {
    id: string;
    params: OrderInterface;
    history: History;
  }) => ({
    type: types.FETCH_UPDATE_ORDER_ASYNC,
    payload,
  }),
  fetchCreateOrderAsync: (payload: {
    params: OrderInterface;
    history: History;
  }) => ({
    type: types.FETCH_CREATE_ORDER_ASYNC,
    payload,
  }),
  fetchDeleteOrderAsync: (id: string) => ({
    type: types.FETCH_DELETE_ORDER_ASYNC,
    payload: id,
  }),
};
