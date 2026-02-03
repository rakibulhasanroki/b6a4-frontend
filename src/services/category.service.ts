import { env } from "@/env";

const API_URL = env.API_URL;

export const categoryService = {
  getCategories: async function () {
    try {
      const res = await fetch(`${API_URL}/categories`, {
        next: { revalidate: 300 },
      });

      const data = await res.json();

      return { data: data.data, error: null };
    } catch (err) {
      return {
        data: null,
        error: {
          error: err,
          message: "Failed to fetch categories",
        },
      };
    }
  },
};
