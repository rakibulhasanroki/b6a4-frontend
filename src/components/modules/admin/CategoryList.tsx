import { Card, CardContent } from "@/components/ui/card";
import UpdateCategory from "./UpdateCategory";
import DeleteCategory from "./DeleteCategory";

export default function CategoryList({
  categories,
}: {
  categories: { id: string; name: string }[];
}) {
  if (!categories.length) {
    return (
      <div className="rounded-lg border border-dashed p-10 text-center text-sm text-muted-foreground">
        No categories found
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <Card key={category.id} className="transition-shadow hover:shadow-sm">
          <CardContent className="flex items-center justify-between gap-3 p-5">
            <UpdateCategory
              categoryId={category.id}
              categoryName={category.name}
            />

            <DeleteCategory categoryId={category.id} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
