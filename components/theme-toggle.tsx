"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="relative overflow-hidden border border-gray-200 dark:border-gray-700 px-3"
    >
      <div className="flex items-center">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: theme === "dark" ? 45 : 0 }}
          transition={{ duration: 0.5 }}
          className="mr-2"
        >
          <Sun className="h-4 w-4 transition-all dark:opacity-0" />
        </motion.div>
        <motion.div
          className="absolute left-3"
          initial={{ rotate: -45, opacity: 0 }}
          animate={{
            rotate: theme === "dark" ? 0 : -45,
            opacity: theme === "dark" ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <Moon className="h-4 w-4" />
        </motion.div>
        <span className="ml-4">{theme === "dark" ? "Dark" : "Light"}</span>
      </div>
    </Button>
  );
}
