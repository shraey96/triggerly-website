"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import StarryBackground from "@/components/particles/StarryBackground";
import {
  ArrowRight,
  Phone,
  PhoneOff,
  CalendarCheck,
  BrainCircuit,
  Clock,
  Users,
  CheckCircle2,
  Building2,
  Stethoscope,
  Scale,
  Scissors,
  Home,
  Car,
  Headphones,
  BarChart3,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const painPoints = [
  {
    icon: PhoneOff,
    title: "Missed calls = missed revenue",
    body: "62% of calls to small businesses go unanswered. Every missed call is a potential customer who calls your competitor instead.",
  },
  {
    icon: Clock,
    title: "After-hours means no-hours",
    body: "40% of callers won't leave a voicemail. If you're closed, those leads vanish. Your competitors with 24/7 coverage get the business.",
  },
  {
    icon: Users,
    title: "Staff stuck on the phone",
    body: "Your skilled team spends hours answering repetitive questions about hours, pricing, and availability instead of doing the work that matters.",
  },
  {
    icon: BarChart3,
    title: "No visibility into call data",
    body: "You don't know how many calls you're missing, what people are asking, or which marketing channels are driving calls. You're flying blind.",
  },
];

const features = [
  {
    icon: Phone,
    title: "Answers every call, 24/7",
    body: "Your AI voice agent picks up instantly, no hold music, no voicemail, no missed opportunities. Day, night, weekends, holidays.",
  },
  {
    icon: CalendarCheck,
    title: "Books appointments in real time",
    body: "Checks your live calendar availability and books appointments directly. No back-and-forth, no double-bookings.",
  },
  {
    icon: BrainCircuit,
    title: "Handles FAQs intelligently",
    body: "Answers questions about your hours, services, pricing, location, and policies using natural conversation, trained on your business.",
  },
  {
    icon: Headphones,
    title: "Qualifies and routes leads",
    body: "Asks smart questions to understand caller intent, scores leads in real time, and transfers urgent or high-value calls to your team.",
  },
];

const industries = [
  { icon: Stethoscope, name: "Medical & Dental Clinics" },
  { icon: Scale, name: "Law Firms" },
  { icon: Scissors, name: "Salons & Spas" },
  { icon: Home, name: "Real Estate" },
  { icon: Car, name: "Auto Services" },
  { icon: Building2, name: "Accounting & Finance" },
];

const howItWorks = [
  {
    step: "01",
    title: "We learn your business",
    body: "We map your services, FAQs, scheduling rules, and call routing preferences. The AI is trained specifically on how your business operates.",
  },
  {
    step: "02",
    title: "We build your voice agent",
    body: "Your custom AI receptionist is built and tested to handle real-world calls, greeting callers, answering questions, and booking appointments naturally.",
  },
  {
    step: "03",
    title: "We connect your systems",
    body: "The AI integrates with your calendar, CRM, and notification tools. Calls, transcripts, and bookings flow into your existing workflow automatically.",
  },
  {
    step: "04",
    title: "You go live and scale",
    body: "Your AI voice agent goes live on your business phone line. We monitor, optimize, and refine it continuously based on real call data.",
  },
];

const stats = [
  { value: "24/7", label: "Call coverage" },
  { value: "<3s", label: "Average answer time" },
  { value: "90%", label: "Calls handled without staff" },
  { value: "0", label: "Missed calls" },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function AIReceptionistPage() {
  return (
    <div className="w-full">
      {/* ── HERO ── */}
      <section className="w-full min-h-[85vh] flex items-center justify-center relative overflow-hidden bg-transparent px-4 py-20 md:py-0">
        <StarryBackground />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <FadeIn>
            <span className="inline-block text-xs md:text-sm font-semibold tracking-widest uppercase text-blue-500 mb-4 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 px-4 py-1.5 rounded-full">
              AI Receptionist &amp; Voice AI Agents
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 md:mb-6 tracking-tight leading-[1.1]">
              Never miss a call.{" "}
              <span className="text-blue-500">Never lose a lead.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 md:mb-12 max-w-2xl mx-auto">
              Your AI receptionist answers every call 24/7, books appointments,
              answers questions, and qualifies leads while your team focuses on
              the work that matters.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white border-0 h-12 md:h-14 px-7 md:px-8 rounded-full w-full sm:w-auto text-base"
                asChild
              >
                <Link
                  href="https://cal.com/shraey-chikker-ad5dyk/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Your AI Receptionist{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 h-12 md:h-14 px-7 md:px-8 rounded-full w-full sm:w-auto text-base"
                asChild
              >
                <a href="#how-it-works">See How It Works</a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="w-full py-10 md:py-14 px-4 bg-blue-500">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {stats.map((s) => (
              <FadeIn key={s.label}>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {s.value}
                  </p>
                  <p className="text-sm md:text-base text-blue-100">
                    {s.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAIN POINTS ── */}
      <section className="w-full py-16 sm:py-20 md:py-28 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
              The cost of missed calls
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 text-center mb-12 md:mb-16 max-w-2xl mx-auto">
              Every unanswered call is revenue walking out the door. Here's
              what's happening when no one picks up.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {painPoints.map((p) => {
              const Icon = p.icon;
              return (
                <StaggerItem key={p.title}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 h-full hover:shadow-md transition-shadow duration-200">
                    <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/30 flex items-center justify-center text-red-500 mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {p.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="w-full py-16 sm:py-20 md:py-28 px-4 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
              What your AI receptionist does
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 text-center mb-12 md:mb-16 max-w-2xl mx-auto">
              A virtual front desk that sounds natural, works around the clock,
              and never takes a sick day.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <StaggerItem key={f.title}>
                  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 md:p-8 h-full hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg transition-all duration-200">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 flex items-center justify-center text-blue-500 mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {f.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      {f.body}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section
        id="how-it-works"
        className="w-full py-16 sm:py-20 md:py-28 px-4 bg-gray-50 dark:bg-gray-900"
      >
        <div className="container mx-auto max-w-4xl">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
              How we set it up
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 text-center mb-12 md:mb-16 max-w-2xl mx-auto">
              From first call to fully live in as little as 2 weeks. Here's
              the process.
            </p>
          </FadeIn>

          <div className="space-y-6">
            {howItWorks.map((step, index) => (
              <FadeIn key={step.step} delay={index * 0.1}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 flex gap-5 md:gap-6 items-start">
                  <span className="text-3xl md:text-4xl font-bold text-blue-500/20 leading-none flex-shrink-0">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="w-full py-16 sm:py-20 md:py-28 px-4 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
              Built for businesses that rely on phone calls
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 text-center mb-12 md:mb-16 max-w-2xl mx-auto">
              If your business gets phone calls, an AI voice agent can help.
              Here are the industries we work with most.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-5">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <StaggerItem key={ind.name}>
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 md:p-6 text-center hover:border-blue-300 dark:hover:border-blue-700 transition-colors duration-200">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 flex items-center justify-center text-blue-500 mb-3 mx-auto">
                      <Icon className="w-5 h-5" />
                    </div>
                    <p className="text-sm md:text-base font-semibold text-gray-900 dark:text-gray-100">
                      {ind.name}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ── USE CASES LINK ── */}
      <section className="w-full py-12 md:py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <FadeIn>
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                  See detailed voice AI use cases
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                  Explore step-by-step breakdowns of AI receptionist and phone
                  agent automations.
                </p>
              </div>
              <Button
                className="bg-blue-500 hover:bg-blue-600 text-white border-0 rounded-full px-6 flex-shrink-0"
                asChild
              >
                <Link href="/use-cases">
                  View Use Cases <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="w-full py-16 sm:py-20 md:py-28 px-4 bg-blue-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto max-w-3xl relative z-10 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
              Ready to stop missing calls?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-10 md:mb-12 max-w-xl mx-auto">
              Book a free 15-minute call. We'll show you exactly how an AI
              receptionist would work for your business. No pressure, no jargon.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 border-0 h-12 md:h-14 px-8 rounded-full text-base font-semibold shadow-lg"
                asChild
              >
                <Link
                  href="https://cal.com/shraey-chikker-ad5dyk/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Free Call <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white/10 hover:text-white h-12 md:h-14 px-8 rounded-full text-base"
                asChild
              >
                <Link href="/#contact">Send a Message</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
