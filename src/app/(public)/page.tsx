import HeroSection from "@/components/modules/homepage/HeroSection";
import WhyChooseUs from "@/components/modules/homepage/WhyChooseUs";
import CategorySectionWrapper from "@/components/modules/homepage/CategorySectionWrapper";
import FeaturedSectionWrapper from "@/components/modules/homepage/FeaturedSectionWrapper";

export default async function HomePage() {
  return (
    <>
      <HeroSection />
      <CategorySectionWrapper />
      <FeaturedSectionWrapper />
      <WhyChooseUs />
    </>
  );
}
