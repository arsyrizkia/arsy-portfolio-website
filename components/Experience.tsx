"use client";

import { motion } from "framer-motion";
import { experience, skills } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-[var(--accent-primary)] font-medium tracking-tight-custom">Background</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 tracking-tighter-custom">
            Experience & Skills
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience Timeline */}
          <div>
            <motion.h3
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold mb-8 tracking-tight-custom"
            >
              Work Experience
            </motion.h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />

              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative pl-8 pb-10 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-2 h-2 bg-[var(--accent-primary)] rounded-full -translate-x-1/2" />

                  <div className="bg-white rounded-xl p-6 card-shadow">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-lg font-semibold tracking-tight-custom">
                        {exp.role}
                      </h4>
                      <span className="text-sm text-gray-500 tracking-tight-custom">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-[var(--accent-primary)] font-medium text-sm mb-3 tracking-tight-custom">
                      {exp.company}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 tracking-tight-custom">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md tracking-tight-custom"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <motion.h3
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold mb-8 tracking-tight-custom"
            >
              Technical Skills
            </motion.h3>

            <div className="space-y-8">
              {Object.entries(skills).map(([category, skillList], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                >
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-white text-gray-700 font-medium text-sm rounded-lg card-shadow hover:card-shadow-hover transition-all cursor-default tracking-tight-custom"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
