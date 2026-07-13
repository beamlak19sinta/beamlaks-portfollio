'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '@/data';
import SectionHeading from '@/app/components/SectionHeading';
import { fadeInLeft, fadeInRight, fadeInUp } from '@/utils/animations';

const contactDetails = [
  {
    icon: FiMail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: personalInfo.location,
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'beamlak19sinta',
    href: personalInfo.github,
    external: true,
  },
];

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-sm';

export default function Contact() {
  const [form, setForm]         = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors]     = useState({});
  const [status, setStatus]     = useState('idle'); // idle | loading | success | error

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required.';
    if (!form.email.trim())   e.email   = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email.';
    if (!form.subject.trim()) e.subject = 'Subject is required.';
    if (!form.message.trim()) e.message = 'Message is required.';
    else if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters.';
    return e;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus('loading');
    // Simulate sending — replace with real email service (e.g. EmailJS, Resend)
    await new Promise((res) => setTimeout(res, 1500));
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or just want to say hi? I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info side */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Let&apos;s work together
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                I&apos;m currently open to new opportunities. Whether you have a question or just want to connect, feel free to reach out!
              </p>
            </div>

            {contactDetails.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <div className="w-11 h-11 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0">
                  <item.icon size={18} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 dark:text-gray-500">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="text-sm font-medium text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-100">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social row */}
            <div className="flex gap-3 pt-2">
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.12, y: -2 }}
                className="w-11 h-11 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white hover:border-indigo-600 transition-all"
                aria-label="GitHub"
              >
                <FiGithub size={18} />
              </motion.a>
              {personalInfo.linkedin && (
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.12, y: -2 }}
                  className="w-11 h-11 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white hover:border-blue-600 transition-all"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={18} />
                </motion.a>
              )}
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.12, y: -2 }}
                className="w-11 h-11 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white hover:border-indigo-600 transition-all"
                aria-label="Email"
              >
                <FiMail size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Form side */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`${inputClass} ${errors.name ? 'border-red-400 focus:ring-red-400' : ''}`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <FiAlertCircle size={11} /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`${inputClass} ${errors.email ? 'border-red-400 focus:ring-red-400' : ''}`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <FiAlertCircle size={11} /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry..."
                  className={`${inputClass} ${errors.subject ? 'border-red-400 focus:ring-red-400' : ''}`}
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <FiAlertCircle size={11} /> {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project or just say hello..."
                  className={`${inputClass} resize-none ${errors.message ? 'border-red-400 focus:ring-red-400' : ''}`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <FiAlertCircle size={11} /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
                className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                  status === 'success'
                    ? 'bg-emerald-500 text-white cursor-default'
                    : status === 'loading'
                    ? 'bg-indigo-400 text-white cursor-not-allowed'
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-xl'
                }`}
              >
                {status === 'loading' && (
                  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                )}
                {status === 'success' && <FiCheckCircle size={18} />}
                {status === 'idle' && <FiSend size={16} />}
                {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
              </motion.button>

              {status === 'success' && (
                <motion.p
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  className="text-center text-sm text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-2"
                >
                  <FiCheckCircle />
                  Thank you! I&apos;ll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
