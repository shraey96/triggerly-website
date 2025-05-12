"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CaseStudyCard from "@/components/case-study-card";
import { caseStudies } from "@/constants/case-studies";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import Link from "next/link";

export default function CaseStudiesSection() {
  return (
    <section className="w-full py-24 px-4">
      <div className="container mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Real Automation Examples
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-20 max-w-2xl mx-auto text-xl">
            See how we've helped businesses save time and increase efficiency
            with custom AI automations.
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.slice(0, 3).map((study) => (
            <StaggerItem key={study.slug}>
              <CaseStudyCard caseStudy={study} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4}>
          <div className="text-center mt-16">
            <Button
              variant="outline"
              size="lg"
              className="text-lg h-14 px-8"
              asChild
            >
              <Link href="/case-studies">
                View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
