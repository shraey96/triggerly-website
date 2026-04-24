import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title:
    "AI Receptionist & Voice AI Agents for Business | TriggerlyAI",
  description:
    "Never miss a call again. Our AI receptionist answers calls 24/7, books appointments, qualifies leads, and handles FAQs so your team can focus on what matters. Custom voice AI agents for clinics, law firms, salons, and more.",
  keywords: [
    "ai receptionist",
    "ai voice receptionist",
    "ai answering service",
    "voice ai agent",
    "ai phone agent",
    "ai virtual receptionist",
    "ai receptionist for small business",
    "ai call agent",
    "automated phone answering",
    "ai front desk",
    "voice ai for business",
    "ai receptionist for dentist",
    "ai receptionist for law firm",
  ],
  alternates: {
    canonical: "https://triggerlyai.io/ai-receptionist",
  },
  openGraph: {
    title: "AI Receptionist & Voice AI Agents | TriggerlyAI",
    description:
      "Never miss a call again. Our AI receptionist answers calls 24/7, books appointments, qualifies leads, and handles FAQs.",
    url: "https://triggerlyai.io/ai-receptionist",
    siteName: "TriggerlyAI",
    images: [
      {
        url: "/images/og-desktop.png",
        width: 1200,
        height: 630,
        alt: "TriggerlyAI - AI Receptionist & Voice AI Agents",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Receptionist & Voice AI Agents | TriggerlyAI",
    description:
      "Never miss a call again. AI-powered phone answering, appointment booking, and lead qualification for your business.",
    images: ["/images/og-desktop.png"],
  },
};

export default function AIReceptionistLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
