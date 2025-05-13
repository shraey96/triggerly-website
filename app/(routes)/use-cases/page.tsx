"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { useCases } from "@/constants/useCases";
import UseCaseCard from "@/components/UseCaseCard";

export default function UseCasesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24">
        <FadeIn>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Use Cases
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-500 dark:text-gray-300">
            Explore real-world automation examples categorized by industry
          </p>
        </FadeIn>

        <div className="mt-16 space-y-20">
          {useCases.map((categoryGroup) => (
            <div key={categoryGroup.category} className="mb-16">
              <FadeIn>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {categoryGroup.category}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl">
                  {categoryGroup.description}
                </p>
              </FadeIn>

              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryGroup.cases.map((useCase) => (
                  <StaggerItem key={useCase.slug}>
                    <UseCaseCard useCase={useCase} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
