"use client";

import { useTheme } from "next-themes";
import { FadeIn } from "@/components/animations";
import { apps } from "@/constants/tools";

export default function IntegrationsSection() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <section className="w-full py-14 bg-gradient-to-b from-background to-gray-50 dark:to-gray-900/20">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            We build automations for your{" "}
            <span className="text-blue-500">favorite tools</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            We build custom workflows that integrate with the platforms and
            tools your business already uses.
          </p>

          <div className="relative overflow-hidden max-w-6xl mx-auto">
            {/* Gradient fade effect on the edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent"></div>

            {/* CSS-based marquee */}
            <div className="marquee-container">
              <div className="marquee">
                {/* First set of logos */}
                {apps.map((app, index) => (
                  <div
                    key={`app-${index}`}
                    className="flex flex-col items-center mx-3"
                  >
                    <div
                      className={`w-14 h-14 rounded-lg flex items-center justify-center mb-2 ${
                        isDarkMode ? "bg-gray-800" : "bg-white"
                      } shadow-sm`}
                    >
                      <img
                        src={app.icon}
                        alt={app.name}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-300">
                      {app.name}
                    </span>
                  </div>
                ))}

                {/* Duplicate set for continuous scrolling */}
                {apps.map((app, index) => (
                  <div
                    key={`app-dup-${index}`}
                    className="flex flex-col items-center mx-3"
                  >
                    <div
                      className={`w-14 h-14 rounded-lg flex items-center justify-center mb-2 ${
                        isDarkMode ? "bg-gray-800" : "bg-white"
                      } shadow-sm`}
                    >
                      <img
                        src={app.icon}
                        alt={app.name}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-300">
                      {app.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
