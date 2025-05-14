"use client";

import HeroSection from "@/components/containers/HeroSection";
import IntegrationsSection from "@/components/containers/IntegrationsSection";
import UseCaseCardsGrid from "@/components/containers/UseCaseCardsGrid";
import HowItWorksSection from "@/components/containers/HowItWorksSection";
import TestimonialsSection from "@/components/containers/TestimonialsSection";
import FAQSection from "@/components/containers/FAQSection";
import FinalCTASection from "@/components/containers/FinalCTASection";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <IntegrationsSection />
      <UseCaseCardsGrid />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
}
