import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Mail, MessageSquare, Check } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24">
        {/* Hero Section */}
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Let's Build Your AI System
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Tell us what you're trying to automate — and we'll show you what's
              possible.
            </p>
          </div>
        </FadeIn>

        {/* Main Interaction Grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Book a Call Card */}
          <StaggerItem>
            <Card className="border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden h-full">
              <CardHeader className="pb-2">
                <Calendar className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle className="text-2xl">
                  Book a Free Discovery Call
                </CardTitle>
                <CardDescription className="text-base">
                  Speak directly with our automation strategist. We'll
                  understand your needs, suggest workflows, and show you
                  examples.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 dark:bg-gray-800/60 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Our calendar will be embedded here. Choose a time that works
                    for you.
                  </p>
                  <Button
                    size="lg"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    Schedule Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </StaggerItem>

          {/* Send a Message Card */}
          <StaggerItem>
            <Card className="border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden h-full">
              <CardHeader className="pb-2">
                <MessageSquare className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription className="text-base">
                  Prefer async? Drop us a quick message and we'll reply within
                  24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      className="border-gray-200 dark:border-gray-700 h-12 rounded-lg"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="border-gray-200 dark:border-gray-700 h-12 rounded-lg"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Tell us about your current workflow or problem you want to solve…"
                      rows={4}
                      className="border-gray-200 dark:border-gray-700 rounded-lg resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </StaggerItem>
        </StaggerContainer>

        {/* Perks Section */}
        <div className="max-w-3xl mx-auto mt-16">
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Response within 24 hrs
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  100% Free strategy call
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Custom automations, no templates
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Secure & private — no spam, no sales pressure
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Email Fallback */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <FadeIn>
            <div className="inline-flex items-center justify-center mb-3">
              <Mail className="h-5 w-5 text-blue-500 mr-2" />
              <span className="text-gray-600 dark:text-gray-300">
                Or email us directly at:
              </span>
            </div>
            <a
              href="mailto:hello@triggerlyai.com"
              className="text-xl font-medium text-blue-500 hover:underline"
            >
              hello@triggerlyai.com
            </a>
          </FadeIn>
        </div>

        {/* Mini FAQ */}
        <div className="max-w-3xl mx-auto mt-16">
          <FadeIn>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    What happens on the discovery call?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                    We'll discuss your current workflows, pain points, and what
                    you're looking to automate. Then we'll suggest potential
                    solutions and next steps.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    What kind of businesses do you work with?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                    We work with businesses of all sizes, from solopreneurs to
                    enterprises. Our automation solutions are especially
                    valuable for real estate, coaching, and e-commerce
                    businesses.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    How quickly can you implement an automation?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                    Most automations can be set up within 1-2 weeks, depending
                    on complexity. We prioritize quick wins that deliver
                    immediate value while building toward your complete system.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
