'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="scroll-mt-20 min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-24 transition-all duration-300
      bg-gradient-to-br from-[#FFFDF9] via-[#F0F4F8] to-[#EAF6F6]
      dark:from-[#1E293B] dark:via-[#111827] dark:to-[#0F172A]">

      {/* Left - Content */}
      <motion.div
        className="w-full md:w-1/2 space-y-8 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-slate-800 dark:text-white">
          Hello, I&apos; <br />
          <span className="bg-gradient-to-r from-[#663780]  to-[#e349f1] dark:from-[#A3D9A5] dark:via-[#B8C1EC] dark:to-[#C8E6C9] bg-clip-text text-transparent">
            Pradnya Kulkarni
          </span>{' '}
          👋
        </h1>

        <TypeAnimation
  sequence={[
    'Full-Stack Developer',
    2000,
    'UI/UX Enthusiast',
    2000,
    'Tech Explorer',
    2000,
    'Problem Solver',
    2000,
    'Lifelong Learner',
    2000,
    'Coding with Innovation',
    2000,
    'DSA Enthusiast',
    2000,
    'Designing with purpose',
    2000,
    'Creating Seamless Experiences',
    2000,
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
  className="text-xl font-semibold text-slate-600 dark:text-slate-300 py-4 "
/>


        {/* Info Card */}
        <div className="bg-[#FAFAFC] dark:bg-slate-800/60 backdrop-blur-md rounded-xl shadow-md px-6 py-4 space-y-2 text-slate-700 dark:text-slate-200">
          <ul className="text-md font-medium space-y-1">
            <li>🎓 IT Undergrad at PCCOE</li>
            <li>📍 Pune, Maharashtra, India</li>
          </ul>
          <p className="text-base md:text-lg mt-2">
            I love building beautiful, scalable, and meaningful digital experiences. My mission? Turning ideas into impactful solutions — with creativity and code.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center md:justify-start gap-4">
          <a
            href="https://www.linkedin.com/in/pradnya-kulkarni-8b92b42b9"
            className="px-6 py-3 rounded-full font-semibold text-slate-800 bg-gradient-to-r from-[#FDE2E4] to-[#CDEDFD] hover:from-[#FACBD2] hover:to-[#BDE1FF] dark:text-black dark:from-[#A3D9A5] dark:to-[#B8C1EC] shadow-md hover:shadow-lg transition-all"
          >
            Connect with Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="mt-6 flex justify-center md:justify-start gap-6 text-2xl">
          {[
            {
              icon: <FaGithub />,
              href: 'https://github.com/PradnyaKulkarni2005',
              label: 'GitHub',
            },
            {
              icon: <FaLinkedin />,
              href: 'https://www.linkedin.com/in/pradnya-kulkarni-8b92b42b9/',
              label: 'LinkedIn',
            },
            {
              icon: <FaEnvelope />,
              href: 'mailto:kulkarnipradnya1245@gmail.com',
              label: 'Email',
            },
            {
              icon: <FaGlobe />,
              href: 'https://pradnyakulkarni.dev',
              label: 'Portfolio',
            },
          ].map(({ icon, href, label }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition transform hover:scale-110"
            >
              {icon}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Right - Profile Image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center mb-12 md:mb-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-tr from-[#FBCFE8] to-[#CDEDFD] dark:from-[#B8C1EC] dark:to-[#A3D9A5] p-1 shadow-xl">
          <div className="rounded-full overflow-hidden w-full h-full">
            <Image
              src="/MyPhoto.png"
              alt="Pradnya Kulkarni"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
