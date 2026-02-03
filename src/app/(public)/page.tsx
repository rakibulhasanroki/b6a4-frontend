import HeroSection from "@/components/modules/homepage/HeroSection";
import WhyChooseUs from "@/components/modules/homepage/WhyChooseUs";

import CategorySkeleton from "@/components/modules/homepage/CategorySkeleton";
import FeaturedSkeleton from "@/components/modules/homepage/FeaturedSkeleton";
import { Suspense } from "react";
import CategorySectionWrapper from "@/components/modules/homepage/CategorySectionWrapper";
import FeaturedSectionWrapper from "@/components/modules/homepage/FeaturedSectionWrapper";

export default async function HomePage() {
  return (
    <>
      <HeroSection />
      <Suspense fallback={<CategorySkeleton />}>
        <CategorySectionWrapper />
      </Suspense>

      <Suspense fallback={<FeaturedSkeleton />}>
        <FeaturedSectionWrapper />
      </Suspense>

      <WhyChooseUs />
    </>
  );
}
