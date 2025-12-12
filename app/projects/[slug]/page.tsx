"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, Github, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { projects, ProjectSection } from "@/lib/data";

// Fullscreen Lightbox Component
function Lightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev
}: {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose, onNext, onPrev]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 text-white/70 hover:text-white transition-colors"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Image Counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Previous Button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors bg-black/30 rounded-full hover:bg-black/50"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
      )}

      {/* Image */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="relative w-full h-full max-w-6xl max-h-[90vh] mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[currentIndex]}
          alt={`Screenshot ${currentIndex + 1}`}
          fill
          className="object-contain"
          quality={100}
        />
      </motion.div>

      {/* Next Button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors bg-black/30 rounded-full hover:bg-black/50"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      )}

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-black/50 rounded-lg max-w-[90vw] overflow-x-auto">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                // Navigate to this image
                const diff = idx - currentIndex;
                if (diff > 0) {
                  for (let i = 0; i < diff; i++) onNext();
                } else {
                  for (let i = 0; i < Math.abs(diff); i++) onPrev();
                }
              }}
              className={`relative w-16 h-12 rounded overflow-hidden flex-shrink-0 transition-all ${
                idx === currentIndex ? "ring-2 ring-white" : "opacity-50 hover:opacity-100"
              }`}
            >
              <Image src={img} alt="" fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
}

// Parallax image component for storytelling sections
function ParallaxSectionImage({
  section,
  isEven,
  onClick
}: {
  section: ProjectSection;
  isEven: boolean;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax movement and zoom as you scroll past
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 1.15]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex-1 w-full"
    >
      <motion.div
        whileHover={{ scale: 1.02, rotateY: isEven ? 2 : -2 }}
        transition={{ duration: 0.4 }}
        className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
        style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
        onClick={onClick}
      >
        <motion.div
          className="absolute -inset-4"
          style={{ y, scale }}
        >
          <Image
            src={section.image!}
            alt={section.title}
            fill
            className="object-contain bg-white"
          />
        </motion.div>
        {/* Shine effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
          initial={{ x: '-100%', opacity: 0 }}
          whileHover={{ x: '100%', opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects.find((p) => p.slug === slug);
  const sectionRef = useRef<HTMLElement>(null);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Parallax effect - image moves and zooms as you scroll
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // Collect all images for the lightbox
  const allImages: string[] = project ? [
    ...(project.sections?.map(s => s.image).filter(Boolean) as string[] || []),
    ...(project.gallery || [])
  ] : [];

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % allImages.length);
  }, [allImages.length]);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  }, [allImages.length]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Project Not Found</h1>
          <Link
            href="/#projects"
            className="text-white/70 hover:text-white transition-colors"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section - Full viewport */}
      <section ref={sectionRef} className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Background - Image or Gradient Fallback with Parallax */}
        <motion.div
          className="absolute -inset-x-0 -top-[50px] -bottom-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black"
          style={{ y: imageY, scale: imageScale }}
        >
          {(project.heroImage || project.image) && (
            <Image
              src={project.heroImage || project.image}
              alt={project.title}
              fill
              className="object-cover object-top"
              priority
              quality={90}
            />
          )}
        </motion.div>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

        {/* Top Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-50 px-6 py-6"
        >
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link
              href="/#projects"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium tracking-tight-custom">Back</span>
            </Link>
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-white/30 text-white rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Source
                </a>
              )}
            </div>
          </div>
        </motion.nav>

        {/* Content Overlay - Bottom */}
        <div className="relative z-10 mt-auto px-6 pb-24 md:pb-32">
          <div className="max-w-4xl mx-auto">
            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-medium rounded-full border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter-custom mb-6"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
            >
              {project.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-xl text-white/80 leading-relaxed tracking-tight-custom max-w-2xl"
            >
              {project.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Project Details - Flowing Layout with Parallax */}
      {project.sections && project.sections.length > 0 && (
        <section className="py-0">
          {project.sections.map((section, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative overflow-hidden ${isEven ? 'bg-white' : 'bg-[#f8f8f8]'}`}
              >
                <div className="max-w-6xl mx-auto px-6 py-20 md:py-32">
                  <div className={`flex flex-col ${section.image ? (isEven ? 'md:flex-row' : 'md:flex-row-reverse') : ''} gap-12 md:gap-20 items-center ${!section.image ? 'justify-center' : ''}`}>
                    {/* Text Content */}
                    <motion.div
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-150px" }}
                      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                      className={`${section.image ? 'flex-1' : 'max-w-3xl text-center'}`}
                    >
                      <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-sm font-medium text-[var(--accent-primary)] uppercase tracking-widest mb-4 block"
                      >
                        {String(index + 1).padStart(2, '0')}
                      </motion.span>
                      <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-3xl md:text-5xl font-bold tracking-tighter-custom mb-6"
                      >
                        {section.title}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-gray-600 text-lg md:text-xl leading-relaxed"
                      >
                        {section.description}
                      </motion.p>
                    </motion.div>

                    {/* Image with Parallax */}
                    {section.image && (
                      <ParallaxSectionImage
                        section={section}
                        isEven={isEven}
                        onClick={() => openLightbox(index)}
                      />
                    )}
                  </div>
                </div>

                {/* Decorative background elements */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.03 }}
                  viewport={{ once: true }}
                  className={`absolute ${isEven ? '-right-20' : '-left-20'} top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[var(--accent-primary)] blur-3xl pointer-events-none`}
                />
              </div>
            );
          })}
        </section>
      )}

      {/* Gallery Section - Remaining Images */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="bg-[#f5f5f5] py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold tracking-tighter-custom mb-12 text-center"
            >
              More Screenshots
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image, index) => {
                const sectionImagesCount = project.sections?.filter(s => s.image).length || 0;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-white shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                    onClick={() => openLightbox(sectionImagesCount + index)}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Links Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors tracking-tight-custom"
              >
                <ExternalLink className="w-5 h-5" />
                Visit Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors tracking-tight-custom"
              >
                <Github className="w-5 h-5" />
                View Source Code
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {lightboxOpen && allImages.length > 0 && (
          <Lightbox
            images={allImages}
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
            onNext={nextImage}
            onPrev={prevImage}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
