"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import StarryBackground from "@/components/particles/StarryBackground";
import {
  ArrowRight,
  Search,
  ShieldCheck,
  Clock,
  Trophy,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// ─── DATA ────────────────────────────────────────────────────────────────────

const problems = [
  {
    icon: "🌙",
    title: "You're invisible after 6 PM",
    body: "When someone searches for your service at 10 PM on a Sunday, you don't exist. No website means no visibility. That customer goes to whoever shows up on Google.",
  },
  {
    icon: "🤷",
    title: "People don't trust what they can't Google",
    body: "75% of consumers judge a business's credibility by its website. If they can't find you online, most won't bother calling. They'll just move on.",
  },
  {
    icon: "🏆",
    title: "Your competitors are already ahead",
    body: "The business down the street with a website is getting the calls, the bookings, and the enquiries, simply because they showed up and you didn't.",
  },
  {
    icon: "📵",
    title: "No place to show your work",
    body: "Photos, services, location, reviews: your customers want to see all of it before they contact you. Social media alone doesn't cut it anymore.",
  },
];

const benefits = [
  {
    stat: "46%",
    title: "Show up on Google",
    icon: Search,
    body: "46% of all Google searches have local intent. A website gets you into Maps results and local search packs. Without one, customers searching for what you offer will never find you.",
  },
  {
    stat: "75%",
    title: "Instant credibility",
    icon: ShieldCheck,
    body: "75% of consumers judge a business's credibility from its website. A professional site signals you're established and serious, before a customer even picks up the phone.",
  },
  {
    stat: "24/7",
    title: "Always open, always working",
    icon: Clock,
    body: "60% of consumers research businesses outside of business hours. Your website takes enquiries while you sleep, on weekends, and on holidays, without you doing a thing.",
  },
  {
    stat: "70%",
    title: "Most competitors don't have one",
    icon: Trophy,
    body: "Over 70% of small businesses worldwide still don't have a functional website. Getting one immediately puts you ahead of the majority of businesses in your category.",
  },
];

const included = [
  "Domain name",
  "Hosting for 1 year",
  "Mobile-friendly responsive design",
  "Google Maps integration",
  "SSL security certificate",
  "1 year of free content updates",
  "Google Search submission",
  "Basic SEO setup (meta tags, local keywords)",
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function WebsiteSolutionsPage() {
  return (
    <div className="w-full">
      {/* ── HERO ── */}
      <section className="w-full min-h-[85vh] flex items-center justify-center relative overflow-hidden bg-transparent px-4 py-20 md:py-0">
        <StarryBackground />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <FadeIn>
            <span className="inline-block text-xs md:text-sm font-semibold tracking-widest uppercase text-blue-500 mb-4 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 px-4 py-1.5 rounded-full">
              Web Design &amp; Solutions for Businesses
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 md:mb-6 tracking-tight leading-[1.1]">
              Get your business{" "}
              <span className="text-blue-500">found online</span>, before your
              competitor does
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 md:mb-12 max-w-2xl mx-auto">
              Every day without a website is customers lost, calls missed, and
              revenue left on the table. We build it for you, simply, quickly,
              and without the technical headache.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white border-0 h-12 md:h-14 px-7 md:px-8 rounded-full w-full sm:w-auto text-base"
                asChild
              >
                <a href="#contact">
                  Get My Website <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 h-12 md:h-14 px-7 md:px-8 rounded-full w-full sm:w-auto text-base"
                asChild
              >
                <a href="#benefits">See Why It Matters</a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="w-full py-16 sm:py-20 md:py-28 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
              What you're losing without a website
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 text-center mb-12 md:mb-16 max-w-2xl mx-auto">
              It's not just about looking professional. It's about how many
              customers never even get to know you exist.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {problems.map((p) => (
              <StaggerItem key={p.title}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 h-full hover:shadow-md transition-shadow duration-200">
                  <span className="text-3xl mb-4 block">{p.icon}</span>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section
        id="benefits"
        className="w-full py-16 sm:py-20 md:py-28 px-4 bg-white dark:bg-gray-950"
      >
        <div className="container mx-auto max-w-6xl">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
              The numbers speak for themselves
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 text-center mb-12 md:mb-16 max-w-2xl mx-auto">
              Real data on what a website does for a business. Not promises,
              just facts.
            </p>
          </FadeIn>

          <StaggerContainer
            className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
            staggerChildren={0.07}
          >
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <StaggerItem key={b.title}>
                  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 h-full flex flex-col hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg transition-all duration-200">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 flex items-center justify-center text-blue-500 mb-4">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-4xl md:text-5xl font-bold text-blue-500 mb-2 leading-none">
                      {b.stat}
                    </span>
                    <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-3">
                      {b.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                      {b.body}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ── INCLUDED ── */}
      <section className="w-full py-16 sm:py-20 md:py-28 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
              Everything included, nothing hidden
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 text-center mb-12 md:mb-16 max-w-xl mx-auto">
              One package, fully handled. Here's exactly what every client gets.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 p-8 md:p-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                {included.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 md:mt-10 pt-7 border-t border-gray-200 dark:border-gray-700 text-center">
                <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
                  Have specific requirements? We'll customise the package to fit
                  your business.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="w-full py-16 sm:py-20 md:py-28 px-4 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
              Frequently asked questions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 text-center mb-12 md:mb-16 max-w-2xl mx-auto">
              Common questions about our web design services.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Accordion type="single" collapsible className="w-full space-y-3">
              <AccordionItem
                value="cost"
                className="bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 px-6"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:no-underline">
                  How much does a business website cost?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  Our website packages start at an affordable flat rate with no
                  hidden fees. Every package includes domain registration, hosting
                  for 1 year, SSL certificate, mobile-responsive design, basic SEO
                  setup, and 1 year of free content updates. Contact us for a
                  custom quote based on your needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="timeline"
                className="bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 px-6"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:no-underline">
                  How long does it take to build a website?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  Most websites are designed, built, and launched
                  within 1-3 weeks. The timeline depends on how quickly you
                  provide your content (text, images, branding) and the complexity
                  of the design. We keep you updated at every step.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="seo"
                className="bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 px-6"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:no-underline">
                  Will my website show up on Google?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  Yes. Every website we build includes basic SEO setup including meta
                  tags, page titles, local keywords, Google Search submission, and
                  a mobile-friendly design (which Google prioritizes). We also
                  integrate Google Maps so customers can find your physical
                  location easily.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="updates"
                className="bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 px-6"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:no-underline">
                  Can I update the website myself after launch?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  You won't need to. We include 1 full year of free content
                  updates. Just tell us what you want changed and we'll handle
                  it. No login portals, no confusing dashboards. After the first
                  year, you can renew the update plan or we'll hand over full
                  access.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="need"
                className="bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 px-6"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:no-underline">
                  Do I really need a website if I have social media?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  Social media is great for engagement, but it's not a substitute
                  for a website. You don't own your social profiles. Algorithms
                  change, accounts get restricted. A website is your home base
                  that you fully control, and it's the only way to appear in
                  Google search results when potential customers are actively
                  looking for your services.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        id="contact"
        className="w-full py-16 sm:py-20 md:py-28 px-4 bg-blue-500 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto max-w-3xl relative z-10 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
              Ready to get your business online?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-10 md:mb-12 max-w-xl mx-auto">
              Drop us a message and we'll walk you through everything. No
              pressure, no jargon. Just a quick conversation about your
              business.
            </p>

            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 border-0 h-12 md:h-14 px-8 rounded-full text-base font-semibold shadow-lg"
              asChild
            >
              <Link href="/#contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
