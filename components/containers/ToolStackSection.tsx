"use client";

import ToolLogos from "@/components/tool-logos";
import { FadeIn } from "@/components/animations";

export default function ToolStackSection() {
  return (
    <FadeIn>
      <section className="w-full py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="container px-4 mx-auto">
          <h2 className="text-center text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider mb-10">
            Powered by tools you already use
          </h2>
          <ToolLogos />
        </div>
      </section>
    </FadeIn>
  );
}
