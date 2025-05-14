"use client";

import React from "react";
import { FadeIn } from "@/components/animations";
import { workflowSteps, WorkflowStep } from "@/constants/workflow-steps";

export default function HowItWorksSection() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-24 px-4 bg-white dark:bg-gray-950">
      <div className="container mx-auto max-w-4xl">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 md:mb-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 text-center mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto">
            A streamlined 4-step process that ensures every automation we build
            is strategic, efficient, and impactful.
          </p>
        </FadeIn>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 sm:left-8 top-0 bottom-0 w-0.5 bg-blue-100 dark:bg-blue-900 hidden md:block"></div>

          <div className="space-y-10 sm:space-y-16 md:space-y-24">
            {workflowSteps.map((step: WorkflowStep, index: number) => (
              <FadeIn key={index} delay={index * 0.2}>
                <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-12 items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-500 text-base sm:text-lg md:text-xl font-semibold z-10 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2 md:mb-3">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-500 mr-2 md:mr-3">
                        {step.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
