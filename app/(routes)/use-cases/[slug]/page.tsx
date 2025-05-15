import Link from "next/link";
import { FadeIn } from "@/components/animations";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  getUseCaseBySlug,
  getAllUseCases,
  UseCase,
} from "@/constants/useCases";
import { ArrowLeft } from "lucide-react";
import {
  Zap,
  Clock,
  Calendar,
  BarChart,
  ShoppingCart,
  MessageSquare,
  LucideIcon,
} from "lucide-react";

const iconsMap: Record<string, LucideIcon> = {
  Zap: Zap,
  Clock: Clock,
  Calendar: Calendar,
  BarChart: BarChart,
  ShoppingCart: ShoppingCart,
  MessageSquare: MessageSquare,
};

// Generate static params for all use case slugs
export function generateStaticParams() {
  const useCases = getAllUseCases();
  return useCases.map((useCase) => ({
    slug: useCase.slug,
  }));
}

export default function UseCaseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const useCase = getUseCaseBySlug(params.slug);

  if (!useCase) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold">Use Case Not Found</h1>
        <p className="mt-4">
          <Link href="/use-cases" className="text-blue-500 hover:text-blue-600">
            Go back to all use cases
          </Link>
        </p>
      </div>
    );
  }

  const Icon = iconsMap[useCase.icon] || Zap;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24">
        <FadeIn>
          <div className="mb-8">
            <Link
              href="/use-cases"
              className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Use Cases
            </Link>

            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Icon className="h-5 w-5 text-blue-500" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                {useCase.title}
              </h1>
            </div>

            <Badge className="bg-green-100 hover:bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 text-sm py-1 px-3 font-medium mb-8">
              {useCase.result}
            </Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {useCase.details?.overview && (
                <section>
                  <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    Overview
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {useCase.details.overview}
                  </p>
                </section>
              )}

              <section>
                <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Problem
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {useCase.problem}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Solution
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {useCase.solution}
                </p>
              </section>

              {useCase.details?.stepByStepFlow && (
                <section>
                  <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    How It Works
                  </h2>
                  <ol className="list-decimal pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                    {useCase.details.stepByStepFlow.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </section>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
                  About This Automation
                </h3>

                {useCase.details?.toolsUsed && (
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                      Tools Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {useCase.details.toolsUsed.map((tool, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {useCase.industries && useCase.industries.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                      Industries
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {useCase.industries.map((industry, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                        >
                          {industry}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white border-0">
                  <Link href="/#contact" className="w-full">
                    Get This Automation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
