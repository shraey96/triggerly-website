"use client";

import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare } from "lucide-react";
import { FadeIn } from "@/components/animations";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function FinalCTASection() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [tallyFormUrl, setTallyFormUrl] = useState("");
  // Add a key that changes when theme changes to force iframe re-render
  const [iframeKey, setIframeKey] = useState(0);

  // Wait for component to mount to access theme
  useEffect(() => {
    setMounted(true);
  }, []);

  // Update Tally form URL when theme changes
  useEffect(() => {
    if (mounted) {
      const isDarkMode = theme === "dark" || resolvedTheme === "dark";
      setTallyFormUrl(
        `https://tally.so/embed/mep1jo?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1${
          isDarkMode ? "&theme=dark" : ""
        }`
      );
      // Increment the key to force a complete re-render of the iframe
      setIframeKey((prevKey) => prevKey + 1);

      // Force reload of Tally embed after a short delay to ensure DOM is updated
      setTimeout(() => {
        // @ts-ignore
        if (typeof Tally !== "undefined") {
          // @ts-ignore
          Tally.loadEmbeds();
        }
      }, 100);
    }
  }, [theme, resolvedTheme, mounted]);

  // Effect to load Tally embed script
  useEffect(() => {
    if (!mounted) return;

    const loadTallyScript = () => {
      const script = document.createElement("script");
      script.src = "https://tally.so/widgets/embed.js";
      script.async = true;
      script.onload = () => {
        // @ts-ignore
        if (typeof Tally !== "undefined") {
          // @ts-ignore
          Tally.loadEmbeds();
        } else {
          document
            .querySelectorAll("iframe[data-tally-src]:not([src])")
            .forEach((e) => {
              // @ts-ignore
              e.src = e.dataset.tallySrc;
            });
        }
      };
      document.body.appendChild(script);
    };

    // Check if the script is already loaded
    if (
      !document.querySelector('script[src="https://tally.so/widgets/embed.js"]')
    ) {
      loadTallyScript();
    } else {
      // If the script is already loaded, just load the embeds
      // @ts-ignore
      if (typeof Tally !== "undefined") {
        // @ts-ignore
        Tally.loadEmbeds();
      } else {
        document
          .querySelectorAll("iframe[data-tally-src]:not([src])")
          .forEach((e) => {
            // @ts-ignore
            e.src = e.dataset.tallySrc;
          });
      }
    }
  }, [mounted]);

  return (
    <section
      id="contact"
      className="w-full py-24 px-4 bg-white dark:bg-gray-900/50"
    >
      <div className="container mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Ready to get your time back with AI workflows?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-10 max-w-2xl mx-auto">
            Book a free call to discuss how we can help your business run more
            efficiently with automated systems.
          </p>
        </FadeIn>

        <div className="max-w-6xl mx-auto mt-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Book a Call */}
            <FadeIn>
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Book a Free Call With Us
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Schedule a free, no-obligation discovery call with our team.
                  We'll discuss your needs, suggest workflows, and show you
                  examples of how we can help.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-700 dark:text-gray-300">
                      30-minute personalized consultation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-700 dark:text-gray-300">
                      Live demo of similar implementations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-700 dark:text-gray-300">
                      Custom automation strategy for your business
                    </span>
                  </li>
                </ul>

                <div className="mt-auto">
                  <Button
                    className="w-full bg-blue-500 hover:bg-blue-600 h-12 rounded-lg text-white"
                    asChild
                  >
                    <Link
                      href="https://calendly.com/triggerlyai"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Schedule Your Free Call
                    </Link>
                  </Button>
                </div>
              </div>
            </FadeIn>

            {/* Right Column - Tally Form */}
            <FadeIn>
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Get in Touch
                  </h3>
                </div>

                <div className="h-full flex items-center justify-center">
                  {/* Tally form embed */}
                  {mounted && (
                    <iframe
                      key={iframeKey}
                      data-tally-src={tallyFormUrl}
                      loading="lazy"
                      width="100%"
                      height="447"
                      frameBorder="0"
                      marginHeight={0}
                      marginWidth={0}
                      title="TriggerlyAI Website"
                      className="rounded-lg"
                    ></iframe>
                  )}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
