export enum OrderStatus {
  Pending = "pending",
  Shipped = "shipped",
  Cancelled = "cancelled"
}

export interface CreateOrderInterface {
  orderName: string
  price: number
  status: string
}

export interface UpdateOrderInterface {
  price: number
  status: string
}