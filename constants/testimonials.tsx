export interface Testimonial {
  name: string;
  title: string;
  automation: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Rohan S.",
    title: "Fitness Coach",
    automation: "Lead Follow-Up Bot",
    quote:
      "I used to miss leads from my website all the time. Now, every inquiry gets a WhatsApp reply in under 30 seconds. I've booked 2x more intro calls this month.",
  },
  {
    name: "Emily R.",
    title: "Ecom Store Founder",
    automation: "Cart Recovery Automation",
    quote:
      "We recovered over a dozen abandoned checkouts in just the first week. The WhatsApp reminders feel natural — and they convert.",
  },
  {
    name: "Daniel M.",
    title: "Consultant",
    automation: "Proposal Generation System",
    quote:
      "Creating client proposals used to eat up hours. Now it's just a form and a click. My clients get polished PDFs instantly — and I've freed up 5–6 hours every week.",
  },
];

// For the badges
export const automationTypeBadges: Record<string, string> = {
  "Lead Follow-Up Bot": "Lead Gen",
  "Cart Recovery Automation": "Ecom",
  "Proposal Generation System": "Consulting",
};
