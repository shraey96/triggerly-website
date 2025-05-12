import { ReactNode } from "react";
import {
  Zap,
  Clock,
  BarChart,
  MessageSquare,
  Calendar,
  ShoppingCart,
} from "lucide-react";

export interface CaseStudy {
  slug: string;
  title: string;
  excerpt: string;
  publishDate: string;
  readTime: string;
  category: string;
  coverImage: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  tools: string[];
}

export interface AutomationWin {
  slug: string;
  problem: string;
  solution: string;
  result: string;
  icon: ReactNode;
  tools?: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "real-estate-automation",
    title: "How AI Boosted a Real Estate Agency's Response Rate by 35%",
    excerpt:
      "Learn how a real estate team used automation to never miss a lead and increase their response rate dramatically.",
    publishDate: "2023-06-15",
    readTime: "5 min read",
    category: "Real Estate",
    coverImage: "/images/case-studies/real-estate.jpg",
    author: {
      name: "Sarah Johnson",
      avatar: "/images/avatars/sarah.jpg",
    },
    content:
      "A detailed case study about how a real estate team implemented automation...",
    tools: ["OpenAI", "Make.com", "Slack", "Zapier"],
  },
  {
    slug: "coaching-business-automation",
    title: "Business Coach Saves 15+ Hours Weekly with Automated Systems",
    excerpt:
      "See how a coaching business automated their client onboarding and follow-up processes.",
    publishDate: "2023-08-22",
    readTime: "4 min read",
    category: "Coaching",
    coverImage: "/images/case-studies/coaching.jpg",
    author: {
      name: "Michael Chen",
      avatar: "/images/avatars/michael.jpg",
    },
    content:
      "This case study explores how a coaching business implemented automation...",
    tools: ["OpenAI", "Calendly", "Airtable", "Make.com"],
  },
];

export const automationWins: AutomationWin[] = [
  {
    slug: "website-lead-response",
    problem: "Losing leads from website",
    solution: "Built AI bot + CRM sync",
    result: "+35% faster lead response",
    icon: <Zap className="h-5 w-5 text-blue-500" />,
    tools: ["OpenAI", "Make", "Slack"],
  },
  {
    slug: "auto-onboarding-emails",
    problem: "Manual welcome emails",
    solution: "Auto onboarding email & chatbot flow",
    result: "4 hours/week saved",
    icon: <Clock className="h-5 w-5 text-blue-500" />,
    tools: ["Gmail", "OpenAI", "Zapier"],
  },
  {
    slug: "auto-proposal-generation",
    problem: "Slow client proposals",
    solution: "Form → GPT → auto-generated PDF proposal",
    result: "70% less time spent",
    icon: <BarChart className="h-5 w-5 text-blue-500" />,
    tools: ["OpenAI", "Airtable", "Make"],
  },
  {
    slug: "booking-assistant",
    problem: "Missed sales appointments",
    solution: "Booking assistant synced with Google Calendar",
    result: "95% show-up rate improvement",
    icon: <Calendar className="h-5 w-5 text-blue-500" />,
    tools: ["OpenAI", "Calendar", "Twilio"],
  },
  {
    slug: "whatsapp-support-bot",
    problem: "Delayed customer replies",
    solution: "AI chatbot integrated with WhatsApp",
    result: "60% drop in support response time",
    icon: <MessageSquare className="h-5 w-5 text-blue-500" />,
    tools: ["OpenAI", "WhatsApp", "Airtable"],
  },
  {
    slug: "cart-recovery-automation",
    problem: "No follow-up on abandoned cart",
    solution: "WhatsApp automation for reminders",
    result: "18% boost in cart recovery rate",
    icon: <ShoppingCart className="h-5 w-5 text-blue-500" />,
    tools: ["WhatsApp", "Shopify", "Make"],
  },
];
