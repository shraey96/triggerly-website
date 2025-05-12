"use client"

import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { CaseStudy } from "@/constants/case-studies"
import { motion } from "framer-motion"
import { HoverScale } from "@/components/animations"

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

const CaseStudyCard = ({ caseStudy }: CaseStudyCardProps) => {
  return (
    <HoverScale>
      <Card className="overflow-hidden border-0 shadow-xl h-full flex flex-col dark:bg-gray-800/50 group">
        <div className="h-2 bg-blue-500 w-full"></div>
        <CardHeader className="pb-0">
          <Badge
            variant="outline"
            className="w-fit mb-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 border-0"
          >
            {caseStudy.tag}
          </Badge>
          <h3 className="text-2xl font-bold">{caseStudy.title}</h3>
        </CardHeader>
        <CardContent className="py-6 flex-grow">
          <p className="text-gray-600 dark:text-gray-300 mb-6">{caseStudy.problem}</p>
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Solution:</h4>
              <ul className="space-y-2">
                {caseStudy.solution.slice(0, 3).map((step, index) => (
                  <li key={index} className="text-sm flex items-start">
                    <div className="mr-2 text-blue-500">•</div>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Tools Used:</h4>
              <div className="flex flex-wrap gap-2">
                {caseStudy.tools.slice(0, 3).map((tool) => (
                  <Badge
                    key={tool}
                    variant="secondary"
                    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>

            {caseStudy.metrics && (
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Results:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(caseStudy.metrics)
                    .slice(0, 2)
                    .map(([key, value]) => (
                      <div key={key} className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                        <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </p>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-gray-500 dark:text-gray-400">Before: {value.before}</span>
                          <ArrowRight className="h-3 w-3 text-blue-500" />
                          <span className="text-xs font-medium text-blue-500 dark:text-blue-400">
                            After: {value.after}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild variant="ghost" className="w-full justify-between group-hover:text-blue-500">
            <Link href={`/case-studies/${caseStudy.slug}`}>
              <span>View Case Study</span>
              <motion.div
                className="inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 1,
                }}
              >
                <ArrowRight className="h-4 w-4 ml-1" />
              </motion.div>
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </HoverScale>
  )
}

export default CaseStudyCard
