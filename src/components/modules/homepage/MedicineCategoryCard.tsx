import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Category } from "@/types";

export default function MedicineCategoryCard({
  category,
}: {
  category: Category;
}) {
  return (
    <Link href={`/shop?categoryId=${category.id}`}>
      <Card className="hover:shadow-md hover:-translate-y-1 transition cursor-pointer text-center">
        <CardContent className="font-medium hover:text-primary transition">
          {category.name}
        </CardContent>
      </Card>
    </Link>
  );
}
