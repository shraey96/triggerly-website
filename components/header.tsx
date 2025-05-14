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

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

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
        <div className="flex h-16 md:h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/triggerly-logo.png"
                alt="Triggerly Logo"
                width={28}
                height={28}
                className="mr-2 w-7 h-7 md:w-8 md:h-8"
              />
              <span className="text-xl md:text-2xl font-bold text-blue-500">
                TriggerlyAI
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm lg:text-base font-medium transition-colors hover:text-blue-500 ${
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
                  <Sun className="h-4 w-4 md:h-5 md:w-5" />
                ) : (
                  <Moon className="h-4 w-4 md:h-5 md:w-5" />
                )}
              </button>
            )}
          </nav>

          <div className="hidden md:flex items-center">
            <Button
              asChild
              className="bg-blue-500 hover:bg-blue-600 text-white border-0 h-10 lg:h-12 px-4 lg:px-6 text-sm lg:text-base"
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
          <div className="flex md:hidden items-center space-x-3">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>
            )}

            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="p-1"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-gray-800 dark:text-gray-200" />
              ) : (
                <Menu className="h-5 w-5 text-gray-800 dark:text-gray-200" />
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
          <div className="container mx-auto px-4 py-4 bg-white dark:bg-gray-900 shadow-lg">
            <nav className="flex flex-col space-y-4">
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
                className="w-full bg-blue-500 hover:bg-blue-600 text-white border-0 mt-2"
              >
                <Link
                  href="/#contact"
                  onClick={(e) => handleNavLinkClick(e, "/#contact")}
                >
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
