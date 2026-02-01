import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-3 text-sm">
        {/* Brand */}
        <div className="space-y-2">
          <h3 className="font-semibold text-foreground text-base">MediStore</h3>
          <p className="text-muted-foreground">
            Your trusted online pharmacy for over-the-counter medicines.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h4 className="font-medium text-foreground">Quick Links</h4>
          <ul className="space-y-1 text-muted-foreground">
            <li>
              <Link href="/shop" className="hover:text-primary">
                Shop Medicines
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-primary">
                Login
              </Link>
            </li>
            <li>
              <Link href="/signup" className="hover:text-primary">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>

        {/* Info */}
        <div className="space-y-2">
          <h4 className="font-medium text-foreground">Information</h4>
          <p className="text-muted-foreground">
            We sell only OTC (over-the-counter) medicines. No prescription drugs
            available.
          </p>
        </div>
      </div>

      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} MediStore. All rights reserved.
      </div>
    </footer>
  );
}
