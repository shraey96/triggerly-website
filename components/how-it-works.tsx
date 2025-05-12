"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    number: 1,
    title: "Discovery Call",
    description: "We discuss your current workflows and identify automation opportunities.",
  },
  {
    number: 2,
    title: "Solution Design",
    description: "We design a custom automation solution tailored to your specific needs.",
  },
  {
    number: 3,
    title: "Implementation",
    description: "We build and test your automation workflow using the right tools for the job.",
  },
  {
    number: 4,
    title: "Launch & Support",
    description: "We launch your automation and provide ongoing support and optimization.",
  },
]

const HowItWorks = () => {
  const timelineRef = useRef(null)
  const isInView = useInView(timelineRef, { once: true, amount: 0.2 })

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative" ref={timelineRef}>
        {/* Timeline line */}
        <motion.div
          className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 w-0.5 bg-gray-200 dark:bg-gray-700"
          style={{
            height: isInView ? "100%" : "0%",
            transition: "height 1.5s cubic-bezier(0.25, 0.1, 0.25, 1.0)",
          }}
        ></motion.div>

        {/* Steps */}
        <div className="space-y-16 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="md:w-1/2 flex justify-center md:justify-end md:pr-8 md:pl-0 pl-8 relative">
                <motion.div
                  className="absolute left-0 md:left-auto md:right-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.2 }}
                >
                  <Check className="h-4 w-4" />
                </motion.div>
                <motion.div
                  className={`bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl ${index % 2 === 0 ? "md:text-right" : ""}`}
                  whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="inline-block px-3 py-1 mb-3 bg-blue-50 dark:bg-blue-900/30 rounded-full text-xs font-medium text-blue-600 dark:text-blue-300">
                    Step {step.number}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </motion.div>
              </div>
              <div className="md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
