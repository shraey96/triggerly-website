import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SchemaMarkup from "@/lib/schema";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TriggerlyAI - AI Automation Agency for Business Growth",
  description:
    "TriggerlyAI helps businesses automate workflows with AI solutions. Save time, boost conversions, and scale your business with custom automations for lead generation, customer service, and more.",
  generator: "Next.js",
  applicationName: "TriggerlyAI",
  referrer: "origin-when-cross-origin",
  keywords: [
    "AI automation",
    "workflow automation",
    "business automation",
    "AI workflows",
    "automation agency",
    "custom AI solutions",
    "GPT integration",
    "Make.com automation",
    "Airtable automation",
    "lead generation automation",
    "conversion optimization",
    "AI business tools",
    "business efficiency",
  ],
  authors: [{ name: "TriggerlyAI Team" }],
  creator: "TriggerlyAI",
  publisher: "TriggerlyAI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://triggerlyai.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TriggerlyAI - Custom AI Automation Solutions for Business",
    description:
      "Boost efficiency and conversions with our custom AI workflow automations. Built for consultants, small teams, and growing businesses.",
    url: "https://triggerlyai.io",
    siteName: "TriggerlyAI",
    images: [
      {
        url: "/images/og-desktop.png",
        width: 1200,
        height: 630,
        alt: "TriggerlyAI - AI Automation Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TriggerlyAI - AI Automation Solutions",
    description:
      "Custom AI workflows to save time, boost conversions, and scale your business efficiently.",
    images: ["/images/og-desktop.png"],
    creator: "@triggerlyai", // Update with your actual Twitter handle
  },
  icons: {
    icon: [
      {
        url: "/images/triggerly-logo.png",
        type: "image/png",
      },
      {
        url: "/images/triggerly-favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    shortcut: "/images/triggerly-logo.png",
    apple: [
      { url: "/images/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/images/safari-pinned-tab.svg",
        color: "#0095ff",
      },
    ],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://triggerlyai.io" />
        <SchemaMarkup />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
