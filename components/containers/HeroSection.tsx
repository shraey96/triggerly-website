"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations";
import Link from "next/link";
import StarryBackground from "@/components/particles/StarryBackground";
import { useTheme } from "next-themes";

export default function HeroSection() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-transparent">
      {/* Starry background effect */}
      <StarryBackground />

      <div className="max-w-5xl mx-auto relative z-10 px-4">
        <div className="text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Your <span className="text-blue-500">AI-powered path</span> to a
              thriving business
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              TriggerlyAI builds full-stack automation workflows — from strategy
              to execution — that let your business grow while doing less.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white border-0 h-14 px-8 rounded-full w-full sm:w-auto"
                asChild
              >
                <Link href="/contact">
                  Book a Free Call <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 h-14 px-8 rounded-full w-full sm:w-auto"
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
