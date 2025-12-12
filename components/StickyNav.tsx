"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Portfolio", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function StickyNav() {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("home");
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsSticky(window.scrollY > heroBottom - 100);
      }

      const sections = ["home", "projects", "experience", "contact"];
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Get the index to show pill for (hovered takes priority, otherwise active)
  const activeIndex = navItems.findIndex(item => item.href.slice(1) === activeSection);
  const pillIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

  // Calculate pill position and size based on the target element
  const getPillStyle = () => {
    const targetRef = itemRefs.current[pillIndex];
    const navElement = navRef.current;
    if (!targetRef || !navElement) return { left: 0, width: 0 };

    const navRect = navElement.getBoundingClientRect();
    const targetRect = targetRef.getBoundingClientRect();

    return {
      left: targetRect.left - navRect.left,
      width: targetRect.width,
    };
  };

  const pillStyle = getPillStyle();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center gap-4 z-50"
    >
      <Cpu
        className={`w-5 h-5 transition-colors duration-300 ${
          isSticky ? "text-gray-600" : "text-gray-800"
        }`}
        strokeWidth={1.5}
      />
      <nav
        ref={navRef}
        className="liquid-glass relative flex items-center gap-2 px-3 py-2 rounded-full"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {/* Animated frosted pill overlay */}
        <motion.div
          className="absolute top-2 bottom-2 rounded-full pointer-events-none z-0"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.08))",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "inset 0 1px 1px rgba(255,255,255,0.2), 0 2px 8px rgba(0,0,0,0.06)",
          }}
          animate={{
            left: pillStyle.left,
            width: pillStyle.width,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
          }}
        />

        {/* Nav items */}
        {navItems.map((item, index) => (
          <motion.a
            key={item.name}
            ref={(el) => { itemRefs.current[index] = el; }}
            href={item.href}
            className="relative z-10 text-sm font-medium px-4 py-2 rounded-full"
            onMouseEnter={() => setHoveredIndex(index)}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
          >
            <span className={`transition-colors duration-200 ${
              pillIndex === index
                ? "text-gray-900"
                : "text-gray-500"
            }`}>
              {item.name}
            </span>
          </motion.a>
        ))}
      </nav>
    </motion.div>
  );
}
