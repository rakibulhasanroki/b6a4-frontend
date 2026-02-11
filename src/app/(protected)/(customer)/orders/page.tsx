import { orderService } from "@/services/order.service";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import PaginationControls from "@/components/ui/pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orders",
};

export default async function OrdersPage({
  searchParams,
}: {
  searchParams: { page?: number; limit: number };
}) {
  const params = await searchParams;
  const orders = await orderService.getMyOrders({
    page: Number(params.page ?? 1),
    limit: Number(params.limit ?? 3),
  });

  if (!orders.data || !orders.data.length) {
    return <p className="p-10 text-muted-foreground">No orders yet.</p>;
  }

  return (
    <div className="container mx-auto max-w-5xl px-4 py-10 space-y-6">
      <h1 className="text-2xl font-semibold">My Orders</h1>

      {orders.data.map((order: any) => (
        <Card key={order.id}>
          <CardContent className="p-6 flex justify-between items-center">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">
                Order ID: {order.id}
              </p>
              <p className="text-sm">
                Date: {new Date(order.createdAt).toLocaleDateString()}
              </p>
              <p className="text-sm font-medium">Status: {order.status}</p>
            </div>

            <div className="text-right space-y-2">
              <p className="font-semibold text-lg">৳{order.totalAmount}</p>
              <Link
                href={`/orders/${order.id}`}
                className="text-sm text-primary underline"
              >
                View Details
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
      <PaginationControls meta={orders.meta} />
    </div>
  );
}
