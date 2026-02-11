import { Medicine } from "@/types";
import MedicineCard from "../homepage/MedicineCard";
import PaginationControls from "@/components/ui/pagination";
import { getSessionUser } from "@/lib/getSessionUser";

export default async function MedicineGrid({
  medicines,
  meta,
}: {
  medicines: Medicine[];
  meta: { page: number; limit: number; total: number; totalPages: number };
}) {
  const user = await getSessionUser();
  if (medicines.length === 0) {
    return (
      <div className="lg:col-span-3 flex flex-col items-center justify-center py-20 text-center">
        <h3 className="text-lg font-semibold">No medicines found</h3>
        <p className="text-sm text-muted-foreground mt-2">
          Try changing your search or filters
        </p>
      </div>
    );
  }

  return (
    <div className="lg:col-span-3">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {medicines.map((med) => (
          <MedicineCard key={med.id} medicine={med} user={user} />
        ))}
      </div>
      <PaginationControls meta={meta} />
    </div>
  );
}
