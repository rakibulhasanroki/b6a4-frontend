import AddCategoryForm from "@/components/modules/admin/AddCategory";
import CategoryList from "@/components/modules/admin/CategoryList";
import { categoryService } from "@/services/category.service";

export default async function CategoriesPage() {
  const categories = await categoryService.getCategories();

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Categories</h1>
          <p className="text-sm text-muted-foreground">
            Manage product categories used across the platform
          </p>
        </div>

        <AddCategoryForm />
      </div>

      <CategoryList categories={categories.data} />
    </div>
  );
}
