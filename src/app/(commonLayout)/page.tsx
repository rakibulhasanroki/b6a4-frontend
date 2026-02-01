import HeroSection from "@/components/modules/homepage/HeroSection";
import WhyChooseUs from "@/components/modules/homepage/WhyChooseUs";
import CategorySection from "@/components/modules/homepage/CategorySection";
import FeaturedSection from "@/components/modules/homepage/FeaturedSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <FeaturedSection />
      <WhyChooseUs />
    </>
  );
}
