import { OrderInterface } from "../store/orders/types";

export const api = new (class Api {
  fetchOrders() {
    return fetch(`/order`);
  }
  fetchOrder(id: string) {
    return fetch(`/order/${id}`);
  }
  updateOrder({ id, params }: { id: string; params: OrderInterface }) {
    return fetch(`/order/${id}`, {
      method: "PUT",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  createOrder(params: OrderInterface) {
    return fetch(`/order`, {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  deleteOrder(id: string) {
    return fetch(`/order/${id}`, {
      method: "DELETE",
    });
  }
})();
