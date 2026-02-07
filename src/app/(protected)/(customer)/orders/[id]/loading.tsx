export default function Loading() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-8 space-y-6">
      <div className="h-7 w-48 bg-muted rounded" />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="h-64 bg-muted rounded-lg" />
        </div>

        <div className="space-y-6">
          <div className="h-40 bg-muted rounded-lg" />
          <div className="h-40 bg-muted rounded-lg" />
        </div>
      </div>
    </div>
  );
}
