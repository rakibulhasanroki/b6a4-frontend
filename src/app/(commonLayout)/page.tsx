import HeroSection from "@/components/modules/homepage/HeroSection";
import WhyChooseUs from "@/components/modules/homepage/WhyChooseUs";
import CategorySection from "@/components/modules/homepage/CategorySection";
import FeaturedSection from "@/components/modules/homepage/FeaturedSection";

import { categoryService } from "@/services/category.service";
import { medicineService } from "@/services/medicine.service";

export default async function HomePage() {
  const categoriesData = await categoryService.getCategories();
  const medicineData = await medicineService.getMedicines({
    limit: 6,
    page: 1,
  });
  return (
    <>
      <HeroSection />
      <CategorySection categories={categoriesData?.data || []} />
      <FeaturedSection medicines={medicineData?.data || []} />
      <WhyChooseUs />
    </>
  );
}
