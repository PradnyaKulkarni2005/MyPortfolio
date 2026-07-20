'use client';

import React from 'react';
import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import Projects from '@/app/components/Projects';
import About from '@/app/components/About';
import Achievements from '@/app/components/Achievements';
import Experience from '@/app/components/Experience';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

/** Thin, quiet divider used between sections instead of the old indigo wave SVGs —
 *  keeps the same restrained system used inside every section (hairline + teal accent). */
const SectionDivider = () => (
  <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 md:px-16">
    <span className="h-px flex-1 bg-slate-200 dark:bg-white/10" />
    <span className="h-1.5 w-1.5 rounded-full bg-teal-600 dark:bg-teal-400" />
    <span className="h-px flex-1 bg-slate-200 dark:bg-white/10" />
  </div>
);

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-[#0B1220] dark:text-white">
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Achievements />

        {/* Footer */}
        <footer className="border-t border-slate-200 bg-white px-6 py-10 text-center dark:border-white/10 dark:bg-[#0B1220]">
          <div className="mx-auto flex max-w-screen-xl flex-col items-center gap-5">
            <div className="flex gap-4">
              <a
                href="https://github.com/PradnyaKulkarni2005"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center border border-slate-200 text-slate-600 transition-colors hover:border-teal-600/40 hover:text-teal-700 dark:border-white/10 dark:text-slate-300 dark:hover:border-teal-400/40 dark:hover:text-teal-400"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/pradnya-kulkarni-8b92b42b9/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center border border-slate-200 text-slate-600 transition-colors hover:border-teal-600/40 hover:text-teal-700 dark:border-white/10 dark:text-slate-300 dark:hover:border-teal-400/40 dark:hover:text-teal-400"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:kulkarnipradnya1245@gmail.com"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center border border-slate-200 text-slate-600 transition-colors hover:border-teal-600/40 hover:text-teal-700 dark:border-white/10 dark:text-slate-300 dark:hover:border-teal-400/40 dark:hover:text-teal-400"
              >
                <FaEnvelope />
              </a>
            </div>
            <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
              &copy; {new Date().getFullYear()} <span className="text-slate-700 dark:text-slate-200">Pradnya Kulkarni</span>. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}