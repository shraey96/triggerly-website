import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Website Design & Solutions for Businesses – TriggerlyAI",
  description:
    "Professional website design for businesses. Domain, hosting, SEO and support included. Get found online today.",
  keywords: [
    "website design for business",
    "business website",
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
    title: "Website Design & Solutions for Businesses – TriggerlyAI",
    description:
      "Professional website design for businesses. Domain, hosting, SEO and 1 year of updates included.",
    url: "https://triggerlyai.io/website-solutions",
    siteName: "TriggerlyAI",
    images: [
      {
        url: "/images/og-website-desktop.png",
        width: 1200,
        height: 630,
        alt: "TriggerlyAI - Website Design & Solutions for Businesses",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design & Solutions for Businesses – TriggerlyAI",
    description:
      "Professional website design for businesses. Domain, hosting, SEO and support included.",
    images: ["/images/og-website-desktop.png"],
  },
};

export default function WebsiteSolutionsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
