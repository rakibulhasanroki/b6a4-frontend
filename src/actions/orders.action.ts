"use server";

import { orderService } from "@/services/order.service";

export async function createOrderAction(data: {
  shippingAddress: string;
  orderItems: { medicineId: string; quantity: number }[];
}) {
  try {
    const order = await orderService.createOrder(data);
    return { success: true, data: order };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}
