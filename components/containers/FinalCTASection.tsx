"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FadeIn, FloatingElement } from "@/components/animations";
import Link from "next/link";

export default function FinalCTASection() {
  return (
    <FadeIn>
      <section className="w-full py-24 px-4">
        <div className="container mx-auto max-w-4xl bg-blue-500 rounded-3xl p-12 md:p-16 text-white text-center">
          <FloatingElement
            className="absolute top-8 right-8 w-16 h-16 bg-white/10 rounded-full"
            floatRange={10}
          >
            <div />
          </FloatingElement>
          <FloatingElement
            className="absolute bottom-8 left-8 w-24 h-24 bg-white/10 rounded-full"
            floatRange={15}
            duration={5}
          >
            <div />
          </FloatingElement>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 relative z-10">
            Ready to get your time back with AI workflows?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl mx-auto relative z-10">
            Book a free call to discuss how we can help your business run more
            efficiently with automated systems.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg h-14 px-8 relative z-10 bg-white text-blue-600 hover:text-blue-700 hover:bg-gray-100 rounded-full"
            asChild
          >
            <Link href="/contact">
              Book Your Free Consult <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </FadeIn>
  );
}
