'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiGithub, FiMail, FiDownload, FiArrowDown } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import { personalInfo, typingWords } from '@/data';
import { useTypingEffect } from '@/hooks/useTypingEffect';

export default function Hero() {
  const typedText = useTypingEffect(typingWords);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 15, 0], y: [0, 25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(99,102,241,0.4) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
          {/* Left – Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-indigo-400 font-medium mb-3 tracking-wider uppercase text-sm"
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight"
            >
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </motion.h1>

            {/* Typing effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl text-gray-300 mb-6 h-8 flex items-center justify-center lg:justify-start gap-2"
            >
              <span className="text-indigo-400 font-semibold">{typedText}</span>
              <span className="w-0.5 h-6 bg-indigo-400 animate-pulse" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-base sm:text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              {personalInfo.bio.substring(0, 180)}...
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99,102,241,0.5)' }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg shadow-indigo-500/30 flex items-center gap-2"
              >
                <FiMail size={18} />
                Contact Me
              </motion.button>
              <motion.a
                href={personalInfo.resumeUrl}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3 border-2 border-indigo-500 text-indigo-300 rounded-xl font-semibold hover:bg-indigo-500/10 transition-colors flex items-center gap-2"
              >
                <FiDownload size={18} />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              <span className="text-gray-500 text-sm">Follow me:</span>
              <div className="flex gap-3">
                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-indigo-600 text-white flex items-center justify-center transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub size={20} />
                </motion.a>
                {personalInfo.linkedin && (
                  <motion.a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -3 }}
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-blue-600 text-white flex items-center justify-center transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={20} />
                  </motion.a>
                )}
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-indigo-600 text-white flex items-center justify-center transition-colors"
                  aria-label="Email"
                >
                  <FiMail size={20} />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right – Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex-shrink-0"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1 animate-pulse-slow">
                <div className="w-full h-full rounded-full bg-slate-900" />
              </div>

              {/* Outer spinning ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-3 rounded-full border-2 border-dashed border-indigo-500/30"
              />

              {/* Image */}
              <div className="absolute inset-1 rounded-full overflow-hidden bg-gradient-to-br from-indigo-800 to-purple-900">
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  className="object-cover rounded-full"
                  style={{ objectPosition: 'center 5%' }}
                  priority
                />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 rounded-2xl px-4 py-2 shadow-xl flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-200 whitespace-nowrap">
                  Open to Work
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-gray-500 flex items-start justify-center pt-1"
          >
            <div className="w-1 h-2 bg-indigo-400 rounded-full" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
