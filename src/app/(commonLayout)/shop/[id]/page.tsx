import { medicineService } from "@/services/medicine.service";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Metadata } from "next";

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
            <input
              type="number"
              min={1}
              max={medicine.stock}
              defaultValue={1}
              className="w-16 h-9 rounded-md border px-2 text-sm"
            />
            <Button className="flex-1 h-9" disabled={medicine.stock === 0}>
              {medicine.stock === 0 ? "Out of Stock" : "Add to Cart"}
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
