import MedicineCategoryCard from "./MedicineCategoryCard";

function CategorySection() {
  return (
    <section id="categories" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-8">Shop by Category</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            "Pain Relief",
            "Antibiotics",
            "Vitamins & Supplements",
            "Diabetes Care",
            "Heart & Blood Pressure",
          ].map((cat) => (
            <MedicineCategoryCard key={cat} name={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
