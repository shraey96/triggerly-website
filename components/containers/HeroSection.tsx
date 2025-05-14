"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations";
import Link from "next/link";
import StarryBackground from "@/components/particles/StarryBackground";
import { useTheme } from "next-themes";

export default function HeroSection() {
  const { theme } = useTheme();

  return (
    <section className="w-full min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-transparent px-4 py-12 md:py-0">
      {/* Starry background effect */}
      <StarryBackground />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center">
          <FadeIn>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tight">
              Your <span className="text-blue-500">AI-powered path</span> to a
              thriving business
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto">
              We build powerful AI workflows to save your time, boost
              conversions, and scale your business — without extra headcount.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white border-0 h-12 md:h-14 px-6 md:px-8 rounded-full w-full sm:w-auto text-sm md:text-base"
                asChild
              >
                <Link href="/contact">
                  Book a Free Call{" "}
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 h-12 md:h-14 px-6 md:px-8 rounded-full w-full sm:w-auto mt-3 sm:mt-0 text-sm md:text-base"
                asChild
              >
                <Link href="#services">Explore Use Cases</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
