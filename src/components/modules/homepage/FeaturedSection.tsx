import MedicineCard from "./MedicineCard";

function FeaturedSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Popular Medicines</h2>
          <a
            href="/shop"
            className="text-sm text-primary font-medium hover:underline"
          >
            View All
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              id: "1",
              name: "Paracetamol 500mg",
              price: 2.5,
              image:
                "https://images.unsplash.com/photo-1584362917165-526a968579e8",
            },
            {
              id: "2",
              name: "Ibuprofen 400mg",
              price: 3.0,
              image:
                "https://images.unsplash.com/photo-1584362917165-526a968579e8",
            },
            {
              id: "3",
              name: "Amoxicillin 250mg",
              price: 6.5,
              image:
                "https://images.unsplash.com/photo-1584362917165-526a968579e8",
            },
            {
              id: "4",
              name: "Vitamin C 1000mg",
              price: 5.0,
              image:
                "https://images.unsplash.com/photo-1584362917165-526a968579e8",
            },
            {
              id: "5",
              name: "Metformin 500mg",
              price: 4.5,
              image:
                "https://images.unsplash.com/photo-1584362917165-526a968579e8",
            },
            {
              id: "6",
              name: "Amlodipine 5mg",
              price: 4.0,
              image:
                "https://images.unsplash.com/photo-1584362917165-526a968579e8",
            },
          ].map((med, i) => (
            <MedicineCard key={med.id ?? i} medicine={med} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;
