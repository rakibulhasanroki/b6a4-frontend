import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <Skeleton className="h-6 w-32" />

      {/* FILTER BAR */}
      <div className="flex flex-col md:flex-row gap-3">
        <Skeleton className="h-10 w-full md:w-64" />
        <Skeleton className="h-10 w-full md:w-44" />
      </div>

      {/* TABLE (Desktop) */}
      <div className="hidden md:block rounded-lg border bg-background shadow-sm">
        {/* Table Header */}
        <div className="grid grid-cols-6 gap-4 p-4 border-b">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-16 ml-auto" />
        </div>

        {/* Rows */}
        <div className="divide-y">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="grid grid-cols-6 gap-4 p-4 items-center">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-20" />
              <div className="flex justify-end">
                <Skeleton className="h-8 w-16" />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="border-t p-4 flex justify-between items-center">
          <Skeleton className="h-4 w-48" />
          <div className="flex gap-2">
            <Skeleton className="h-9 w-9" />
            <Skeleton className="h-9 w-9" />
            <Skeleton className="h-9 w-20" />
            <Skeleton className="h-9 w-9" />
            <Skeleton className="h-9 w-9" />
          </div>
        </div>
      </div>

      {/* MOBILE CARDS */}
      <div className="md:hidden space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="rounded-lg border bg-background p-4 space-y-3"
          >
            <div className="flex justify-between">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-16" />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-20" />
            </div>

            <div className="flex justify-between items-center pt-2 border-t">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-8 w-16" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
