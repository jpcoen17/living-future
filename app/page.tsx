import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedProperties } from "@/components/sections/FeaturedProperties";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProperties />
      <Testimonials />
      <CTABanner />
    </>
  );
}
