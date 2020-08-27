import { Reducer } from "redux";
import { types, OrdersReducerInterface, OrdersActionInterface } from "./types";

const initialState = {
  orders: [],
  //order: null
};

export const ordersReducer: Reducer<OrdersReducerInterface, any> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case types.FILL_ORDERS: {
      return {
        ...state,
        orders: action.payload,
      };
    }

    default:
      return state;
  }
};
