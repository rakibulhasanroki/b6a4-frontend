"use server";

import { env } from "@/env";
import { updateTag } from "next/cache";
import { cookies } from "next/headers";

const API_URL = env.API_URL;
export async function deleteCategoryAction({
  categoryId,
}: {
  categoryId: string;
}) {
  const cookieStore = await cookies();

  const res = await fetch(`${API_URL}/api/categories/${categoryId}`, {
    method: "DELETE",
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  const result = await res.json();

  if (!res.ok) {
    return {
      success: false,
      message: result?.message || "Category delete failed",
    };
  }
  updateTag("category");

  return {
    success: true,
    message: result.message,
  };
}

export async function updateCategoryAction({
  categoryId,
  name,
}: {
  categoryId: string;
  name: string;
}) {
  const cookieStore = await cookies();

  const res = await fetch(`${API_URL}/api/categories/${categoryId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieStore.toString(),
    },
    body: JSON.stringify({ name }),
  });

  const result = await res.json();

  if (!res.ok) {
    return {
      success: false,
      message: result?.message || "Category update failed",
    };
  }
  updateTag("category");

  return {
    success: true,
    message: result.message,
  };
}

export async function addCategoryAction({ name }: { name: string }) {
  const cookieStore = await cookies();

  const res = await fetch(`${API_URL}/api/categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieStore.toString(),
    },
    body: JSON.stringify({ name }),
  });

  const result = await res.json();

  if (!res.ok) {
    return {
      success: false,
      message: result?.message || "Category add failed",
    };
  }
  updateTag("category");
  updateTag("adminStats");

  return {
    success: true,
    message: result.message,
  };
}
