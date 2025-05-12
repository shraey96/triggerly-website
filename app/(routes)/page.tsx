"use client";

import HeroSection from "@/components/containers/HeroSection";
import IntegrationsSection from "@/components/containers/IntegrationsSection";
import UseCaseCardsGrid from "@/components/containers/UseCaseCardsGrid";
import ServiceBlocksSection from "@/components/containers/ServiceBlocksSection";
import HowItWorksSection from "@/components/containers/HowItWorksSection";
import TestimonialsSection from "@/components/containers/TestimonialsSection";
import FinalCTASection from "@/components/containers/FinalCTASection";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <IntegrationsSection />
      <UseCaseCardsGrid />
      <ServiceBlocksSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FinalCTASection />
    </div>
  );
}
