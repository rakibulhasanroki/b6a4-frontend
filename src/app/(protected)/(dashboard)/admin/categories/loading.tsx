export default function Loading() {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Header + Add Form */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <div className="h-6 w-40 rounded bg-muted" />
          <div className="h-4 w-72 rounded bg-muted" />
        </div>

        {/* Fake input + button */}
        <div className="flex w-full items-center gap-2 sm:w-auto">
          <div className="h-10 w-full sm:w-64 rounded bg-muted" />
          <div className="h-10 w-20 rounded bg-muted" />
        </div>
      </div>

      {/* Category Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-20 rounded-lg border bg-muted/40" />
        ))}
      </div>
    </div>
  );
}
