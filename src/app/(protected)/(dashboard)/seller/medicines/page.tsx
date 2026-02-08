import { categoryService } from "@/services/category.service";
import PaginationControls from "@/components/ui/pagination";
import CategoryFilter from "@/components/modules/seller/CategoryFilter";
import { medicineService } from "@/services/medicine.service";
import MedicineForm from "@/components/modules/seller/MedicineForm";
import MedicineTabs from "@/components/modules/seller/MedicineTab";
import MedicinesTable from "@/components/modules/seller/MedicineTable";
export default async function SellerMedicinesPage({ searchParams }: any) {
  const params = await searchParams;

  const medicines = await medicineService.getMedicines(
    {
      page: Number(params.page ?? 1),
      limit: 10,
      categoryId: params.categoryId,
    },
    { revalidate: 120 },
  );

  const categoriesRes = await categoryService.getCategories();

  const manageMedicinesUI = (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Inventory</h1>
        <CategoryFilter
          categories={categoriesRes.data || []}
          selected={params.categoryId}
        />
      </div>

      <MedicinesTable medicines={medicines.data || []} />

      <PaginationControls meta={medicines.meta} />
    </div>
  );

  const addMedicineUI = <MedicineForm categories={categoriesRes.data || []} />;

  return (
    <MedicineTabs
      manageContent={manageMedicinesUI}
      addContent={addMedicineUI}
    />
  );
}
