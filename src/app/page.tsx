import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PortfolioPreviewSection } from "@/components/sections/portfolio-preview-section";
import { ServicesSection } from "@/components/sections/services-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <PortfolioPreviewSection />
      <TechStackSection />
      <CtaBannerSection />
    </>
  );
}
