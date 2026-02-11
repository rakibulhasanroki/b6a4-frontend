import { env } from "@/env";
import { success } from "zod";

const API_URL = env.API_URL;

export const categoryService = {
  getCategories: async function () {
    try {
      const res = await fetch(`${API_URL}/api/categories`, {
        next: { revalidate: 300, tags: ["category"] },
      });

      const data = await res.json();
      if (!res.ok) {
        return {
          success: false,
          message: data.message || "Failed to fetch categories",
        };
      }

      return {
        success: true,
        data: data.data,
      };
    } catch {
      return {
        success: false,
        message: "Failed to fetch categories on service",
      };
    }
  },
};
