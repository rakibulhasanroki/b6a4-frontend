import { env } from "@/env";
import { cookies } from "next/headers";

const API_URL = env.API_URL;

export const orderService = {
  getMyOrders: async function (query?: { page?: number; limit?: number }) {
    try {
      const cookieStore = await cookies();
      const url = new URL(`${API_URL}/api/orders`);

      if (query) {
        Object.entries(query).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            url.searchParams.append(key, String(value));
          }
        });
      }

      const config: RequestInit = {
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
        next: { tags: ["orders"] },
      };

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

  getOrderById: async function (id: string) {
    try {
      const cookieStore = await cookies();

      const res = await fetch(`${API_URL}/api/orders/${id}`, {
        method: "GET",
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
        next: { tags: ["orderId"] },
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
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
        next: { tags: ["dashboard"] },
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

  getSellerOrders: async function (query?: { page?: number; limit?: number }) {
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
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
        next: { tags: ["status"] },
      };

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
