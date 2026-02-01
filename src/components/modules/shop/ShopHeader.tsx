export default function ShopHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold">Shop Medicines</h1>
        <p className="text-muted-foreground text-sm">
          Showing popular and available medicines
        </p>
      </div>

      <div className="text-sm text-muted-foreground">24 medicines found</div>
    </div>
  );
}
