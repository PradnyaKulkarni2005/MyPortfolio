'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaLaptopCode,
  FaUsersCog,
  FaProjectDiagram,
  FaCodeBranch,
  FaChevronDown,
} from 'react-icons/fa';

/**
 * Matches the formal system used across Hero / About: white / #0B1220
 * background, a single teal accent, restrained motion. Layout keeps the
 * vertical "spine" timeline from About's stack schematic for visual
 * continuity, but each row is now a real disclosure — click a role to see
 * what the work actually involved.
 *
 * NOTE: bullets for the GDG and ITSA roles are reasonable defaults based on
 * the role titles, since the source resumes didn't include specifics for
 * those two — worth a quick pass to tailor them to what you actually did.
 */

const experiences = [
  {
    index: '01',
    role: 'Web Development Head',
    org: 'Google Developer Group on Campus',
    period: 'Aug 2025 – Present',
    icon: <FaProjectDiagram />,
    details: [
      'Lead the web development vertical for the campus chapter, setting technical direction for the club\u2019s site and internal tools.',
      'Organize and run hands-on web development workshops and sessions for student members.',
      'Mentor junior contributors on React/Next.js and Git workflows for chapter projects.',
    ],
  },
  {
    index: '02',
    role: 'Web Masters Co-Lead',
    org: 'ITSA',
    period: 'Jun 2025 – Present',
    icon: <FaUsersCog />,
    details: [
      'Co-lead the Web Masters team, coordinating build and maintenance of the ITSA \u2019s Official Website.',
      'Review pull requests and enforce coding standards across a small student developer team.',
      'Build and deployed the tech fest website based on the requirements.',
    ],
  },
  {
    index: '03',
    role: 'Website Developer',
    org: 'Yash Cafe (Freelance)',
    period: 'Jun – Jul 2025',
    icon: <FaLaptopCode />,
    details: [
      'Built a full-stack food ordering platform — menu browsing, order placement, and star-rated reviews.',
      'Integrated the Twilio WhatsApp API to push real-time order alerts to the cafe owner, replacing manual order tracking.',
      'Designed RESTful APIs for order and review management; used MongoDB Atlas with Mongoose for cloud-hosted storage.',
      'Deployed the frontend on Vercel and the backend on Render.',
    ],
  },
  {
    index: '04',
    role: 'Full-Stack Developer Intern',
    org: 'IT Department, PCCOE — Library Management System',
    period: 'Jun 2025',
    icon: <FaCodeBranch />,
    details: [
      'Built a Library Management System covering book cataloging, user management, and issuance/return tracking.',
      'Implemented a JWT-secured admin dashboard with middleware-based role access control.',
      'Added bulk Excel import for books and student records using Multer + ExcelJS.',
      'Automated overdue email reminders with Nodemailer + Node-cron, and visualized circulation analytics with Recharts.',
    ],
  },
];

const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="experience"
      className="relative scroll-mt-24 overflow-hidden bg-white px-6 py-24 transition-colors duration-300 dark:bg-[#0B1220] md:px-16"
    >
      {/* faint static grid, matches Hero/About */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 hidden opacity-[0.06] dark:block"
        style={{
          backgroundImage:
            'linear-gradient(#E2E8F0 1px, transparent 1px), linear-gradient(90deg, #E2E8F0 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      <div className="relative mx-auto max-w-3xl">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-teal-600 dark:bg-teal-400" />
          <span className="font-mono text-xs uppercase tracking-widest text-teal-700 dark:text-teal-400">
            Experience
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl"
        >
          Where I&apos;ve put in the work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mt-3 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300"
        >
          From leading a campus dev team to shipping production systems for real users. Click any
          role for the details.
        </motion.p>

        {/* Timeline */}
        <div className="relative mt-14 pl-8 md:pl-10">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
            style={{ transformOrigin: 'top' }}
            className="absolute left-[3px] top-1 bottom-1 w-px bg-gradient-to-b from-teal-600 via-teal-600/30 to-transparent dark:from-teal-400 dark:via-teal-400/30 md:left-1"
          />

          <div className="flex flex-col gap-4">
            {experiences.map((exp, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* node dot on spine */}
                  <span className="absolute -left-8 top-6 h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400 md:-left-9" />

                  <div className="border border-slate-200 bg-white transition-colors dark:border-white/10 dark:bg-white/[0.02]">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-slate-50 dark:hover:bg-white/[0.03] md:p-6"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-teal-600/25 bg-teal-600/5 text-teal-700 dark:border-teal-400/20 dark:text-teal-400">
                          {exp.icon}
                        </span>
                        <div>
                          <div className="font-mono text-[10px] tracking-widest text-slate-400 dark:text-slate-500">
                            {exp.index} · {exp.period}
                          </div>
                          <h3 className="text-base font-semibold text-slate-900 dark:text-white md:text-lg">
                            {exp.role}
                          </h3>
                          <p className="text-sm text-slate-500 dark:text-slate-400">{exp.org}</p>
                        </div>
                      </div>

                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="shrink-0 text-slate-400 dark:text-slate-500"
                      >
                        <FaChevronDown />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <ul className="space-y-2 border-t border-slate-100 px-5 pb-6 pt-4 dark:border-white/5 md:px-6 md:pl-[4.75rem]">
                            {exp.details.map((line, di) => (
                              <li
                                key={di}
                                className="relative pl-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                              >
                                <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-teal-600 dark:bg-teal-400" />
                                {line}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;