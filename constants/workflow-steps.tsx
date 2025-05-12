import React from "react";
import { Lightbulb, PenTool, Gauge, Settings } from "lucide-react";

export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const workflowSteps: WorkflowStep[] = [
  {
    step: 1,
    title: "Consultation",
    description:
      "We understand your workflows, bottlenecks, and goals — then identify key opportunities for automation.",
    icon: <Lightbulb className="h-5 w-5" />,
  },
  {
    step: 2,
    title: "Solution Design",
    description:
      "We map out a custom AI-powered workflow tailored to your tools, needs, and operations.",
    icon: <PenTool className="h-5 w-5" />,
  },
  {
    step: 3,
    title: "Implementation",
    description:
      "We build and deploy your automation using tools like Make.com, GPT, and your existing platforms.",
    icon: <Settings className="h-5 w-5" />,
  },
  {
    step: 4,
    title: "Optimization",
    description:
      "We test, monitor, and iterate — ensuring performance, accuracy, and long-term value.",
    icon: <Gauge className="h-5 w-5" />,
  },
];
