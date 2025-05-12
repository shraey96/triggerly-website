"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { Badge } from "@/components/ui/badge";
import { automationWins } from "@/constants/case-studies";

export default function UseCaseCardsGrid() {
  return (
    <section className="w-full py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Automation Wins
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Explore examples of high-leverage automations built using AI
            workflows — with clear business outcomes.
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-12">
          {automationWins.map((win, index) => (
            <StaggerItem key={index}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="p-5">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-1 text-gray-500 dark:text-gray-400">
                        {win.icon}
                        <span className="text-sm font-medium">Problem</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {win.problem}
                      </p>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                        Solution
                      </div>
                      <p className="text-lg font-bold text-gray-900 dark:text-white">
                        {win.solution}
                      </p>
                    </div>

                    <div className="mt-auto">
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        Result
                      </div>
                      <Badge className="bg-green-100 hover:bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 text-sm py-1 px-3 font-medium">
                        {win.result}
                      </Badge>

                      {win.tools && (
                        <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
                          <div className="flex flex-wrap gap-2">
                            {win.tools.map((tool, i) => (
                              <span
                                key={i}
                                className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="text-center">
          <FadeIn>
            <Link
              href="#contact"
              className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium"
            >
              Discuss your automation needs{" "}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
