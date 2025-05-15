export interface UseCase {
  slug: string;
  title: string;
  problem: string;
  solution: string;
  result: string;
  icon: string;
  tools: string[];
  industries?: string[];
  details?: {
    overview: string;
    stepByStepFlow: string[];
    toolsUsed: string[];
  };
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
        problem:
          "Most teams respond too slowly to website leads — losing the chance to convert interested visitors.",
        solution:
          "Instantly reply to new inquiries with a helpful, personalized message — and make sure no lead slips through the cracks.",
        result: "35% faster lead response time",
        tools: ["OpenAI", "n8n", "Slack"],
        icon: "Zap",
        industries: [
          "Real Estate",
          "SaaS",
          "Consulting",
          "Marketing Agencies",
          "Local Services",
          "More",
        ],
        details: {
          overview:
            "A simple but powerful automation that responds to website form submissions instantly using OpenAI and n8n. It shortens lead response time from hours to under 3 minutes, increasing conversion rates and reducing lead drop-off.",
          stepByStepFlow: [
            "User submits a website form (e.g., via Tally or Webflow form)",
            "n8n watches the form submission trigger",
            "Data is parsed and sent to OpenAI to generate a natural-language reply",
            "The AI-generated reply is sent to the lead via email or Slack (if internal)",
            "Optional: Data is synced to CRM (e.g., HubSpot, Airtable, or Notion DB)",
            "Optional: Assigns follow-up tasks or reminders for the team",
          ],
          toolsUsed: [
            "OpenAI",
            "n8n",
            "Slack",
            "Tally (or any form tool)",
            "CRM (e.g., Notion, Airtable, or HubSpot)",
          ],
        },
      },
      {
        slug: "calendar-reminders-real-estate",
        title: "Auto-Remind Clients of Property Showings",
        problem:
          "Clients forget about scheduled property showings, wasting your time and lowering close rates.",
        solution:
          "Send personalized, timely WhatsApp reminders for every booked showing, improving attendance and professionalism.",
        result: "60% reduction in client no-show rate",
        tools: ["Google Calendar", "Make.com", "OpenAI"],
        icon: "Calendar",
        industries: [
          "Real Estate",
          "Consulting",
          "Local Services",
          "Marketing Agencies",
          "SaaS",
          "More",
        ],
        details: {
          overview:
            "This automation watches your Google Calendar for booked property showings and sends clients smart reminders via WhatsApp. It’s ideal for real estate agents and consultants looking to reduce no-shows and appear more organized.",
          stepByStepFlow: [
            "New event is created in Google Calendar",
            "Make.com triggers the automation",
            "Contact details are matched or pulled from CRM or intake form",
            "OpenAI crafts a friendly reminder with name, date, and address",
            "WhatsApp message is sent using Twilio or WhatsApp API",
            "Optional follow-up reminder 1 hour before",
          ],
          toolsUsed: ["Google Calendar", "Make.com", "OpenAI", "Twilio"],
        },
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
        problem:
          "Potential customers often abandon their carts without checking out, leading to lost sales.",
        solution:
          "Send time-based, personalized WhatsApp nudges with product details and urgency — and bring buyers back.",
        result: "18% increase in completed purchases from abandoned carts",
        tools: ["Shopify", "n8n", "WhatsApp"],
        icon: "ShoppingCart",
        industries: [
          "E-commerce",
          "SaaS",
          "Marketing Agencies",
          "Consulting",
          "More",
        ],
        details: {
          overview:
            "This flow targets users who abandon carts on your Shopify store. It sends automated WhatsApp messages with friendly reminders, product details, and urgency to help complete the sale.",
          stepByStepFlow: [
            "Shopify detects a cart abandoned after X mins",
            "n8n triggers the automation",
            "Cart info and user data are pulled",
            "OpenAI writes a custom message (e.g., “Still thinking about your order?”)",
            "Message sent via WhatsApp using Twilio or WhatsApp API",
            "Optional: add discount in 2nd follow-up if no conversion",
          ],
          toolsUsed: ["Shopify", "n8n", "WhatsApp", "OpenAI"],
        },
      },
      {
        slug: "support-chatbot-ecom",
        title: "Answer Common Questions with AI",
        problem:
          "Your support team is overwhelmed with repetitive questions that slow down response time.",
        solution:
          "Deploy a GPT-powered WhatsApp chatbot to instantly handle FAQs like order status and shipping policies.",
        result: "60% decrease in time-to-first-response for support tickets",
        tools: ["WhatsApp API", "OpenAI", "Airtable"],
        icon: "MessageSquare",
        industries: [
          "E-commerce",
          "SaaS",
          "Customer Support",
          "Marketing Agencies",
          "More",
        ],
        details: {
          overview:
            "An AI chatbot built into WhatsApp that handles common e-commerce questions like order status, return policy, delivery timelines — freeing up your support team and creating faster replies.",
          stepByStepFlow: [
            "User sends a question via WhatsApp",
            "Chatbot passes query to OpenAI",
            "Query is matched with known answers or returns a GPT-generated response",
            "Conversation is logged in Airtable",
            "Fallback to human if needed",
          ],
          toolsUsed: ["WhatsApp API", "OpenAI", "Airtable"],
        },
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
        problem:
          "Many service businesses manually send onboarding messages or forget to send them entirely — leading to client confusion or drop-off.",
        solution:
          "Send warm, AI-personalized welcome emails automatically as soon as a client signs up, books a call, or fills a form.",
        result: "4+ hours/week saved on manual email writing",
        tools: ["Gmail", "OpenAI", "n8n"],
        icon: "Clock",
        industries: ["Coaching", "Consulting", "Agencies", "SaaS", "More"],
        details: {
          overview:
            "This automation makes sure every new client gets a helpful, personalized welcome email within seconds — no manual drafting or sending required. Whether you're a coach, consultant, or agency, this eliminates forgetfulness and builds trust from day one.",
          stepByStepFlow: [
            "Detect when a new client signs up or books via Calendly, Notion form, or Stripe checkout",
            "Trigger automation in n8n",
            "Use OpenAI to generate a customized welcome email based on client name, package selected, or intake form",
            "Send the email via Gmail with your branding and signature",
            "Log the interaction in a CRM or Google Sheet (optional)",
            "Optionally schedule follow-ups or next steps automatically",
          ],
          toolsUsed: ["Gmail", "OpenAI", "n8n"],
        },
      },
      {
        slug: "auto-proposal-generation",
        title: "Instant Proposal Generation",
        problem:
          "Writing custom proposals for each client takes too much time and often delays deals.",
        solution:
          "Automatically turn form responses into well-written, branded PDF proposals using OpenAI.",
        result: "Up to 80% reduction in proposal creation time",
        tools: ["Airtable", "OpenAI", "Make.com"],
        icon: "BarChart",
        industries: [
          "Consulting",
          "Marketing Agencies",
          "Coaching",
          "SaaS",
          "More",
        ],
        details: {
          overview:
            "Automate the generation of client proposals by converting form inputs (budget, goals, scope) into structured, AI-written PDFs that you can send immediately — reducing friction and improving first impression.",
          stepByStepFlow: [
            "Client fills out a proposal request form (e.g., Typeform or Notion)",
            "Data is pushed to Airtable",
            "OpenAI writes a proposal draft using brand tone and inputs",
            "Make.com converts the text into a PDF using a template",
            "Proposal is emailed or uploaded to client portal",
          ],
          toolsUsed: ["Airtable", "OpenAI", "Make.com"],
        },
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
