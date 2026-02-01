import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export type Medicine = {
  id?: string;
  name: string;
  price: number;
  image: string;
};

export default function MedicineCard({ medicine }: { medicine: Medicine }) {
  return (
    <Card className="overflow-hidden flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src={medicine.image}
          alt={medicine.name}
          fill
          className="object-cover"
        />
      </div>

      <CardContent className="p-4 flex-1 space-y-1">
        <h3 className="font-medium">{medicine.name}</h3>
        <p className="text-sm text-muted-foreground">৳{medicine.price}</p>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full cursor-pointer">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
