"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { FadeIn } from "@/components/animations";
import { Button } from "@/components/ui/button";
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

      {/* AI Receptionist cross-link */}
      <section className="w-full py-10 md:py-14 px-4 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-4xl">
          <FadeIn>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/40 dark:to-blue-900/30 rounded-2xl border border-blue-200 dark:border-blue-800 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-blue-500 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
                    AI Receptionist for Your Business
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                    Never miss a call. Our AI answers 24/7, books appointments,
                    and qualifies leads automatically.
                  </p>
                </div>
              </div>
              <Button
                className="bg-blue-500 hover:bg-blue-600 text-white border-0 rounded-full px-6 flex-shrink-0"
                asChild
              >
                <Link href="/ai-receptionist">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
}
