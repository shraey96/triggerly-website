import React from "react";

// Main organization schema
export const OrganizationSchema = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://triggerlyai.io",
          name: "TriggerlyAI",
          description:
            "AI automation agency helping businesses save time, boost conversions, and scale with custom workflow automations.",
          url: "https://triggerlyai.io",
          logo: "https://triggerlyai.io/images/triggerly-logo.png",
          sameAs: [
            "https://twitter.com/triggerlyai",
            "https://linkedin.com/company/triggerlyai",
            // Add other social profiles as needed
          ],
          address: {
            "@type": "PostalAddress",
            // Fill in your actual address details
            streetAddress: "123 AI Lane",
            addressLocality: "Tech City",
            addressRegion: "CA",
            postalCode: "94000",
            addressCountry: "US",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-555-123-4567", // Replace with actual phone
            contactType: "customer service",
            email: "hello@triggerlyai.io", // Replace with actual email
            availableLanguage: "English",
          },
          priceRange: "$$",
          openingHours: "Mo,Tu,We,Th,Fr 09:00-17:00",
          areaServed: {
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: 37.7749, // Replace with actual coordinates
              longitude: -122.4194,
            },
            geoRadius: "50000",
          },
          knowsAbout: [
            "Artificial Intelligence",
            "Business Automation",
            "Workflow Optimization",
            "Lead Generation",
            "Customer Service Automation",
            "GPT Integration",
            "Airtable",
            "Make.com",
            "n8n",
          ],
        }),
      }}
    />
  );
};

// Service schema for specific offerings
export const ServicesSchema = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "AI Workflow Automation",
          provider: {
            "@type": "ProfessionalService",
            name: "TriggerlyAI",
            url: "https://triggerlyai.io",
          },
          description:
            "Custom AI automation solutions to streamline business processes, increase efficiency, and boost conversions.",
          offers: {
            "@type": "Offer",
            price: "1000.00", // Replace with your actual starting price
            priceCurrency: "USD",
            priceValidUntil: new Date(
              new Date().setFullYear(new Date().getFullYear() + 1)
            )
              .toISOString()
              .split("T")[0],
            availability: "https://schema.org/InStock",
            url: "https://triggerlyai.io/#contact",
          },
          audience: {
            "@type": "BusinessAudience",
            audienceType: "Small to Medium Businesses, Consultants, Agencies",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "AI Automation Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Lead Response Automation",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Customer Onboarding Automation",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Proposal Generation System",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Cart Recovery Automation",
                },
              },
            ],
          },
        }),
      }}
    />
  );
};

// FAQPage schema for FAQ section
export const FAQSchema = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What kind of businesses can benefit from AI automation?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Any business with repetitive processes can benefit from our AI automations, but we particularly excel with consultants, agencies, e-commerce stores, and service businesses.",
              },
            },
            {
              "@type": "Question",
              name: "How long does it take to implement an AI workflow?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Most automation workflows can be designed, built, and implemented within 2-4 weeks, depending on complexity and requirements.",
              },
            },
            {
              "@type": "Question",
              name: "Do you integrate with my existing tools?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we integrate with most popular business tools including Airtable, Slack, Gmail, Make.com, Zapier, and many more. Our solutions are designed to work seamlessly with your existing tech stack.",
              },
            },
            {
              "@type": "Question",
              name: "What is the ROI of implementing AI automations?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our clients typically see ROI within 3-6 months through time savings, increased conversions, and reduction in manual work. Many automations pay for themselves within weeks.",
              },
            },
          ],
        }),
      }}
    />
  );
};

// Combined schema component to use in layout
export default function SchemaMarkup() {
  return (
    <>
      <OrganizationSchema />
      <ServicesSchema />
      <FAQSchema />
    </>
  );
}
