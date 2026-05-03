import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-10 grid md:grid-cols-2 gap-8">
      {/* LEFT: Profile Info Card */}
      <div className="rounded-xl border bg-card p-6 space-y-6">
        <Skeleton className="h-6 w-40" />

        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-3 w-24" />
              <Skeleton className="h-4 w-40" />
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT: Profile Form */}
      <div className="rounded-xl border bg-card p-6 space-y-6">
        {/* Email */}
        <div className="space-y-2">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-10 w-full" />
        </div>

        {/* Name */}
        <div className="space-y-2">
          <Skeleton className="h-3 w-28" />
          <Skeleton className="h-10 w-full" />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Skeleton className="h-3 w-32" />
          <Skeleton className="h-10 w-full" />
        </div>

        {/* Button */}
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
    </div>
  );
}
