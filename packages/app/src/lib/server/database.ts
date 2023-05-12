/**
 * Mock Database
 */
const database = new Map();

interface Order {
  orderId?: string;
  item: string;
  amount: string;
  amountReceived?: number;
  completed?: boolean;
}

interface Payment {
  paymentId: string;
  orderId: string;
  amount: string;
}

export function getOrder(orderId: string): Order {
  return database.get(orderId).values();
}

export function createOrder(data: Order) {
  if (!database.has("orders")) {
    database.set("orders", new Map());
  }

  const orders = database.get("orders");
  const id = crypto.randomUUID();

  if (!orders.has(id)) {
    orders.set(id, {
      id,
      item: data.item,
      amount: data.amount,
      amountReceived: 0,
      completed: false,
    });
  }

  return database;
}

export function createPayment(data: Payment): string {
  const id = crypto.randomUUID();
  return id;
}

export function getPayment(paymentId: string): Payment {
  return { paymentId, orderId: "1", amount: "1" };
}
