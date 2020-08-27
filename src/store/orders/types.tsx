export const types = {
  SET_IS_FETCHING: "SET_IS_FETCHING",
  FETCH_ORDER_ASYNC: "FETCH_ORDER_ASYNC",
  FILL_ORDER: "FILL_ORDER",
  FETCH_ORDERS_ASYNC: "FETCH_ORDERS_ASYNC",
  FILL_ORDERS: "FILL_ORDERS",
  FETCH_UPDATE_ORDER_ASYNC: "FETCH_UPDATE_ORDER_ASYNC",
  FETCH_CREATE_ORDER_ASYNC: "FETCH_CREATE_ORDER_ASYNC",
  FETCH_DELETE_ORDER_ASYNC: "FETCH_DELETE_ORDER_ASYNC",
};

export interface OrderInterface {
  _id?: string;
  number: number;
  date: string;
  companyName: string;
  fullName: string;
  phone: string;
  comment?: string;
  ati: string;
}

export interface OrdersReducerInterface {
  orders: OrderInterface[];
}

export interface OrdersActionInterface {
  type: string;
  payload: OrderInterface[];
}
