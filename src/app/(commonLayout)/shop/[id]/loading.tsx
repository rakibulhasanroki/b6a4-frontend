import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingMedicineDetails() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Image Skeleton */}
        <div className="bg-background rounded-xl border p-6">
          <Skeleton className="w-full max-w-md mx-auto aspect-square rounded-lg" />
        </div>

        {/* Details Skeleton */}
        <Card className="px-6 py-5 space-y-2.5">
          <CardHeader className="space-y-2 p-0">
            <Skeleton className="h-6 w-2/3" />
            <Skeleton className="h-4 w-1/3" />
          </CardHeader>

          <CardContent className="p-0 space-y-2.5">
            {/* Price */}
            <Skeleton className="h-6 w-1/4" />

            {/* Meta Info */}
            <div className="space-y-1">
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-1/3" />
            </div>

            {/* Description */}
            <div className="space-y-1 pt-1">
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>

            {/* Seller */}
            <div className="space-y-1 pt-1">
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-3 w-1/2" />
            </div>

            {/* Cart */}
            <div className="flex items-center gap-3 pt-3">
              <Skeleton className="w-16 h-9 rounded-md" />
              <Skeleton className="flex-1 h-9 rounded-md" />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
