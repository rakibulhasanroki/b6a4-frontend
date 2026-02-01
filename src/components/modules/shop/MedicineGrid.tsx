import MedicineCard from "../homepage/MedicineCard";

const demoMedicines = [
  {
    name: "Paracetamol 500mg",
    price: 2.5,
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
  },
  {
    name: "Ibuprofen 400mg",
    price: 3.0,
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
  },
  {
    name: "Amoxicillin 250mg",
    price: 6.5,
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
  },
  {
    name: "Vitamin C 100mg",
    price: 5.0,
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
  },
  {
    name: "Vitamin  100mg",
    price: 5.0,
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
  },
  {
    name: "Vitamin",
    price: 5.0,
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
  },
];

export default function MedicineGrid() {
  return (
    <div className="lg:col-span-3">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {demoMedicines.map((med) => (
          <MedicineCard key={med.name} medicine={med} />
        ))}
      </div>
    </div>
  );
}
