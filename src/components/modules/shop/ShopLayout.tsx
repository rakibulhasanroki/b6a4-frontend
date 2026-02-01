import FiltersSidebar from "./FilterSidebar";
import MedicineGrid from "./MedicineGrid";

export default function ShopLayout() {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="grid lg:grid-cols-4 gap-8">
        <FiltersSidebar />
        <MedicineGrid />
      </div>
    </section>
  );
}
