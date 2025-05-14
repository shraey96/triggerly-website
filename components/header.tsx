"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { handleSmoothScroll } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Integrations", path: "/#integrations" },
    { name: "Use Cases", path: "/#use-cases" },
    { name: "FAQ", path: "/#faq" },
  ];

  // Handles both smooth scrolling and menu closing
  const handleNavLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    // Close the mobile menu
    setIsMenuOpen(false);

    // Only handle smooth scrolling for anchor links
    if (path.startsWith("#")) {
      handleSmoothScroll(e);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 shadow-sm backdrop-blur-md dark:bg-gray-900/95"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/triggerly-logo.png"
                alt="Triggerly Logo"
                width={32}
                height={32}
                className="mr-2"
              />
              <span className="text-2xl font-bold text-blue-500">
                TriggerlyAI
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-base font-medium transition-colors hover:text-blue-500 ${
                  pathname === link.path
                    ? "text-blue-500"
                    : "text-gray-700 dark:text-gray-200"
                }`}
                onClick={(e) => handleNavLinkClick(e, link.path)}
              >
                {link.name}
              </Link>
            ))}

            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
            )}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              asChild
              className="bg-blue-500 hover:bg-blue-600 text-white border-0 h-12 px-6"
            >
              <Link
                href="/#contact"
                onClick={(e) => handleNavLinkClick(e, "/#contact")}
              >
                Contact Us
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
            )}

            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-800 dark:text-gray-200" />
              ) : (
                <Menu className="h-6 w-6 text-gray-800 dark:text-gray-200" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-6 bg-white dark:bg-gray-900 shadow-lg">
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-base font-medium transition-colors hover:text-blue-500 ${
                    pathname === link.path
                      ? "text-blue-500"
                      : "text-gray-700 dark:text-gray-200"
                  }`}
                  onClick={(e) => handleNavLinkClick(e, link.path)}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                asChild
                className="w-full bg-blue-500 hover:bg-blue-600 text-white border-0"
              >
                <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
