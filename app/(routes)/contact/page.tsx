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
import { Calendar, Mail, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Let's Talk Automation
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Book a free discovery call or send us a message to discuss how we can
          help you automate your workflows.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="border-0 shadow-lg dark:bg-gray-800/50">
          <CardHeader>
            <Calendar className="h-8 w-8 text-purple-600 mb-2" />
            <CardTitle>Book a Call</CardTitle>
            <CardDescription>
              Schedule a free 30-minute discovery call to discuss your
              automation needs.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our calendar integration will be embedded here.
              </p>
              <Button size="lg" className="w-full">
                Schedule Now
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg dark:bg-gray-800/50">
          <CardHeader>
            <MessageSquare className="h-8 w-8 text-purple-600 mb-2" />
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Input placeholder="Your Name" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" />
              </div>
              <div>
                <Textarea
                  placeholder="Tell us about what you want to automate"
                  rows={4}
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-3xl mx-auto mt-16 text-center">
        <div className="inline-flex items-center justify-center mb-4">
          <Mail className="h-5 w-5 text-purple-600 mr-2" />
          <span className="text-gray-600 dark:text-gray-300">
            Or email us directly at:
          </span>
        </div>
        <a
          href="mailto:hello@triggerlyai.com"
          className="text-xl font-medium text-purple-600 dark:text-purple-400 hover:underline"
        >
          hello@triggerlyai.com
        </a>
      </div>
    </div>
  );
}
