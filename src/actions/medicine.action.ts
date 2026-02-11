"use server";

import { env } from "@/env";
import { Medicine } from "@/types";
import { updateTag } from "next/cache";
import { cookies } from "next/headers";

const API_URL = env.API_URL;

export async function createMedicineAction(value: Medicine) {
  const cookieStore = await cookies();
  const res = await fetch(`${API_URL}/api/seller/medicines`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieStore.toString(),
    },
    body: JSON.stringify(value),
    credentials: "include",
  });

  const result = await res.json();

  if (!res.ok) {
    return {
      success: false,
      message: result.message || "Failed to create medicine",
    };
  }
  updateTag("medicines");
  updateTag("sellerMedicines");

  return {
    success: true,
    message: result.message || "Medicine created successfully",
  };
}

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

  const error = await res.json();

  if (!res.ok) {
    return {
      success: false,
      message: error.message || "Failed to update medicine",
    };
  }

  updateTag("medicines");
  updateTag("sellerMedicines");

  return {
    success: true,
    message: "Medicine updated successfully",
  };
}

export async function deleteMedicineAction(id: string) {
  const cookieStore = await cookies();

  const res = await fetch(`${API_URL}/api/seller/medicines/${id}`, {
    method: "DELETE",
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  const error = await res.json();

  if (!res.ok) {
    return {
      success: false,
      message: error.message || "Failed to delete medicine",
    };
  }

  updateTag("medicines");
  updateTag("sellerMedicines");

  return {
    success: true,
    message: "Medicine deleted successfully",
  };
}
