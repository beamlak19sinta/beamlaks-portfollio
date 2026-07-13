'use client';

import { motion } from 'framer-motion';
import { FiBook, FiMapPin, FiAward } from 'react-icons/fi';
import { education } from '@/data';
import SectionHeading from '@/app/components/SectionHeading';
import { fadeInUp, staggerContainer } from '@/utils/animations';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Education"
          subtitle="Academic background that laid the foundation for my development career."
        />

        <div className="max-w-3xl mx-auto">
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                      <FiBook size={26} className="text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-indigo-600 dark:text-indigo-400 font-semibold">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 px-3 py-1.5 rounded-full">
                        <FiMapPin size={13} />
                        {edu.location}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-5 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Course highlights */}
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <FiAward size={13} />
                        Key Subjects
                      </h4>
                      <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-2"
                      >
                        {edu.highlights.map((h) => (
                          <motion.span
                            key={h}
                            variants={fadeInUp}
                            className="text-xs font-medium bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800 px-3 py-1.5 rounded-full"
                          >
                            {h}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
