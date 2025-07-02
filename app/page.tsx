'use client';

import React from 'react';
import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import Projects from '@/app/components/Projects';
import About from '@/app/components/About';
import Achievements from '@/app/components/Achievements';
import { motion } from 'framer-motion';


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Hero />
        <div className="overflow-hidden leading-none">
  <svg
    className="w-full h-24 fill-indigo-200 dark:fill-indigo-800"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
  >
    <path d="M0,64L80,80C160,96,320,128,480,154.7C640,181,800,203,960,197.3C1120,192,1280,160,1360,144L1440,128V320H1360C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320H0Z" />
  </svg>
</div>



        <About />
        <div className="overflow-hidden leading-none">
  <svg
    className="w-full h-24 fill-indigo-200 dark:fill-indigo-800"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
  >
    <path d="M0,64L80,80C160,96,320,128,480,154.7C640,181,800,203,960,197.3C1120,192,1280,160,1360,144L1440,128V320H1360C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320H0Z" />
  </svg>
</div>

        <Projects />
        <div className="overflow-hidden leading-none">
  <svg className="w-full h-24 fill-indigo-100 dark:fill-indigo-900" viewBox="0 0 1440 320" preserveAspectRatio="none">
    <path d="M0,192L80,181.3C160,171,320,149,480,144C640,139,800,149,960,170.7C1120,192,1280,224,1360,240L1440,256V0H1360C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0H0Z" />
  </svg>
</div>
        <Achievements />
        {/* Wavy Top Separator */}
<div className="overflow-hidden leading-none rotate-180">
  <svg
    className="w-full h-16 fill-indigo-100 dark:fill-indigo-900"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
  >
    <path d="M0,64L80,80C160,96,320,128,480,154.7C640,181,800,203,960,197.3C1120,192,1280,160,1360,144L1440,128V0H1360C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0H0Z" />
  </svg>
</div>

{/* Footer */}
<footer className="bg-gray-100 dark:bg-gray-900 py-8 px-6 text-center text-sm text-gray-600 dark:text-gray-400">
  <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-4">
    <div className="flex gap-6 text-xl text-gray-600 dark:text-gray-300">
      <a
        href="https://github.com/PradnyaKulkarni2005"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-indigo-600 transition"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        href="https://linkedin.com/in/pradnya-kulkarni" // Update if needed
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-indigo-600 transition"
      >
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a
        href="mailto:pradnya@example.com" // Update
        className="hover:text-indigo-600 transition"
      >
        <i className="fas fa-envelope"></i>
      </a>
    </div>
    <p>
      &copy; {new Date().getFullYear()} <span className="font-semibold">Pradnya Kulkarni</span>. All rights reserved.
    </p>
  </div>
</footer>

      </main>

      </>
  
  );
}
