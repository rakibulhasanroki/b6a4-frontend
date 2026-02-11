import { medicineService } from "@/services/medicine.service";
import FeaturedSection from "./FeaturedSection";

export default async function FeaturedSectionWrapper() {
  const medicineData = await medicineService.getMedicines(
    {
      limit: 40,
      page: 1,
    },
    { revalidate: 300 },
  );

  return <FeaturedSection medicines={medicineData?.data || []} />;
}
