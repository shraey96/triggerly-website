import Link from "next/link";

import { FadeIn } from "@/components/animations";

const Footer = () => {
  return (
    <footer className="w-full py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Home
              </Link>
              <Link
                href="/case-studies"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Case Studies
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Contact
              </Link>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-500 text-center">
              © {new Date().getFullYear()} TriggerlyAI. All rights reserved.
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};

export default Footer;
