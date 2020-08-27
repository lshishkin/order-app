import { combineReducers } from "redux";
import { ordersReducer as orders } from "./orders/reducer";
import { applicationReducer as application } from "./application/reducer";

export const rootReducer = combineReducers({
  orders,
  application
});
