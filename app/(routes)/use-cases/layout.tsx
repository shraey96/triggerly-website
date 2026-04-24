import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "AI Automation Use Cases | TriggerlyAI",
  description:
    "Explore real-world AI automation examples for lead management, sales, client onboarding, and more. See how TriggerlyAI builds custom workflows that save time and boost conversions.",
  alternates: {
    canonical: "https://triggerlyai.io/use-cases",
  },
  openGraph: {
    title: "AI Automation Use Cases | TriggerlyAI",
    description:
      "Explore real-world AI automation examples for lead management, sales, client onboarding, and more.",
    url: "https://triggerlyai.io/use-cases",
  },
};

export default function UseCasesLayout({ children }: { children: ReactNode }) {
  return children;
}
