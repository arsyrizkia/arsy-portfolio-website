"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Cpu } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]); // text moves down
  const cloudY = useTransform(scrollYProgress, [0, 1], [0, 50]); // cloud moves down slower

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient - Mocha */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#BF9362] from-0% via-[#BF9362] via-80% to-[#f5ede4] to-100% -z-10" />

      {/* Blur overlay at bottom of hero - covers everything */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[50vh] pointer-events-none z-20"
        style={{
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          maskImage: 'linear-gradient(to top, black 0%, black 40%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, black 0%, black 40%, transparent 100%)'
        }}
      />

      {/* White gradient overlay at bottom - smooth fade */}
      <div className="absolute bottom-0 left-0 right-0 h-[20vh] bg-gradient-to-t from-white from-0% via-white/80 via-40% to-transparent to-100% pointer-events-none z-30" />

      {/* Cloud behind the name text - slower parallax */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{ y: cloudY }}
        className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vh] pointer-events-none"
      >
        <Image
          src="/cloud.png"
          alt=""
          fill
          className="object-contain opacity-50 brightness-150"
        />
      </motion.div>

      {/* Name text with corner brackets - faster parallax down */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{ y: textY }}
        className="absolute top-[10%] left-1/2 -translate-x-1/2 pointer-events-none"
      >
        {/* Corner brackets - positioned relative to name */}
        <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-white/60" />
        <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-white/60" />
        <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-white/60" />
        <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-white/60" />

        {/* Name text */}
        <h1 className="text-[10vw] md:text-[9vw] font-bold text-white text-center tracking-tighter-custom select-none max-w-[90vw] leading-[0.9]">
          DRIVING INNOVATION WITH TECHNOLOGY
        </h1>
      </motion.div>

      {/* Center profile image - positioned at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ y: imageY }}
        className="absolute -bottom-[1vh] left-1/2 -translate-x-1/2 z-10"
      >
        <div className="relative w-[70vw] h-[80vh] md:w-[40vw] md:h-[80vh]">
          <Image
            src="/profile.png"
            alt="Arsy Rizkia"
            fill
            className="object-cover object-[center_70%]"
            priority
          />
        </div>
      </motion.div>

      {/* Name and title - top left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute top-6 left-6"
      >
        <h2 className="text-xl md:text-2xl font-semibold text-white">Arsy Rizkia</h2>
        <p className="text-sm md:text-base text-white/70">Software Engineer</p>
      </motion.div>

      {/* Cpu icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute top-6 left-1/2 -translate-x-1/2"
      >
        <Cpu className="w-8 h-8 text-white/80" strokeWidth={1.5} />
      </motion.div>

      {/* Contact button - top right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute top-6 right-6"
      >
        <a
          href="#contact"
          className="px-6 py-2 bg-white text-gray-900 text-sm font-medium rounded-full hover:bg-gray-100 transition-colors tracking-tight-custom"
        >
          Contact
        </a>
      </motion.div>

    </section>
  );
}
