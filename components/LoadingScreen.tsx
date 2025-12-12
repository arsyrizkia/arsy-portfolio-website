"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import Image from "next/image";

const polaroids = [
  // Top left - lag behind (move down relative to parent), spread left
  { id: 1, src: "/icons/app-1.png", rotation: -8, x: "20%", y: "32%", exitY: 80, exitX: -40, color: "var(--accent-primary)" },
  // Top center - lag behind most (move down relative to parent)
  { id: 2, src: "/icons/app-2.png", rotation: 4, x: "50%", y: "25%", exitY: 100, exitX: 0, color: "#ec5a29" },
  // Top right - lag behind (move down relative to parent), spread right
  { id: 3, src: "/icons/app-3.png", rotation: 10, x: "80%", y: "32%", exitY: 80, exitX: 40, color: "#10b981" },
  // Bottom left - rush ahead (move up relative to parent), spread left
  { id: 4, src: "/icons/app-4.png", rotation: -6, x: "25%", y: "75%", exitY: -60, exitX: -50, color: "#8b5cf6" },
  // Bottom right - rush ahead (move up relative to parent), spread right
  { id: 5, src: "/icons/app-5.png", rotation: 7, x: "75%", y: "75%", exitY: -60, exitX: 50, color: "#f59e0b" },
];

function PolaroidImage({ src, alt, color }: { src: string; alt: string; color: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className="w-full h-full rounded-sm flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        <Cpu className="w-8 h-8 md:w-10 md:h-10 text-white/80" strokeWidth={1.5} />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 96px, 128px"
      onError={() => setHasError(true)}
    />
  );
}

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-120%" }}
      transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#f5f5f5] overflow-visible"
      style={{ height: "100vh" }}
    >
      {/* Bottom curved blur edge - multiple layers for soft effect */}
      <div
        className="absolute -bottom-40 left-1/2 pointer-events-none"
        style={{
          width: "200vw",
          height: "250px",
          transform: "translateX(-50%)",
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(245,245,245,0.9) 0%, rgba(245,245,245,0.6) 40%, rgba(245,245,245,0.2) 70%, transparent 100%)",
          filter: "blur(20px)",
        }}
      />
      <div
        className="absolute -bottom-32 left-1/2 pointer-events-none"
        style={{
          width: "180vw",
          height: "200px",
          transform: "translateX(-50%)",
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(245,245,245,1) 0%, rgba(245,245,245,0.8) 50%, transparent 100%)",
          filter: "blur(10px)",
        }}
      />
      {/* Polaroid cards */}
      {polaroids.map((polaroid, index) => (
        <motion.div
          key={polaroid.id}
          initial={{
            opacity: 0,
            top: "120%",
            x: 0,
            y: 0,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            top: polaroid.y,
            x: 0,
            y: 0,
            filter: "blur(0px)",
          }}
          exit={{
            y: polaroid.exitY,
            x: polaroid.exitX,
          }}
          transition={{
            opacity: { duration: 1.2, delay: index * 0.15, ease: "easeOut" },
            top: { duration: 1.2, delay: index * 0.15, ease: [0.34, 1.56, 0.64, 1] },
            x: { duration: 1.4, ease: [0.76, 0, 0.24, 1] },
            y: { duration: 1.4, ease: [0.76, 0, 0.24, 1] },
            filter: { duration: 1.2, delay: index * 0.15, ease: "easeOut" },
          }}
          style={{
            position: "absolute",
            left: polaroid.x,
            transform: `translate(-50%, -50%) rotate(${polaroid.rotation}deg)`,
          }}
          className="polaroid-card"
        >
          <div
            className="bg-white p-2 rounded-sm shadow-lg"
            style={{ transform: `rotate(${polaroid.rotation}deg)` }}
          >
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-200 rounded-sm overflow-hidden relative">
              <PolaroidImage
                src={polaroid.src}
                alt={`App icon ${polaroid.id}`}
                color={polaroid.color}
              />
            </div>
            <div className="h-6 md:h-8" />
          </div>
        </motion.div>
      ))}

      {/* Center spinning cpu icon */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          rotate: 360,
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.4 },
          scale: { duration: 0.8, delay: 0.4 },
          filter: { duration: 0.8, delay: 0.4 },
          rotate: {
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            delay: 0.8,
          },
        }}
        className="z-10"
      >
        <Cpu className="w-10 h-10 md:w-12 md:h-12 text-gray-800" strokeWidth={1.5} />
      </motion.div>
    </motion.div>
  );
}
