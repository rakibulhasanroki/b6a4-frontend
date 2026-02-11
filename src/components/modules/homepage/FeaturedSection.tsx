import { Medicine } from "@/types";
import MedicineCard from "./MedicineCard";

function FeaturedSection({ medicines = [] }: { medicines: Medicine[] }) {
  const featuredMedicines = medicines
    .filter((med) => med.reviews && med.reviews.length > 0)
    .slice(0, 3);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold tracking-tight">
            Featured Medicines
          </h2>

          <a
            href="/shop"
            className="text-sm text-primary font-medium hover:underline"
          >
            View All
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredMedicines.map((med) => (
            <MedicineCard key={med.id} medicine={med} mode="home" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;
