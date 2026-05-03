export default function Loading() {
  return (
    <div className="space-y-5 animate-pulse">
      {/* Header */}
      <div className="space-y-2">
        <div className="h-6 w-48 bg-muted rounded" />
        <div className="h-4 w-72 bg-muted rounded" />
      </div>

      {/* USERS */}
      <section className="space-y-2">
        <div className="h-3 w-20 bg-muted rounded" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-20 rounded-lg border bg-muted/40" />
          ))}
        </div>
      </section>

      {/* ORDERS */}
      <section className="space-y-2">
        <div className="h-3 w-20 bg-muted rounded" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-20 rounded-lg border bg-muted/40" />
          ))}
        </div>
      </section>

      {/* MEDICINES */}
      <section className="space-y-2">
        <div className="h-3 w-24 bg-muted rounded" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-20 rounded-lg border bg-muted/40" />
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="space-y-2">
        <div className="h-3 w-28 bg-muted rounded" />
        <div className="grid gap-3 sm:grid-cols-2">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="h-20 rounded-lg border bg-muted/40" />
          ))}
        </div>
      </section>
    </div>
  );
}
