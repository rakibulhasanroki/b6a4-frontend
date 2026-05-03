export default function Loading() {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Header */}
      <div className="h-7 w-40 rounded bg-muted" />

      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="h-10 w-full max-w-sm rounded bg-muted" />
        <div className="h-10 w-[180px] rounded bg-muted" />
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block rounded-lg border bg-background shadow-sm">
        <div className="overflow-x-auto">
          {/* Header row */}
          <div className="grid grid-cols-7 gap-4 px-4 py-3 border-b bg-muted/40">
            <div className="h-4 w-24 bg-muted rounded" />
            <div className="h-4 w-20 bg-muted rounded" />
            <div className="h-4 w-28 bg-muted rounded" />
            <div className="h-4 w-20 bg-muted rounded" />
            <div className="h-4 w-16 bg-muted rounded" />
            <div className="h-4 w-20 bg-muted rounded" />
            <div className="h-4 w-16 bg-muted rounded ml-auto" />
          </div>

          {/* Rows */}
          <div className="divide-y">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className="grid grid-cols-7 gap-4 px-4 py-4 items-center"
              >
                <div className="h-4 w-28 bg-muted rounded" />
                <div className="h-4 w-24 bg-muted rounded" />
                <div className="h-4 w-32 bg-muted rounded" />
                <div className="h-6 w-20 bg-muted rounded-md" />
                <div className="h-4 w-16 bg-muted rounded" />
                <div className="h-4 w-24 bg-muted rounded" />
                <div className="h-8 w-16 bg-muted rounded ml-auto" />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="border-t px-4 py-4 flex items-center justify-between">
          <div className="h-4 w-32 bg-muted rounded" />
          <div className="flex gap-2">
            <div className="h-8 w-8 bg-muted rounded" />
            <div className="h-8 w-8 bg-muted rounded" />
            <div className="h-8 w-8 bg-muted rounded" />
          </div>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="rounded-lg border bg-background p-4 shadow-sm space-y-3"
          >
            <div className="flex justify-between">
              <div className="h-4 w-28 bg-muted rounded" />
              <div className="h-5 w-16 bg-muted rounded" />
            </div>

            <div className="h-4 w-32 bg-muted rounded" />

            <div className="grid grid-cols-2 gap-2">
              <div className="h-4 w-full bg-muted rounded" />
              <div className="h-4 w-full bg-muted rounded" />
            </div>

            <div className="flex justify-between items-center pt-2 border-t">
              <div className="h-3 w-24 bg-muted rounded" />
              <div className="h-8 w-16 bg-muted rounded" />
            </div>
          </div>
        ))}

        {/* Mobile Pagination */}
        <div className="flex justify-between items-center">
          <div className="h-4 w-28 bg-muted rounded" />
          <div className="flex gap-2">
            <div className="h-8 w-8 bg-muted rounded" />
            <div className="h-8 w-8 bg-muted rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
