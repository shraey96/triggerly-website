import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TriggerlyAI - AI Automation Agency",
  description:
    "We build quiet, powerful workflow automations for small teams, consultants, and businesses using tools like GPT, Make.com, and Airtable.",
  generator: "v0.dev",
  icons: {
    icon: [
      {
        url: "/images/triggerly-logo.png",
        type: "image/png",
      },
    ],
    shortcut: "/images/triggerly-logo.png",
    apple: "/images/triggerly-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
