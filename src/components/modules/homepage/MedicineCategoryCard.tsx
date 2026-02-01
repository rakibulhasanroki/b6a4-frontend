import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function MedicineCategoryCard({ name }: { name: string }) {
  return (
    <Link href={`/shop?category=${name}`}>
      <Card className="hover:shadow-md hover:-translate-y-1 transition cursor-pointer text-center">
        <CardContent className="font-medium hover:text-primary transition">
          {name}
        </CardContent>
      </Card>
    </Link>
  );
}
