'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiMail, FiPhone, FiHeart } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import { navLinks, personalInfo } from '@/data';

export default function Footer() {
  const scrollTo = (href) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = navLinks.filter((l) =>
    ['#about', '#projects', '#experience', '#contact'].includes(l.href)
  );

  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">
              {personalInfo.name.split(' ')[0]}
              <span className="text-indigo-400">.</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Building modern web experiences with React & Next.js. Open to new opportunities.
            </p>
            <div className="flex gap-3">
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={18} />
              </motion.a>
              {personalInfo.linkedin && (
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={18} />
                </motion.a>
              )}
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.15, y: -2 }}
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <FiMail size={18} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 uppercase tracking-wider text-xs">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-gray-400 hover:text-indigo-400 text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 uppercase tracking-wider text-xs">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <FiMail className="text-indigo-400 flex-shrink-0" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-indigo-400 transition-colors break-all">
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <FiPhone className="text-indigo-400 flex-shrink-0" />
                <a href={`tel:${personalInfo.phone}`} className="hover:text-indigo-400 transition-colors">
                  {personalInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <FiGithub className="text-indigo-400 flex-shrink-0" />
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                  GitHub Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with <FiHeart className="text-red-500" size={14} /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
