import { Category } from "@/types";
import MedicineCategoryCard from "./MedicineCategoryCard";

function CategorySection({ categories = [] }: { categories: Category[] }) {
  return (
    <section id="categories" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold tracking-tight">
            Shop by Category
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Find medicines by health needs and categories
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {categories.map((cat) => (
            <MedicineCategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
