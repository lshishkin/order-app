import { OrdersReducerInterface } from "./orders/types";
import { ApplicationReducerInterface } from "./application/types";

export interface IApplicationState {
  orders: OrdersReducerInterface;
  application: ApplicationReducerInterface;
}
