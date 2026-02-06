import Link from "next/link";
import { LayoutDashboard, Package, ShoppingBag, ArrowLeft } from "lucide-react";

export default function SellerSidebar() {
  return (
    <aside className="w-64 border-r bg-background">
      <div className="p-6 border-b">
        <Link href="/" className="text-lg font-semibold">
          MediStore
        </Link>
      </div>

      <nav className="p-4 space-y-1 text-sm">
        <Link
          href="/seller"
          className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-muted"
        >
          <LayoutDashboard className="h-4 w-4" />
          Dashboard
        </Link>

        <Link
          href="/seller/medicines"
          className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-muted"
        >
          <Package className="h-4 w-4" />
          Medicines
        </Link>

        <Link
          href="/seller/orders"
          className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-muted"
        >
          <ShoppingBag className="h-4 w-4" />
          Orders
        </Link>

        <div className="pt-4 border-t">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Store
          </Link>
        </div>
      </nav>
    </aside>
  );
}
