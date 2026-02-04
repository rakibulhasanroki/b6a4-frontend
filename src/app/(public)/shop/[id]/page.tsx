import { medicineService } from "@/services/medicine.service";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Metadata } from "next";
import AddToCartButton from "@/components/modules/shop/AddToCartButton";
import { getSessionUser } from "@/lib/getSessionUser";

interface categoryParams {
  params: {
    id: string;
    name: string;
  };
}
export const metadata: Metadata = {
  title: "Shop",
};

export default async function MedicineDetailsPage({ params }: categoryParams) {
  const { id } = await params;

  const res = await medicineService.getMedicineById(id);
  const medicine = res.data;

  const user = await getSessionUser({ requireAuth: true });

  if (!medicine) {
    return <div className="container mx-auto py-20">Medicine not found.</div>;
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div className="bg-background rounded-xl border p-6">
          <div className="relative w-full max-w-md mx-auto aspect-square">
            <Image
              src={medicine.image}
              alt={medicine.name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 500px"
              priority
            />
          </div>
        </div>

        <Card className="px-6   space-y-2.5">
          {/* Title + Manufacturer */}
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold leading-tight">
              {medicine.name}
            </h1>
            <p className="text-sm text-muted-foreground">
              {medicine.manufacturer || "Unknown Manufacturer"}
            </p>
          </div>

          <p className="text-xl font-bold text-primary">৳{medicine.price}</p>

          {/* Meta Info */}
          <div className="text-sm space-y-1">
            <p className="text-muted-foreground">
              Category: {medicine.category?.name}
            </p>
            <p
              className={
                medicine.stock > 0
                  ? "text-green-600 font-medium"
                  : "text-red-500 font-medium"
              }
            >
              {medicine.stock > 0
                ? `In Stock (${medicine.stock})`
                : "Out of Stock"}
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="font-medium text-sm">Description</h3>
            <p className="text-sm text-muted-foreground leading-snug">
              {medicine.description}
            </p>
          </div>

          <div className="text-sm space-y-1">
            <h3 className="font-medium text-sm">Seller</h3>
            <p>{medicine.seller?.name}</p>
            <p className="text-muted-foreground text-xs">
              {medicine.seller?.phoneNumber}
            </p>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <div className="flex-1 h-9">
              {medicine.stock === 0 ? (
                <Button disabled>Out of Stock</Button>
              ) : (
                <AddToCartButton medicine={medicine} user={user} />
              )}
            </div>
          </div>
        </Card>
      </div>

      {medicine.reviews && medicine.reviews.length > 0 && (
        <div className="mt-12 max-w-3xl">
          <h2 className="text-xl font-semibold mb-6">Customer Reviews</h2>

          <div className="space-y-6">
            {medicine.reviews.map((review: any) => (
              <Card key={review.customer.id} className="p-5 space-y-2">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{review.customer.name}</p>
                  <div className="text-sm font-medium text-yellow-600">
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {review.comment}
                </p>
              </Card>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
