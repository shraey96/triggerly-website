import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Website Design & Solutions for Small Businesses – TriggerlyAI",
  description:
    "Professional website design for small and medium businesses. Domain, hosting, SEO and support included. Get found online today.",
  keywords: [
    "website design for small business",
    "small business website",
    "professional website design",
    "SMB website solutions",
    "get business online",
    "affordable website design",
    "business website with SEO",
    "website with hosting included",
  ],
  alternates: {
    canonical: "/website-solutions",
  },
  openGraph: {
    title: "Website Design & Solutions for Small Businesses – TriggerlyAI",
    description:
      "Professional website design for small and medium businesses. Domain, hosting, SEO and 1 year of updates included.",
    url: "https://triggerlyai.io/website-solutions",
    siteName: "TriggerlyAI",
    locale: "en_US",
    type: "website",
  },
};

export default function WebsiteSolutionsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
