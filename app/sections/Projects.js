'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '@/data';
import SectionHeading from '@/app/components/SectionHeading';
import { staggerContainer, scaleIn } from '@/utils/animations';

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

const techColors = {
  React:                'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300',
  'Next.js':            'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
  'Next.js 14':         'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
  'Node.js':            'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  'Express.js':         'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
  'Tailwind CSS':       'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300',
  'Local Storage':      'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
  MongoDB:              'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
  'JWT Authentication': 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300',
  JavaScript:           'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
  'Responsive Design':  'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300',
  default:              'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
};

function ProjectCard({ project }) {
  const techClass = (tech) => techColors[tech] || techColors.default;
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      variants={scaleIn}
      layout
      whileHover={{ y: -8 }}
      className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl dark:hover:shadow-indigo-900/20 transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col"
    >
      {/* Screenshot */}
      <div className="relative h-48 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 overflow-hidden">

        {/* Fallback placeholder — always rendered behind */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-5xl font-bold text-indigo-200 dark:text-indigo-800">
            {project.id.toString().padStart(2, '0')}
          </div>
        </div>

        {/* Project screenshot — sits on top of placeholder */}
        {!imgError && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
            onError={() => setImgError(true)}
          />
        )}

        {/* Category badge */}
        <div className="absolute top-3 right-3 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Features */}
        <div className="mb-4">
          <ul className="space-y-1">
            {project.features.slice(0, 3).map((f) => (
              <li key={f} className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span key={tech} className={`text-xs font-medium px-2.5 py-1 rounded-full ${techClass(tech)}`}>
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-xl text-sm font-medium hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <FiGithub size={16} /> GitHub
          </motion.a>
          {project.demo && project.demo !== '#' ? (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl text-sm font-medium shadow-md shadow-indigo-500/20"
            >
              <FiExternalLink size={16} /> Live Demo
            </motion.a>
          ) : (
            <div className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 rounded-xl text-sm font-medium cursor-not-allowed">
              <FiExternalLink size={16} /> Coming Soon
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of projects I've built to solve real-world problems."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/25'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
