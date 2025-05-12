"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Clock, Zap, Users } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import Link from "next/link";

export default function ServiceBlocksSection() {
  return (
    <section className="w-full py-24 px-4" id="services">
      <div className="container mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Automate what matters most
          </h2>
          <p className="text-xl text-gray-600 text-center mb-20 max-w-3xl mx-auto">
            Our specialized AI automation services help you save time and
            increase efficiency across your business.
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          <StaggerItem>
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full">
              <div className="h-2 bg-blue-500 w-full"></div>
              <CardHeader className="pt-8">
                <Zap className="h-12 w-12 text-blue-500 mb-4" />
                <CardTitle className="text-2xl">Sales Automation</CardTitle>
                <CardDescription className="text-base">
                  Never miss a lead or follow-up again
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <ul className="space-y-3 flex-grow">
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-blue-500">•</div>
                    <span>Instant lead response via WhatsApp/Email</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-blue-500">•</div>
                    <span>AI-powered lead qualification</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-blue-500">•</div>
                    <span>Automated meeting scheduling</span>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link
                    href="/case-studies"
                    className="text-blue-500 hover:text-blue-600 inline-flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform duration-300"
                  >
                    View example <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full">
              <div className="h-2 bg-blue-500 w-full"></div>
              <CardHeader className="pt-8">
                <Users className="h-12 w-12 text-blue-500 mb-4" />
                <CardTitle className="text-2xl">Support Automation</CardTitle>
                <CardDescription className="text-base">
                  Respond faster, solve problems quicker
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <ul className="space-y-3 flex-grow">
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-blue-500">•</div>
                    <span>24/7 AI customer support responses</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-blue-500">•</div>
                    <span>Ticket categorization and routing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-blue-500">•</div>
                    <span>Knowledge base integration</span>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link
                    href="/case-studies"
                    className="text-blue-500 hover:text-blue-600 inline-flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform duration-300"
                  >
                    View example <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full">
              <div className="h-2 bg-blue-500 w-full"></div>
              <CardHeader className="pt-8">
                <Clock className="h-12 w-12 text-blue-500 mb-4" />
                <CardTitle className="text-2xl">
                  Operations Automation
                </CardTitle>
                <CardDescription className="text-base">
                  Streamline your internal workflows
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <ul className="space-y-3 flex-grow">
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-blue-500">•</div>
                    <span>Automated invoice processing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-blue-500">•</div>
                    <span>Data entry and synchronization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-blue-500">•</div>
                    <span>Reporting and analytics automation</span>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link
                    href="/case-studies"
                    className="text-blue-500 hover:text-blue-600 inline-flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform duration-300"
                  >
                    View example <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
