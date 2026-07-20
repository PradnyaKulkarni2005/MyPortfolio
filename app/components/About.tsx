'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import {
  FaCode,
  FaLaptopCode,
  FaBrain,
  FaDatabase,
  FaCloud,
  FaTools,
  FaRocket,
  FaLightbulb,
  FaUsers,
  FaQuoteLeft,
} from 'react-icons/fa';

/**
 * Design concept: "Systems blueprint, warmed up"
 * Pradnya builds across the stack — languages, frontend/backend, cloud,
 * AI/ML, data, tooling — so the skill map keeps its schematic "trace" motif,
 * but the opening now reads as a genuine personal introduction: how she
 * works and what pulls her into a project, not a résumé restated.
 */



const principles = [
  {
    icon: <FaLightbulb />,
    title: "Think",
    copy: "Understand the problem before writing code.",
  },
  {
    icon: <FaCode />,
    title: "Build",
    copy: "Develop clean, efficient, and scalable solutions.",
  },
  {
    icon: <FaRocket />,
    title: "Improve",
    copy: "Learn from every project and continuously grow.",
  },
];

const stack = [
  {
    index: '01',
    tag: 'FOUNDATIONS',
    title: 'Languages & Core CS',
    icon: <FaCode />,
    items: ['C++', 'Python', 'Java', 'JavaScript', 'TypeScript', 'DSA', 'OOP', 'DBMS', 'OS'],
  },
  {
    index: '02',
    tag: 'FRONTEND / BACKEND',
    title: 'Full-Stack Development',
    icon: <FaLaptopCode />,
    items: ['React', 'Next.js', 'Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Tailwind CSS'],
  },
  {
    index: '03',
    tag: 'INFRA & DEPLOYMENT',
    title: 'Cloud & DevOps',
    icon: <FaCloud />,
    items: ['AWS (EC2, S3)', 'Docker', 'Kubernetes (Basics)', 'Linux', 'CI/CD'],
  },
  {
    index: '04',
    tag: 'MODELS & PIPELINES',
    title: 'AI / ML & NLP',
    icon: <FaBrain />,
    items: ['BERT', 'DistilBERT', 'DenseNet-121', 'SVM', 'Grad-CAM', 'NLP', 'LLM Integration'],
  },
  {
    index: '05',
    tag: 'STORAGE LAYER',
    title: 'Databases',
    icon: <FaDatabase />,
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase'],
  },
  {
    index: '06',
    tag: 'WORKFLOW',
    title: 'Tools & Platforms',
    icon: <FaTools />,
    items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Vercel', 'Render'],
  },
];

function StatValue({
  value,
  decimals = 0,
  suffix = '',
}: {
  value: number;
  decimals?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.3,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function CornerBrackets({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`}>
      <span className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-teal-500/60 dark:border-teal-400/60" />
      <span className="absolute -right-px -top-px h-3 w-3 border-r-2 border-t-2 border-teal-500/60 dark:border-teal-400/60" />
      <span className="absolute -bottom-px -left-px h-3 w-3 border-b-2 border-l-2 border-teal-500/60 dark:border-teal-400/60" />
      <span className="absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-teal-500/60 dark:border-teal-400/60" />
    </div>
  );
}

const About = () => {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden bg-[#F5F7FA] px-6 py-24 transition-colors duration-300 dark:bg-[#0A1420] md:px-16"
    >
      {/* faint blueprint grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(#2DD4BF 1px, transparent 1px), linear-gradient(90deg, #2DD4BF 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* ambient glow blobs for warmth */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 animate-float-slow rounded-full bg-gradient-to-br from-teal-400/25 to-cyan-300/10 blur-3xl dark:from-teal-400/15 dark:to-cyan-300/5" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 animate-float rounded-full bg-gradient-to-br from-amber-300/20 to-orange-200/10 blur-3xl dark:from-amber-400/10 dark:to-orange-300/5" />

      <div className="relative mx-auto max-w-5xl">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-teal-500 dark:bg-teal-400" />
          <span className="font-mono text-xs uppercase tracking-widest text-teal-600 dark:text-teal-400">
            About Me
          </span>
        </motion.div>

        {/* Intro panel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative border border-slate-200 bg-white/70 p-8 shadow-sm backdrop-blur-sm dark:border-teal-400/10 dark:bg-white/[0.02] md:p-10"
        >
          <CornerBrackets />
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            Building Solutions That Matter
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg">
  B.Tech IT @ PCCOE Pune (CGPA: 9.16) with hands-on experience building full-stack applications, designing REST APIs, and deploying scalable solutions on cloud platforms. Passionate about cloud computing, DevOps, and backend engineering, with experience in Docker, CI/CD, AWS, and integrating AI/ML capabilities into real-world products.

</p>



          <div className="mt-6 flex items-start gap-3 border-t border-slate-200 pt-6 dark:border-white/10">
            <FaQuoteLeft className="mt-1 shrink-0 text-teal-500/60 dark:text-teal-400/50" />
            <p className="text-base italic text-slate-500 dark:text-slate-400">
              I&apos;d rather ship something real and slightly rough than something perfect that
              never leaves my laptop.
            </p>
          </div>
        </motion.div>

        {/* How I work */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden border border-slate-200 bg-white/70 p-5 backdrop-blur-sm transition-colors hover:border-teal-500/50 dark:border-teal-400/10 dark:bg-white/[0.02] dark:hover:border-teal-400/40"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-500/10 text-teal-600 transition-transform duration-300 group-hover:scale-110 dark:text-teal-400">
                {p.icon}
              </span>
              <h3 className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">
                {p.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {p.copy}
              </p>
            </motion.div>
          ))}
        </div>

       

        {/* Stack schematic */}
        <div className="relative mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10 text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            How it all connects
          </motion.h3>

          <div className="relative pl-8 md:pl-10">
            {/* animated trace / spine */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              viewport={{ once: true }}
              style={{ transformOrigin: 'top' }}
              className="absolute left-[3px] top-1 bottom-1 w-px bg-gradient-to-b from-teal-500 via-teal-500/40 to-transparent dark:from-teal-400 dark:via-teal-400/40 md:left-1"
            />

            <div className="flex flex-col gap-6">
              {stack.map((layer, i) => (
                <motion.div
                  key={layer.index}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  {/* node dot on the spine */}
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.12 + 0.3 }}
                    viewport={{ once: true }}
                    className="absolute -left-8 top-6 h-2 w-2 animate-pulse-soft rounded-full bg-teal-500 shadow-[0_0_0_3px_rgba(45,212,191,0.15)] dark:bg-teal-400 md:-left-9"
                  />

                  <div className="relative overflow-hidden border border-slate-200 bg-white/70 p-5 backdrop-blur-sm transition-all duration-300 hover:border-teal-500/50 hover:shadow-[0_0_24px_-8px_rgba(45,212,191,0.35)] dark:border-teal-400/10 dark:bg-white/[0.02] dark:hover:border-teal-400/40 md:p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-teal-500/30 bg-teal-500/5 text-teal-600 transition-colors group-hover:bg-teal-500/10 dark:border-teal-400/20 dark:text-teal-400">
                          {layer.icon}
                        </span>
                        <div>
                          <div className="font-mono text-[10px] tracking-widest text-amber-600 dark:text-amber-400">
                            {layer.index} · {layer.tag}
                          </div>
                          <h3 className="text-base font-semibold text-slate-900 dark:text-white md:text-lg">
                            {layer.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <ul className="mt-4 flex flex-wrap gap-2">
                      {layer.items.map((item) => (
                        <li
                          key={item}
                          className="relative overflow-hidden border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs text-slate-600 transition-colors group-hover:border-teal-500/30 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300"
                        >
                          <span className="pointer-events-none absolute inset-0 animate-shimmer opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;