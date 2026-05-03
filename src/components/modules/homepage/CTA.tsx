import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getSessionUser } from "@/lib/getSessionUser";
import { Role } from "@/types";

export default async function CTA() {
  const user = await getSessionUser();

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 text-center max-w-2xl space-y-6">
        {/* ===== TITLE ===== */}
        <h2 className="text-3xl font-bold tracking-tight">
          {user ? "Welcome Back" : "Start Shopping Medicines Today"}
        </h2>

        {/* ===== DESCRIPTION ===== */}
        <p className="text-muted-foreground">
          {user
            ? "Continue where you left off with quick access to your actions."
            : "Browse trusted OTC medicines or join as a seller to grow your business."}
        </p>

        {/* ===== ACTIONS ===== */}
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          {!user && (
            <>
              <Button asChild size="lg">
                <Link href="/shop">Shop Medicines</Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link href="/signup">Become a Seller</Link>
              </Button>
            </>
          )}

          {user?.role === Role.customer && (
            <>
              <Button asChild size="lg">
                <Link href="/shop">Continue Shopping</Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link href="/orders">View Orders</Link>
              </Button>
            </>
          )}

          {user?.role === Role.seller && (
            <>
              <Button asChild size="lg">
                <Link href="/seller">Go to Dashboard</Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link href="/seller/medicines">Manage Medicines</Link>
              </Button>
            </>
          )}

          {user?.role === Role.admin && (
            <>
              <Button asChild size="lg">
                <Link href="/admin">Admin Dashboard</Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link href="/admin/users">Manage Users</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
