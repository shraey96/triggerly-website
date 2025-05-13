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
    problem: "Visitors dropped off after filling the contact form.",
    solution:
      "We added an AI assistant that replied instantly and synced leads to the CRM.",
    result: "+35% faster lead response",
    icon: <Zap className="h-5 w-5 text-blue-500" />,
    tools: ["OpenAI", "Make.com", "Slack"],
  },
  {
    slug: "auto-onboarding-emails",
    problem: "Every welcome email had to be sent manually.",
    solution:
      "We set up a smart onboarding flow with GPT-written emails and chatbot replies.",
    result: "4+ hours/week saved",
    icon: <Clock className="h-5 w-5 text-blue-500" />,
    tools: ["Gmail", "OpenAI", "Zapier"],
  },
  {
    slug: "auto-proposal-generation",
    problem: "Sales teams wasted time drafting proposals from scratch.",
    solution:
      "Built a system to turn form inputs into GPT-written PDF proposals instantly.",
    result: "70% less time spent per proposal",
    icon: <BarChart className="h-5 w-5 text-blue-500" />,
    tools: ["Airtable", "OpenAI", "Make.com"],
  },
  {
    slug: "booking-assistant",
    problem: "Clients missed meetings or forgot to show up.",
    solution:
      "We connected WhatsApp to Google Calendar and automated reminders.",
    result: "95% show-up rate improvement",
    icon: <Calendar className="h-5 w-5 text-blue-500" />,
    tools: ["Google Calendar", "Twilio", "OpenAI"],
  },
  {
    slug: "whatsapp-support-bot",
    problem: "Support agents were overwhelmed by repeat queries.",
    solution:
      "Trained a GPT chatbot to answer common WhatsApp questions in real time.",
    result: "60% drop in response time",
    icon: <MessageSquare className="h-5 w-5 text-blue-500" />,
    tools: ["WhatsApp API", "OpenAI", "Airtable"],
  },
  {
    slug: "cart-recovery-automation",
    problem: "Abandoned checkouts weren't being followed up.",
    solution:
      "We built a WhatsApp automation to remind users after cart abandonment.",
    result: "18% boost in cart recovery rate",
    icon: <ShoppingCart className="h-5 w-5 text-blue-500" />,
    tools: ["Shopify", "Make.com", "WhatsApp"],
  },
];
