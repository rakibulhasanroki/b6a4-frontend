import OrdersTable from "@/components/modules/orders/OrderTable";
import { orderService } from "@/services/order.service";

export default async function SellerOrdersPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const params = await searchParams;
  const orders = await orderService.getSellerOrders(
    {
      page: Number(params.page ?? 1),
      limit: 10,
    },
    {
      revalidate: 120,
    },
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Orders</h1>

      <OrdersTable orders={orders.data} meta={orders.meta} />
    </div>
  );
}
