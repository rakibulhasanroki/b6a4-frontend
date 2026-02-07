import { Medicine } from "./medicine";
import { User } from "./user";

export enum OrderStatus {
  PLACED = "PLACED",
  PROCESSING = "PROCESSING",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
}

export interface OrderItem {
  id: string;
  quantity: number;
  price: number;
  orderId: string;
  medicineId: string;
  createdAt: string;
  updatedAt: string;
  medicine: Medicine;
}

export interface Order {
  id: string;
  totalAmount: number;
  shippingAddress: string;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
  customerId: string;
  customer: User;
  orderItems: OrderItem[];
}
