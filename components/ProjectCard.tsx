"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        className="group liquid-glass-card rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer"
      >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden m-3 rounded-2xl">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 text-gray-400">
            <span className="text-4xl font-bold">{project.title.charAt(0)}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="px-5 pb-5">
        <h3 className="text-xl font-semibold mb-2 tracking-tight-custom text-gray-800 group-hover:text-[var(--accent-primary)] transition-colors">
          {project.cardTitle || project.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 leading-relaxed tracking-tight-custom line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 liquid-glass-tag text-gray-700 text-xs font-medium rounded-full tracking-tight-custom"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-3 py-1 liquid-glass-tag text-gray-700 text-xs font-medium rounded-full tracking-tight-custom">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-3 border-t border-white/30">
          {project.liveUrl && (
            <span
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open(project.liveUrl, '_blank');
              }}
              className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-[var(--accent-primary)] transition-colors tracking-tight-custom"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </span>
          )}
          {project.githubUrl && (
            <span
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open(project.githubUrl, '_blank');
              }}
              className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-[var(--accent-primary)] transition-colors tracking-tight-custom"
            >
              <Github className="w-4 h-4" />
              Source
            </span>
          )}
        </div>
      </div>
      </motion.div>
    </Link>
  );
}
