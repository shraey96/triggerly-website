"use client"

import Image from "next/image"
import { tools } from "@/constants/tools"
import { motion } from "framer-motion"

const ToolLogos = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
      {tools.map((tool, index) => (
        <motion.div
          key={tool.name}
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="w-16 h-16 md:w-20 md:h-20 relative flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-md p-3">
            <Image
              src={tool.logo || "/placeholder.svg"}
              alt={`${tool.name} logo`}
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400 mt-3">{tool.name}</span>
        </motion.div>
      ))}
    </div>
  )
}

export default ToolLogos
