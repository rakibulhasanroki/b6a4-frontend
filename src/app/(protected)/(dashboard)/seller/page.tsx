import StatCard from "@/components/modules/seller/StatCard";
import { orderService } from "@/services/order.service";
import { Metadata } from "next";

export default async function SellerDashboardPage() {
  const stats = await orderService.getSellerStats();

  return (
    <div className="space-y-6">
      <div className="flex justify-between ">
        <h1 className="text-2xl font-semibold tracking-tight">
          Seller Dashboard
        </h1>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        <StatCard label="Total Orders" value={stats.data.totalOrders} />
        <StatCard label="Delivered" value={stats.data.deliveredOrders} />
        <StatCard label="Pending" value={stats.data.pendingOrders} />
        <StatCard label="Cancelled" value={stats.data.cancelledOrders} />
        <StatCard label="Revenue" value={`৳ ${stats.data.totalRevenue}`} />
      </div>
    </div>
  );
}
