"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500"
        >
          <p className="tracking-tight-custom">
            &copy; {currentYear} Arsy Rizkia. All rights reserved.
          </p>

          <p className="tracking-tight-custom">
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[var(--accent-primary)] transition-colors"
            >
              Next.js
            </a>
            {" "}&{" "}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[var(--accent-primary)] transition-colors"
            >
              Tailwind CSS
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
