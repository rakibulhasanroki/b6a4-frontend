import { env } from "@/env";

const API_URL = env.API_URL;

export const categoryService = {
  getCategories: async function () {
    try {
      const res = await fetch(`${API_URL}/api/categories`, {
        next: { revalidate: 300 },
      });

      if (!res.ok) {
        return {
          data: null,
          error: { message: "Failed to fetch categories" },
        };
      }

      const data = await res.json();

      return { data: data.data, error: null };
    } catch (err) {
      return {
        data: null,
        error: {
          message: "Failed to fetch categories",
        },
      };
    }
  },
};
