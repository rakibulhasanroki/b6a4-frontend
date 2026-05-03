import HeroSection from "@/components/modules/homepage/HeroSection";
import CategorySectionWrapper from "@/components/modules/homepage/CategorySectionWrapper";
import FeaturedSectionWrapper from "@/components/modules/homepage/FeaturedSectionWrapper";
import WhyChooseUs from "@/components/modules/homepage/WhyChooseUs";
import HowItWorks from "@/components/modules/homepage/HowItWorks";
import Testimonials from "@/components/modules/homepage/Testimonial";
import FAQ from "@/components/modules/homepage/FAQ";
import CTA from "@/components/modules/homepage/CTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategorySectionWrapper />
      <FeaturedSectionWrapper />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
