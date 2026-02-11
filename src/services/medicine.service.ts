import { env } from "@/env";
import { cookies } from "next/headers";

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
  sort?: string;
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

      const data = await res.json();

      if (!res.ok) {
        return {
          success: false,
          message: data.message || "Failed to fetch medicines",
        };
      }

      return {
        success: true,
        data: data.data.data,
        meta: data.data.metaData,
      };
    } catch {
      return {
        success: false,
        message: "Something went wrong in medicineService.getMedicines",
      };
    }
  },

  getSellerMedicines: async function (query?: MedicineQuery) {
    try {
      const cookieStore = await cookies();
      const url = new URL(`${API_URL}/api/seller/medicines`);

      if (query) {
        Object.entries(query).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== "") {
            url.searchParams.append(key, value);
          }
        });
      }
      const config: RequestInit = {
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
        next: { tags: ["sellerMedicines"] },
      };

      const res = await fetch(url.toString(), config);

      const data = await res.json();
      if (!res.ok) {
        return {
          success: false,
          message: data.message || "Failed to fetch medicines",
        };
      }

      return {
        success: true,
        data: data.data.data,
        meta: data.data.metaData,
        error: null,
      };
    } catch {
      return {
        success: false,
        message: "Something went wrong in medicineService.getMedicines",
      };
    }
  },

  getMedicineById: async function (id: string) {
    try {
      const res = await fetch(`${API_URL}/api/medicines/${id}`, {
        next: { revalidate: 300 },
      });

      const data = await res.json();
      if (!res.ok) {
        return {
          success: false,
          message: data.message || "Failed to fetch medicine details",
        };
      }

      return { success: true, data: data.data };
    } catch {
      return {
        success: false,
        message: "Something went wrong in medicine Service",
      };
    }
  },
};
