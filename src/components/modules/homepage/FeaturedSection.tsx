import MedicineCard, { Medicine } from "./MedicineCard";

function FeaturedSection({ medicines = [] }: { medicines: Medicine[] }) {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Featured</h2>
          <a
            href="/shop"
            className="text-sm text-primary font-medium hover:underline"
          >
            View All
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {medicines.map((med) => (
            <MedicineCard key={med.id} medicine={med} mode="home" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;
