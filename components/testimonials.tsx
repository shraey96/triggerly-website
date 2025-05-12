"use client"

import { Card, CardContent } from "@/components/ui/card"
import { testimonials } from "@/constants/testimonials"
import { Quote } from "lucide-react"
import { motion } from "framer-motion"
import { StaggerContainer, StaggerItem } from "@/components/animations"

const Testimonials = () => {
  return (
    <StaggerContainer className="grid md:grid-cols-2 gap-8">
      {testimonials.map((testimonial, index) => (
        <StaggerItem key={index}>
          <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
            <Card className="border-0 shadow-xl dark:bg-gray-800/50 overflow-hidden">
              <div className="h-2 bg-blue-500 w-full"></div>
              <CardContent className="pt-8">
                <Quote className="h-10 w-10 text-blue-200 dark:text-blue-800 mb-6" />
                <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-lg">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.title}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  )
}

export default Testimonials
