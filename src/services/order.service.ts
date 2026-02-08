import { env } from "@/env";
import { cookies } from "next/headers";

const API_URL = env.API_URL;
interface ServiceOptions {
  cache?: RequestCache;
  revalidate?: number;
}
export const orderService = {
  createOrder: async (data: {
    shippingAddress: string;
    orderItems: { medicineId: string; quantity: number }[];
  }) => {
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

    if (!res.ok) {
      const error = await res.json().catch(() => ({}));
      throw new Error(error.message || "Failed to place order");
    }

    return res.json();
  },
  getMyOrders: async () => {
    try {
      const cookieStore = await cookies();
      const cookieHeader = cookieStore.toString();

      const res = await fetch(`${API_URL}/api/orders`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieHeader,
        },
        cache: "no-store",
      });

      const result = await res.json();

      if (!res.ok) {
        return {
          data: null,
          error: { message: result?.message || "Failed to get orders" },
        };
      }

      return { data: result.data, error: null };
    } catch (err) {
      console.error(err);
      return {
        data: null,
        error: { message: "Something went wrong while fetching orders" },
      };
    }
  },

  getOrderById: async function (id: string) {
    try {
      const cookieStore = await cookies();

      const res = await fetch(`${API_URL}/api/orders/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
        next: { revalidate: 60 },
      });

      if (!res.ok) {
        return {
          data: null,
          error: { message: "Failed to get order details" },
        };
      }
      const result = await res.json();

      return { data: result.data, error: null };
    } catch (err) {
      console.error(err);
      return {
        data: null,
        error: { message: "Something went wrong while fetching order details" },
      };
    }
  },

  getSellerStats: async function () {
    try {
      const cookieStore = await cookies();

      const res = await fetch(`${API_URL}/api/seller/stats`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
        next: { revalidate: 120, tags: ["dashboard"] },
      });

      if (!res.ok) {
        return {
          data: null,
          error: "Failed to fetch seller stats",
        };
      }

      const result = await res.json();
      return { data: result.data, error: null };
    } catch (err) {
      console.error(err);
      return {
        data: null,
        error: { message: "Something went wrong while fetching order stats" },
      };
    }
  },

  getSellerOrders: async function (
    query?: { page?: number; limit?: number },
    options?: ServiceOptions,
  ) {
    try {
      const cookieStore = await cookies();
      const url = new URL(`${API_URL}/api/seller/orders`);

      if (query) {
        Object.entries(query).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            url.searchParams.append(key, String(value));
          }
        });
      }

      const config: RequestInit = {
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
      };

      if (options?.cache) {
        config.cache = options.cache;
      }

      if (options?.revalidate !== undefined) {
        config.next = { revalidate: options.revalidate };
      }

      config.next = { ...config.next, tags: ["status"] };

      const res = await fetch(url.toString(), config);

      if (!res.ok) {
        return {
          data: null,
          meta: null,
          error: "Failed to fetch seller orders",
        };
      }

      const result = await res.json();

      return {
        data: result.data.data,
        meta: result.data.metaData,
        error: null,
      };
    } catch (err) {
      console.error(err);
      return {
        data: null,
        meta: null,
        error: {
          message: "Something went wrong while fetching seller orders ",
        },
      };
    }
  },
};
