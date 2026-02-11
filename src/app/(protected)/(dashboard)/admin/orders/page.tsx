import OrdersTable from "@/components/modules/orders/OrderTable";
import { orderService } from "@/services/order.service";

export default async function AdminOrdersPage({
  searchParams,
}: {
  searchParams: { page?: number; limit?: number };
}) {
  const params = await searchParams;

  const orders = await orderService.getMyOrders({
    page: Number(params.page ?? 1),
    limit: Number(params.limit ?? 10),
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Orders</h1>

      <OrdersTable
        orders={orders.data}
        meta={orders.meta}
        adminOnly
        showSeller
      />
    </div>
  );
}
