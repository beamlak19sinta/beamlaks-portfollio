'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';

export default function SectionHeading({ title, subtitle, light = false }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="text-center mb-14"
    >
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          light ? 'text-white' : 'text-gray-900 dark:text-white'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg max-w-xl mx-auto ${
            light ? 'text-indigo-200' : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className="mt-4 flex items-center justify-center gap-2">
        <span className="h-1 w-12 rounded-full bg-indigo-500" />
        <span className="h-1 w-4  rounded-full bg-indigo-400" />
        <span className="h-1 w-2  rounded-full bg-indigo-300" />
      </div>
    </motion.div>
  );
}
