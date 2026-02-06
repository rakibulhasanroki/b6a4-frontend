"use server";

import { env } from "@/env";
import { updateTag } from "next/cache";
import { cookies } from "next/headers";
const API_URL = env.API_URL;

export async function updateMedicineAction(
  id: string,
  data: { name: string; price: number; stock: number },
) {
  const cookieStore = await cookies();

  const res = await fetch(`${API_URL}/api/seller/medicines/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieStore.toString(),
    },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    updateTag("medicines");
  }
  if (!res.ok) {
    const error = await res.json();
    return {
      data: null,
      error: error.message,
    };
  }
}

export async function deleteMedicineAction(id: string) {
  const cookieStore = await cookies();

  const res = await fetch(`${API_URL}/api/seller/medicines/${id}`, {
    method: "DELETE",
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  if (res.ok) {
    updateTag("medicines");
  }

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Delete failed");
  }
}
