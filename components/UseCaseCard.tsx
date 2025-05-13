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
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
      <div className="p-5">
        <div className="flex flex-col h-full">
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-1 text-gray-500 dark:text-gray-400">
              <Icon className="h-5 w-5 text-blue-500" />
              <span className="text-sm font-medium">Problem</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {useCase.description}
            </p>
          </div>

          <div className="mb-4">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
              Solution
            </div>
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              {useCase.title}
            </p>
          </div>

          <div className="mt-auto">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
              Result
            </div>
            <Badge className="bg-green-100 hover:bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 text-sm py-1 px-3 font-medium">
              {useCase.result}
            </Badge>

            {useCase.tools && (
              <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
                <div className="flex flex-wrap gap-2">
                  {useCase.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {useCase.industries && useCase.industries.length > 0 && (
              <div className="mt-4">
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Used by: {useCase.industries.join(", ")}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
