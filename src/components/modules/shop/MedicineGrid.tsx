import { Medicine } from "@/types";
import MedicineCard from "../homepage/MedicineCard";
import PaginationControls from "@/components/ui/pagination";

export default function MedicineGrid({
  medicines,
  meta,
}: {
  medicines: Medicine[];
  meta: { page: number; limit: number; total: number; totalPages: number };
}) {
  return (
    <div className="lg:col-span-3">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {medicines.map((med) => (
          <MedicineCard key={med.id} medicine={med} />
        ))}
      </div>
      <PaginationControls meta={meta} />
    </div>
  );
}
