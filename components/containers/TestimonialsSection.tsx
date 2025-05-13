"use client";

import React from "react";
import { Quote } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { Badge } from "@/components/ui/badge";
import { testimonials } from "@/constants/testimonials";

// Define types locally to fix type issues
interface Testimonial {
  name: string;
  title: string;
  automation: string;
  quote: string;
}

// Define badges locally
const automationTypeBadges: Record<string, string> = {
  "Lead Follow-Up Bot": "Lead Gen",
  "Cart Recovery Automation": "Ecom",
  "Proposal Generation System": "Consulting",
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export default function TestimonialsSection() {
  return (
    <section className="w-full py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Testimonials
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            What our clients say about their AI automation experiences
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial: any, index: number) => (
            <StaggerItem key={index}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01]">
                <div className="p-5">
                  <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="mb-3">
                      <div className="flex items-center gap-2 mb-1 text-gray-500 dark:text-gray-400">
                        <Quote className="h-5 w-5 text-blue-500" />
                        <span className="text-sm font-medium">
                          {testimonial.title}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    {/* Result section */}
                    <div className="mt-auto pt-3 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center">
                        <div className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-500 font-medium text-xs mr-2">
                          {getInitials(testimonial.name)}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white text-sm">
                            {testimonial.name}
                          </div>
                          <div className="flex flex-wrap gap-2 mt-1">
                            <Badge className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-2 py-0.5">
                              {automationTypeBadges[testimonial.automation]}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
