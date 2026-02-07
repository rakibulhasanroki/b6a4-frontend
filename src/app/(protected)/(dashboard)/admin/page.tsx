import StatCard from "@/components/modules/seller/StatCard";
import { userService } from "@/services/user.services";

export default async function AdminDashboardPage() {
  const stats = await userService.getAdminStats();
  const data = stats.data.data;

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">
          Admin Dashboard
        </h1>
      </div>

      {/* USERS */}
      <section className="space-y-2">
        <h2 className="text-sm font-medium text-muted-foreground">Users</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Total Users" value={data.users.total} />
          <StatCard label="Active Users" value={data.users.active} />
          <StatCard label="Banned Users" value={data.users.banned} />
          <StatCard label="Sellers" value={data.users.sellers} />
          <StatCard label="Customer" value={data.users.customer} />
        </div>
      </section>

      {/* ORDERS */}
      <section className="space-y-2">
        <h2 className="text-sm font-medium text-muted-foreground">Orders</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Total Orders" value={data.orders.total} />
          <StatCard label="Pending" value={data.orders.pending} />
          <StatCard label="Completed" value={data.orders.completed} />
          <StatCard label="Cancelled" value={data.orders.cancelled} />
        </div>
      </section>

      {/* MEDICINES */}
      <section className="space-y-2">
        <h2 className="text-sm font-medium text-muted-foreground">Medicines</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard label="Total Medicines" value={data.medicines.total} />
          <StatCard label="Low Stock" value={data.medicines.lowStock} />
          <StatCard label="Out of Stock" value={data.medicines.outOfStock} />
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="space-y-2">
        <h2 className="text-sm font-medium text-muted-foreground">
          Categories
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <StatCard label="Total Categories" value={data.categories.total} />
          <StatCard label="Empty Categories" value={data.categories.empty} />
        </div>
      </section>
    </div>
  );
}
