import { ReactNode } from "react";
import {
  Zap,
  Clock,
  BarChart,
  MessageSquare,
  Calendar,
  ShoppingCart,
} from "lucide-react";

export interface UseCase {
  slug: string;
  title: string;
  description: string;
  result: string;
  icon: string;
  tools: string[];
  industries?: string[];
}

export interface UseCaseCategory {
  category: string;
  description: string;
  cases: UseCase[];
}

export const useCases: UseCaseCategory[] = [
  {
    category: "Lead Management",
    description:
      "Capture, qualify, and follow up with leads faster using AI-powered workflows.",
    cases: [
      {
        slug: "website-lead-response",
        title: "Respond to Website Inquiries Instantly",
        description:
          "Never miss a lead again. Auto-respond to form submissions and sync to your CRM.",
        result: "+35% faster lead response",
        tools: ["OpenAI", "Make.com", "Slack"],
        icon: "Zap",
        industries: ["Real Estate", "Coaching"],
      },
      {
        slug: "calendar-reminders-real-estate",
        title: "Auto-Remind Clients of Property Showings",
        description:
          "Send personalized WhatsApp reminders for booked showings or meetings.",
        result: "95% show-up rate improvement",
        tools: ["Google Calendar", "Twilio", "OpenAI"],
        icon: "Calendar",
        industries: ["Real Estate"],
      },
    ],
  },
  {
    category: "Sales & Retention",
    description:
      "Boost conversions with smart reminders, follow-ups, and chatbot responses.",
    cases: [
      {
        slug: "cart-recovery-automation",
        title: "Recover Abandoned Carts with WhatsApp",
        description:
          "Send timed cart reminders on WhatsApp with product info and urgency.",
        result: "18% boost in cart recovery rate",
        tools: ["Shopify", "Make.com", "WhatsApp"],
        icon: "ShoppingCart",
        industries: ["E-commerce"],
      },
      {
        slug: "support-chatbot-ecom",
        title: "Answer Common Questions with AI",
        description:
          "Train a WhatsApp chatbot to handle product queries and order status.",
        result: "60% drop in support response time",
        tools: ["WhatsApp API", "OpenAI", "Airtable"],
        icon: "MessageSquare",
        industries: ["E-commerce"],
      },
    ],
  },
  {
    category: "Client Onboarding",
    description:
      "Automate onboarding flows, client communication, and proposal generation.",
    cases: [
      {
        slug: "auto-onboarding-emails",
        title: "Automate Welcome Emails for Clients",
        description:
          "Use GPT to send onboarding emails and guide clients through your process.",
        result: "4+ hours/week saved",
        tools: ["Gmail", "OpenAI", "Zapier"],
        icon: "Clock",
        industries: ["Coaching"],
      },
      {
        slug: "auto-proposal-generation",
        title: "Instant Proposal Generation",
        description:
          "Turn form inputs into branded, GPT-written PDF proposals automatically.",
        result: "70% less time spent per proposal",
        tools: ["Airtable", "OpenAI", "Make.com"],
        icon: "BarChart",
        industries: ["Coaching"],
      },
    ],
  },
];

// Helper function to get all use cases as a flat array
export const getAllUseCases = (): UseCase[] => {
  return useCases.flatMap((category) => category.cases);
};

// Helper function to get a specific use case by slug
export const getUseCaseBySlug = (slug: string): UseCase | undefined => {
  return getAllUseCases().find((useCase) => useCase.slug === slug);
};
