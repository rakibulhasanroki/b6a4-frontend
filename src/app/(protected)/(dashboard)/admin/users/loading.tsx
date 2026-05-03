export default function Loading() {
  return (
    <div className="space-y-4 animate-pulse">
      {/* Header */}
      <div className="h-6 w-28 bg-muted rounded" />

      {/* Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
        <div className="h-10 w-full sm:w-[280px] bg-muted rounded" />
        <div className="h-10 w-full sm:w-[150px] bg-muted rounded" />
        <div className="h-10 w-full sm:w-[150px] bg-muted rounded" />
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block rounded-lg border bg-background shadow-sm">
        {/* Header */}
        <div className="grid grid-cols-6 gap-4 px-4 py-3 border-b bg-muted/40">
          <div className="h-4 w-24 bg-muted rounded" />
          <div className="h-4 w-32 bg-muted rounded" />
          <div className="h-4 w-24 bg-muted rounded" />
          <div className="h-4 w-16 bg-muted rounded" />
          <div className="h-4 w-20 bg-muted rounded" />
          <div className="h-4 w-16 bg-muted rounded ml-auto" />
        </div>

        {/* Rows */}
        <div className="divide-y">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className="grid grid-cols-6 gap-4 px-4 py-4 items-center"
            >
              <div className="h-4 w-28 bg-muted rounded" />
              <div className="h-4 w-40 bg-muted rounded" />
              <div className="h-4 w-28 bg-muted rounded" />
              <div className="h-6 w-20 bg-muted rounded-md" />
              <div className="h-6 w-20 bg-muted rounded-md" />
              <div className="h-8 w-20 bg-muted rounded ml-auto" />
            </div>
          ))}
        </div>
      </div>

      {/* Tablet View */}
      <div className="hidden sm:grid lg:hidden gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="grid grid-cols-6 items-center gap-3 rounded-lg border bg-background p-3 shadow-sm"
          >
            <div className="col-span-2 space-y-2">
              <div className="h-4 w-28 bg-muted rounded" />
              <div className="h-3 w-36 bg-muted rounded" />
            </div>

            <div className="h-4 w-20 bg-muted rounded" />

            <div className="h-6 w-16 bg-muted rounded-md" />

            <div className="h-6 w-16 bg-muted rounded-md" />

            <div className="flex justify-end">
              <div className="h-8 w-16 bg-muted rounded" />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="sm:hidden space-y-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="rounded-lg border bg-background p-4 shadow-sm space-y-3"
          >
            <div className="flex justify-between">
              <div className="space-y-2">
                <div className="h-4 w-28 bg-muted rounded" />
                <div className="h-3 w-36 bg-muted rounded" />
              </div>
              <div className="h-6 w-16 bg-muted rounded" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <div className="h-3 w-16 bg-muted rounded" />
                <div className="h-4 w-24 bg-muted rounded" />
              </div>

              <div className="space-y-1">
                <div className="h-3 w-16 bg-muted rounded" />
                <div className="h-6 w-16 bg-muted rounded" />
              </div>
            </div>

            <div className="flex justify-end border-t pt-3">
              <div className="h-8 w-20 bg-muted rounded" />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-end">
        <div className="w-full sm:w-[420px] rounded-lg border p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="h-4 w-40 bg-muted rounded" />

          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-muted rounded" />
            <div className="h-8 w-8 bg-muted rounded" />
            <div className="h-4 w-24 bg-muted rounded" />
            <div className="h-8 w-8 bg-muted rounded" />
            <div className="h-8 w-8 bg-muted rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
