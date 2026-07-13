'use client';

import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheck } from 'react-icons/fi';
import { experiences } from '@/data';
import SectionHeading from '@/app/components/SectionHeading';
import { fadeInLeft, fadeInRight, staggerContainer, fadeInUp } from '@/utils/animations';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey and hands-on experience in the industry."
        />

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              {/* Timeline line */}
              {idx < experiences.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-transparent" />
              )}

              <div className="flex gap-6">
                {/* Timeline dot */}
                <motion.div
                  variants={fadeInLeft}
                  className="flex-shrink-0 mt-2"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                    <FiBriefcase size={24} className="text-white" />
                  </div>
                </motion.div>

                {/* Content card */}
                <motion.div
                  variants={fadeInRight}
                  className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 mb-8 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow"
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-base">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 items-end">
                      <span className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                        <FiCalendar size={14} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                        <FiMapPin size={14} />
                        {exp.location}
                      </span>
                      <span className="text-xs font-medium bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-5 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mb-5">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3 uppercase tracking-wider">
                      Key Responsibilities
                    </h4>
                    <motion.ul
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      {exp.responsibilities.map((r) => (
                        <motion.li
                          key={r}
                          variants={fadeInUp}
                          className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300"
                        >
                          <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <FiCheck size={11} className="text-emerald-600 dark:text-emerald-400" />
                          </div>
                          {r}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
