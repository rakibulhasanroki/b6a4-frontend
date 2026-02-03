import { Skeleton } from "@/components/ui/skeleton";

export default function CategorySkeleton() {
  return (
    <section id="categories" className="py-16">
      <div className="container mx-auto px-4">
        <Skeleton className="h-8 w-48 mb-8" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-16 w-full rounded-md" />
          ))}
        </div>
      </div>
    </section>
  );
}
