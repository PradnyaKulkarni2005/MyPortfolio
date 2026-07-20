'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe, FaArrowRight } from 'react-icons/fa';

/**
 * Formal, restrained treatment: standard light/dark convention (white,
 * near-black charcoal-navy), a single accent color used sparingly, and one
 * quiet ambient glow + a faint static grid in the background rather than
 * bright multicolor motion. Nothing above ~6% opacity in the backdrop so it
 * reads as texture, not decoration.
 */

const socials = [
  { icon: <FaGithub />, href: 'https://github.com/PradnyaKulkarni2005', label: 'GitHub' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/pradnya-kulkarni-8b92b42b9/', label: 'LinkedIn' },
  { icon: <FaEnvelope />, href: 'mailto:kulkarnipradnya1245@gmail.com', label: 'Email' },
  { icon: <FaGlobe />, href: 'https://pradnyakulkarni.dev', label: 'Portfolio' },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen scroll-mt-20 flex-col items-center justify-center overflow-hidden bg-white px-6 py-24 text-center transition-colors duration-300 dark:bg-[#0B1220]"
    >
      {/* faint static grid — texture, not decoration */}
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

      {/* one quiet ambient glow, single accent color, low opacity */}
      <div className="animate-ambient-drift pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-600/[0.06] blur-[110px] dark:bg-teal-400/[0.07]" />

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto w-full max-w-2xl space-y-6"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* Availability tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 border border-slate-200 bg-slate-50 px-3 py-1.5 font-mono text-xs tracking-wide text-slate-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-teal-600 dark:bg-teal-400" />
          </span>
          Open to opportunities · Pune, India
        </motion.div>

        <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-6xl dark:text-white">
          Hi, I&apos;m <span className="text-teal-700 dark:text-teal-400">Pradnya</span>
        </h1>

        <TypeAnimation
          sequence={[
  'Transforming ideas into impactful software.',
  2200,
  'Building scalable and reliable systems.',
  2200,
  'Solving real-world problems with technology.',
  2200,
  'Always learning. Always building.',
  2200,
]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="block text-lg font-medium text-slate-500 dark:text-slate-400"
        />

        <p className="mx-auto max-w-md text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg">
          I build things that matter — scalable, user-focused, and production-ready.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 bg-slate-900 px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
          >
            View My Work
            <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="mailto:kulkarnipradnya1245@gmail.com"
            className="border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 dark:border-white/15 dark:text-slate-200 dark:hover:border-white/30 dark:hover:bg-white/5"
          >
            Get in Touch
          </a>
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-3 pt-2">
          {socials.map(({ icon, href, label }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center border border-slate-200 text-lg text-slate-500 transition-colors hover:border-slate-400 hover:text-slate-900 dark:border-white/10 dark:text-slate-400 dark:hover:border-white/30 dark:hover:text-white"
            >
              {icon}
            </a>
          ))}
        </div>
      </motion.div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-[11px] uppercase tracking-widest text-slate-400 md:flex dark:text-slate-500"
      >
        Scroll
        <span className="h-4 w-px bg-slate-300 dark:bg-slate-600" />
      </motion.a>
    </section>
  );
};

export default Hero;