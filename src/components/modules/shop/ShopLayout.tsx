import { medicineService } from "@/services/medicine.service";
import FiltersSidebar from "./FilterSidebar";
import MedicineGrid from "./MedicineGrid";
import SearchBar from "./SearchBar";
import { categoryService } from "@/services/category.service";

export type SearchParams = {
  searchParams: {
    search?: string;
    categoryId?: string;
    minPrice?: string;
    maxPrice?: string;
    manufacturer?: string;
    page?: number;
    limit?: number;
  };
};

export default async function ShopLayout({ searchParams }: SearchParams) {
  const params = {
    ...searchParams,
    limit: Number(searchParams.limit ?? 9),
  };

  const medicines = await medicineService.getMedicines(params);
  const categoriesData = await categoryService.getCategories();

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="grid lg:grid-cols-4 gap-8">
        <div className="space-y-6 lg:sticky top-24 h-fit">
          <SearchBar />
          <FiltersSidebar categories={categoriesData.data || []} />
        </div>
        <MedicineGrid medicines={medicines.data} meta={medicines.meta} />
      </div>
    </section>
  );
}
