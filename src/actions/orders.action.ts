"use server";

import { env } from "@/env";
import { OrderStatus } from "@/types";
import { updateTag } from "next/cache";
import { cookies } from "next/headers";

const API_URL = env.API_URL;

export async function createOrderAction(data: {
  shippingAddress: string;
  orderItems: { medicineId: string; quantity: number }[];
}) {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();

  const res = await fetch(`${API_URL}/api/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieHeader,
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  const result = await res.json();
  if (!res.ok) {
    return {
      success: false,
      message: result.message || "Failed to place order",
    };
  }
  updateTag("status");
  updateTag("dashboard");
  updateTag("orders");
  updateTag("orderId");

  return {
    success: true,
    data: result.data,
    message: result.message || "Order placed successfully",
  };
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

  const error = await res.json();

  if (!res.ok) {
    return {
      success: false,
      message: error.message || "Failed to updated order status",
    };
  }
  updateTag("status");
  updateTag("dashboard");
  updateTag("orders");
  updateTag("orderId");
  return {
    success: true,
    message: "Orders Updated Successfully",
  };
}
