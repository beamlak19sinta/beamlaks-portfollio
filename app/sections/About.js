'use client';

import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiPhone, FiGithub, FiDownload, FiCode, FiAward, FiBriefcase, FiLayers } from 'react-icons/fi';
import { personalInfo } from '@/data';
import SectionHeading from '@/app/components/SectionHeading';
import { fadeInLeft, fadeInRight, staggerContainer, fadeInUp } from '@/utils/animations';

const stats = [
  { label: 'Projects Completed', value: '4+',  icon: FiLayers,   color: 'from-indigo-500 to-blue-600' },
  { label: 'Technologies',       value: '12+', icon: FiCode,     color: 'from-purple-500 to-violet-600' },
  { label: 'Certifications',     value: '4',   icon: FiAward,    color: 'from-emerald-500 to-teal-600' },
  { label: 'Year of Internship', value: '2025',icon: FiBriefcase, color: 'from-orange-400 to-amber-600' },
];

const infoItems = [
  { icon: FiMapPin, label: 'Location', value: personalInfo.location },
  { icon: FiMail,   label: 'Email',    value: personalInfo.email,  href: `mailto:${personalInfo.email}` },
  { icon: FiPhone,  label: 'Phone',    value: personalInfo.phone,  href: `tel:${personalInfo.phone}` },
  { icon: FiGithub, label: 'GitHub',   value: 'beamlak19sinta',    href: personalInfo.github, external: true },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me better — my background, passions, and what drives me."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* ── Left: Stats grid ── */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Stats cards */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={fadeInUp}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all"
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-3 shadow-md`}>
                    <s.icon size={20} className="text-white" />
                  </div>
                  <div className="text-3xl font-extrabold text-gray-900 dark:text-white mb-1">
                    {s.value}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact info cards */}
            <div className="space-y-3">
              {infoItems.map((item) => (
                <motion.div
                  key={item.label}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0">
                    <item.icon size={17} className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-400 dark:text-gray-500 mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className="text-sm font-medium text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors truncate block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-100 truncate">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Bio + name + download ── */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            {/* Name & title */}
            <div className="mb-6">
              <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-1">
                {personalInfo.name}
              </h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-base">
                {personalInfo.title}
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="h-1 w-10 rounded-full bg-indigo-500" />
                <span className="h-1 w-4 rounded-full bg-indigo-400" />
              </div>
            </div>

            {/* Bio paragraph */}
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base mb-8">
              {personalInfo.bio}
            </p>

            {/* Highlight tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['React', 'Next.js', 'JavaScript', 'Tailwind CSS', 'Node.js', 'UI/UX'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 text-sm font-medium bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Download button */}
            <motion.a
              href={personalInfo.resumeUrl}
              download
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-xl transition-shadow w-fit"
            >
              <FiDownload size={18} />
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
