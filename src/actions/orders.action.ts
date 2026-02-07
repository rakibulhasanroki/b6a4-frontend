"use server";

import { env } from "@/env";
import { orderService } from "@/services/order.service";
import { OrderStatus } from "@/types";
import { updateTag } from "next/cache";
import { cookies } from "next/headers";

const API_URL = env.API_URL;
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

export async function updateOrderStatusAction(id: string, status: OrderStatus) {
  const cookieStore = await cookies();

  const res = await fetch(`${API_URL}/api/orders/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieStore.toString(),
    },
    body: JSON.stringify({ status }),
  });

  if (res.ok) {
    updateTag("status");
  }

  const error = await res.json();

  if (!res.ok) {
    return {
      success: false,
      message: error.message,
    };
  }
  return {
    success: true,
    message: "Orders Updated Successfully",
  };
}
