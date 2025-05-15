import { Badge } from "@/components/ui/badge";
import { UseCase } from "@/constants/useCases";
import {
  Zap,
  Clock,
  Calendar,
  BarChart,
  ShoppingCart,
  MessageSquare,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";

const iconsMap: Record<string, LucideIcon> = {
  Zap: Zap,
  Clock: Clock,
  Calendar: Calendar,
  BarChart: BarChart,
  ShoppingCart: ShoppingCart,
  MessageSquare: MessageSquare,
};

interface UseCaseCardProps {
  useCase: UseCase;
}

export default function UseCaseCard({ useCase }: UseCaseCardProps) {
  const Icon = iconsMap[useCase.icon] || Zap;

  return (
    <Link href={`/use-cases/${useCase.slug}`} className="block">
      <div className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] h-full">
        <div className="p-4 sm:p-5">
          <div className="flex flex-col h-full">
            <div className="mb-3 md:mb-4">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-1 text-gray-500 dark:text-gray-400">
                <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                <span className="text-xs sm:text-sm font-medium">Problem</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                {useCase.problem}
              </p>
            </div>

            <div className="mb-3 md:mb-4">
              <div className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                Solution
              </div>
              <p className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                {useCase.title}
              </p>
            </div>

            <div className="mt-auto">
              <div className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 mb-1.5 sm:mb-2">
                Result
              </div>
              <Badge className="bg-green-100 hover:bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 text-xs sm:text-sm py-0.5 sm:py-1 px-2 sm:px-3 font-medium">
                {useCase.result}
              </Badge>

              {useCase.tools && (
                <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {useCase.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="text-[0.65rem] sm:text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {useCase.industries && useCase.industries.length > 0 && (
                <div className="mt-3 sm:mt-4">
                  <div className="text-[0.65rem] sm:text-xs text-gray-500 dark:text-gray-400">
                    Used by: {useCase.industries.join(", ")}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
