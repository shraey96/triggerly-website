"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { getUseCaseBySlug, UseCase } from "@/constants/useCases";
import UseCaseCard from "@/components/UseCaseCard";

// Get the four specified use cases
const getHighlightedUseCases = (): UseCase[] => {
  const highlightedCases = [
    getUseCaseBySlug("website-lead-response"),
    getUseCaseBySlug("auto-onboarding-emails"),
    getUseCaseBySlug("auto-proposal-generation"),
    getUseCaseBySlug("cart-recovery-automation"),
  ];

  return highlightedCases.filter((useCase): useCase is UseCase => !!useCase);
};

export default function UseCaseCardsGrid() {
  const highlightedUseCases = getHighlightedUseCases();

  return (
    <section
      id="use-cases"
      className="w-full py-12 sm:py-16 md:py-20 px-4 bg-gray-50 dark:bg-gray-900/50 scroll-mt-16 md:scroll-mt-20"
    >
      <div className="container mx-auto">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 md:mb-4">
            Automation Wins
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 text-center mb-8 sm:mb-12 md:mb-16 max-w-3xl mx-auto">
            Explore examples of high-leverage automations built using AI
            workflows — with clear business outcomes.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {highlightedUseCases.map((useCase, index) => (
            <StaggerItem key={index}>
              <UseCaseCard useCase={useCase} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="text-center">
          <FadeIn>
            <Link
              href="/use-cases"
              className="inline-flex items-center gap-2 py-1.5 sm:py-2 px-4 sm:px-6 text-sm sm:text-base font-medium text-white rounded-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
            >
              View all use cases{" "}
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
