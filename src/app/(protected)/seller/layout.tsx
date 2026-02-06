import SellerSidebar from "@/components/modules/seller/SellerSidebar";

export default function SellerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-muted/40">
      <SellerSidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
