"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { QuoteIcon } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "We saved 4+ hours per week after just 1 build.",
    author: "Alex Johnson",
    role: "Real Estate Agent",
  },
  {
    quote: "I reply to leads instantly — even when I'm offline.",
    author: "Sarah Miller",
    role: "Business Coach",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full py-24 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-5xl">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            What Our Clients Say
          </h2>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 h-full">
                <QuoteIcon className="h-10 w-10 text-blue-100 dark:text-blue-900/30 mb-6" />
                <p className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200 mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-500">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900 dark:text-gray-100">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
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
