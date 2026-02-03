import { categoryService } from "@/services/category.service";
import CategorySection from "./CategorySection";

export default async function CategorySectionWrapper() {
  const categoriesData = await categoryService.getCategories();

  return <CategorySection categories={categoriesData?.data || []} />;
}
