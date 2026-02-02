import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export type CardMode = "home" | "shop";
export type Medicine = {
  id?: string;
  name: string;
  price: number;
  image: string;
  manufacturer?: string;
};

export default function MedicineCard({
  medicine,
  mode = "shop",
}: {
  medicine: Medicine;
  mode?: CardMode;
}) {
  return (
    <Card className="overflow-hidden flex flex-col">
      <div className="px-4 pt-4">
        <div className="relative h-48 w-full overflow-hidden rounded-md bg-white">
          <Image
            src={medicine.image || "/fallback-image.jpg"}
            alt={medicine.name}
            fill
            className="object-contain text-black"
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </div>
      </div>

      <CardContent className="p-4 flex-1 space-y-1">
        <h3 className="font-medium">{medicine.name}</h3>
        <p className="text-sm text-muted-foreground">৳{medicine.price}</p>
        <p className="font-bold">Manufacturer: {medicine.manufacturer}</p>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex">
        {mode === "home" && (
          <Button asChild className="w-full">
            <Link href={`/shop/${medicine.id}`}>View Details</Link>
          </Button>
        )}

        {mode === "shop" && (
          <div className="flex w-full gap-2">
            <Button asChild variant="outline" className="flex-1 rounded-r-none">
              <Link href={`/shop/${medicine.id}`}>Details</Link>
            </Button>

            <Button className="flex-1 rounded-l-none">Add to Cart</Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
