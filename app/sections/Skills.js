'use client';

import { motion } from 'framer-motion';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql,
  SiGit, SiGithub, SiVisualstudiocode, SiPostman, SiVercel,
} from 'react-icons/si';
import { FaCheck } from 'react-icons/fa';
import SectionHeading from '@/app/components/SectionHeading';
import { skills } from '@/data';
import { staggerContainer, fadeInUp, scaleIn } from '@/utils/animations';

const iconMap = {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql,
  SiGit, SiGithub, SiVisualstudiocode, SiPostman, SiVercel,
};

const categoryColors = {
  frontend: 'from-blue-500 to-indigo-600',
  backend:  'from-green-500 to-emerald-600',
  database: 'from-orange-400 to-amber-600',
  tools:    'from-purple-500 to-violet-600',
};

function SkillCard({ skill }) {
  const Icon = iconMap[skill.icon];
  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ scale: 1.06, y: -4 }}
      className="group bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700"
    >
      <div className="flex items-center gap-3 mb-3">
        {Icon && (
          <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 transition-colors">
            <Icon size={22} />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-800 dark:text-white truncate">{skill.name}</p>
          <p className="text-xs text-gray-400">{skill.level}%</p>
        </div>
      </div>
      {/* Progress bar */}
      <div className="h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
        />
      </div>
    </motion.div>
  );
}

function CategoryBlock({ title, items, gradient }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className={`h-6 w-1 rounded-full bg-gradient-to-b ${gradient}`} />
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">{title}</h3>
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 gap-3"
      >
        {items.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="A comprehensive look at the tools and technologies I work with daily."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <CategoryBlock title="Frontend" items={skills.frontend} gradient={categoryColors.frontend} />
          <CategoryBlock title="Backend"  items={skills.backend}  gradient={categoryColors.backend} />
          <CategoryBlock title="Database" items={skills.database} gradient={categoryColors.database} />
          <CategoryBlock title="Tools"    items={skills.tools}    gradient={categoryColors.tools} />
        </div>

        {/* Soft Skills */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 text-white"
        >
          <h3 className="text-xl font-bold mb-6 text-center">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.soft.map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.08 }}
                className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-xl px-5 py-2.5"
              >
                <FaCheck size={12} className="text-emerald-300" />
                <span className="font-medium text-sm">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
