import { env } from "@/env";

const API_URL = env.API_URL;

interface ServiceOptions {
  cache?: RequestCache;
  revalidate?: number;
}

export interface MedicineQuery {
  search?: string;
  categoryId?: string;
  manufacturer?: string;
  minPrice?: string;
  maxPrice?: string;
  price?: string;
  page?: number;
  limit?: number;
}

export const medicineService = {
  getMedicines: async function (
    query?: MedicineQuery,
    options?: ServiceOptions,
  ) {
    try {
      const url = new URL(`${API_URL}/api/medicines`);

      if (query) {
        Object.entries(query).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== "") {
            url.searchParams.append(key, value);
          }
        });
      }
      const config: RequestInit = {};

      if (options?.cache) {
        config.cache = options.cache;
      }

      if (options?.revalidate !== undefined) {
        config.next = { revalidate: options.revalidate };
      }

      config.next = { ...config.next, tags: ["medicines"] };
      const res = await fetch(url.toString(), config);

      if (!res.ok) {
        return { data: null, error: { message: "Failed to fetch categories" } };
      }

      const data = await res.json();

      return {
        data: data.data.data,
        meta: data.data.metaData,
        error: null,
      };
    } catch (err) {
      return {
        data: null,
        error: {
          message: "Something went wrong in medicineService.getMedicines",
        },
      };
    }
  },

  getMedicineById: async function (id: string) {
    try {
      const res = await fetch(`${API_URL}/api/medicines/${id}`, {
        next: { revalidate: 60 },
      });

      if (!res.ok) {
        return {
          data: null,
          error: { message: "Failed to fetch medicine details" },
        };
      }

      const data = await res.json();

      return { data: data.data, error: null };
    } catch (err) {
      return {
        data: null,
        error: {
          message: "Something went wrong in medicine Service",
        },
      };
    }
  },
};
