"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./LoadingScreen";

interface LoadingProviderProps {
  children: React.ReactNode;
}

export default function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Prevent scrolling while loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
    }

    // Minimum display time for the loading animation
    const minLoadTime = 3500;
    const startTime = Date.now();

    const handleLoad = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minLoadTime - elapsed);

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = "";
        window.scrollTo(0, 0);
      }, remaining);
    };

    // Check if already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, [isLoading]);

  return (
    <>
      {/* Content is always visible underneath - loading screen overlays it */}
      {children}
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
    </>
  );
}
