'use client';

import { motion } from 'framer-motion';
import { FaTrophy, FaCode, FaChartBar, FaStar, FaMedal } from 'react-icons/fa';
import { FiAward } from 'react-icons/fi';
import { certificates } from '@/data';
import SectionHeading from '@/app/components/SectionHeading';
import { staggerContainer, scaleIn } from '@/utils/animations';

const iconMap = {
  FaTrophy: FaTrophy,
  FaCode: FaCode,
  FaChartBar: FaChartBar,
  FaStar: FaStar,
  FaMedal: FaMedal,
};

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Certifications"
          subtitle="Professional achievements and certifications that validate my skills."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certificates.map((cert) => {
            const Icon = iconMap[cert.icon] || FiAward;
            return (
              <motion.div
                key={cert.id}
                variants={scaleIn}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-indigo-900/20 transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                {/* Top gradient band */}
                <div className={`h-2 bg-gradient-to-r ${cert.color}`} />

                <div className="p-6">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <Icon size={24} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-3">
                    {cert.issuer}
                  </p>

                  {/* Category badge */}
                  <span className="inline-block text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full">
                    {cert.category}
                  </span>

                  {/* Hover shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-indigo-500/0 group-hover:from-white/5 group-hover:to-indigo-500/5 transition-all duration-500 pointer-events-none rounded-2xl" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
