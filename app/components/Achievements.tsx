'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaChartLine } from 'react-icons/fa';

/**
 * Matches the formal system used across Hero / About / Experience / Projects:
 * white / #0B1220 background, faint static grid, single teal accent,
 * bordered (non-rounded) cards, mono index labels. Descriptions removed —
 * cards are now image + title only.
 */

const achievements = [
  { title: 'AWS Cloud Practitioner Essentials', image: '/certificates/awscloud.png' },
  { title: 'AWS Machine Learning Foundations', image: '/certificates/awsml.png' },
  { title: 'DevOps Fundamentals', image: '/certificates/Docker.png' },
  { title: 'Introduction to Kubernetes', image: '/certificates/Kubernetes.png' },
  { title: 'Responsive Web Design', image: '/certificates/responsiveweb.png' },
  { title: 'Problem Solving — HackerRank', image: '/certificates/hackerrank.png' },
  { title: 'SQL Basics — HackerRank', image: '/certificates/sqlbasic.png' },
  { title: 'Full-Stack Web Development', image: '/certificates/udemy.png' },
  { title: 'OOPs in Java', image: '/certificates/oopsinjava.png' },
  { title: 'Intro to Cybersecurity', image: '/certificates/cybersecurity.png' },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="relative scroll-mt-20 overflow-hidden bg-white px-6 py-24 transition-colors duration-300 dark:bg-[#0B1220] md:px-16"
    >
      {/* faint static grid, matches the rest of the site */}
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

      <div className="relative mx-auto max-w-6xl">
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
            Achievements
          </span>
        </motion.div>

        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl"
            >
              Certifications &amp; milestones
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="mt-3 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300"
            >
              Certificates and coursework across cloud, DevOps, and core development.
            </motion.p>
          </div>

          <motion.a
            href="https://codolio.com/profile/pjk1245"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 dark:border-white/15 dark:text-slate-200 dark:hover:border-white/30 dark:hover:bg-white/5"
          >
            <FaChartLine className="text-sm text-teal-700 dark:text-teal-400" />
            View DSA &amp; Dev Progress
          </motion.a>
        </div>

        {/* Certificates strip */}
        <div className="mt-14 -mx-6 overflow-x-auto px-6 md:-mx-16 md:px-16">
          <div className="flex min-w-max gap-5">
            {achievements.map((achieve, idx) => (
              <motion.div
                key={achieve.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="w-[260px] flex-shrink-0 border border-slate-200 bg-white transition-colors hover:border-teal-600/40 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-teal-400/30 sm:w-[280px]"
              >
                <div className="relative h-40 w-full border-b border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/[0.03]">
                  <Image src={achieve.image} alt={achieve.title} fill className="object-contain p-4" />
                  <span className="absolute left-2 top-2 bg-white/90 px-1.5 py-0.5 font-mono text-[10px] tracking-widest text-slate-400 backdrop-blur-sm dark:bg-[#0B1220]/85 dark:text-slate-500">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold leading-snug text-slate-900 dark:text-white">
                    {achieve.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;