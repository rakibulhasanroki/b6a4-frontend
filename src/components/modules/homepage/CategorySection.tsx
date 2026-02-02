import { Category } from "@/services/category.service";
import MedicineCategoryCard from "./MedicineCategoryCard";

function CategorySection({ categories = [] }: { categories: Category[] }) {
  return (
    <section id="categories" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-8">Shop by Category</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((cat) => (
            <MedicineCategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
