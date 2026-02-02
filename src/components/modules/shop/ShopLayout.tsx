import { medicineService } from "@/services/medicine.service";
import FiltersSidebar from "./FilterSidebar";
import MedicineGrid from "./MedicineGrid";
import SearchBar from "./SearchBar";

export type SearchParams = {
  searchParams: {
    search?: string;
    categoryId?: string;
    minPrice?: string;
    maxPrice?: string;
    manufacturer?: string;
    page?: string;
    limit?: string;
  };
};

export default async function ShopLayout({ searchParams }: SearchParams) {
  const medicines = await medicineService.getMedicines(searchParams);

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="grid lg:grid-cols-4 gap-8">
        <div className="space-y-6 sticky top-24 h-fit">
          <SearchBar />
          <FiltersSidebar />
        </div>
        <MedicineGrid medicines={medicines.data} meta={medicines.meta} />
      </div>
    </section>
  );
}
