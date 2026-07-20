'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useKeenSlider } from 'keen-slider/react';
import { motion } from 'framer-motion';
import 'keen-slider/keen-slider.min.css';

/**
 * Matches the formal system used across Hero / About / Experience: white /
 * #0B1220 background, faint static grid, a single teal accent, bordered
 * (non-rounded) cards, and mono-labeled index numbers instead of emoji or
 * indigo pill badges.
 */

type ProjectType = {
  name: string;
  description: string;
  images: string[];
  github: string;
  demo: string;
  tech: string[];
};

const allProjects: ProjectType[] = [
  {
    name: 'DreamCanvas',
    description:
      'AI-powered career coaching platform that generates personalized learning roadmaps, detects fraudulent job postings, and provides an intelligent career assistant using LLMs.',
    images: [
      '/projects/dreamcanvas/image1.jpg',
      '/projects/dreamcanvas/image2.png',
      '/projects/dreamcanvas/image3.png',
      '/projects/dreamcanvas/image4.jpg',
      '/projects/dreamcanvas/image5.jpg',
      '/projects/dreamcanvas/image6.jpg',
      '/projects/dreamcanvas/image7.png',
    ],
    github: 'https://github.com/PradnyaKulkarni2005/DreamCanvas.git',
    demo: 'https://dreamcanvas-murex.vercel.app',
    tech: ['Next.js', 'FastAPI', 'TypeScript', 'Supabase', 'Groq LLM', 'BERT', 'SVM'],
  },
  
  
  {
    name: 'Yash Dabeli',
    description:
      'Full-stack food ordering platform with online ordering, customer reviews, and real-time WhatsApp notifications for order management.',
    images: [
      '/projects/yashdabeli/image1.png',
      '/projects/yashdabeli/image2.png',
      '/projects/yashdabeli/image3.png',
      '/projects/yashdabeli/image4.png',
    ],
    github: 'https://github.com/PradnyaKulkarni2005/YashDabeli.git',
    demo: 'https://yash-dabeli.vercel.app',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Twilio API'],
  },
  {
    name: 'HerWorld',
    description:
      'Community platform for women offering discussion forums, curated resources, and an interactive space for networking, learning, and support.',
    images: [
      '/projects/herworld/image1.png',
      '/projects/herworld/image2.png',
      '/projects/herworld/image3.png',
      '/projects/herworld/image4.png',
      '/projects/herworld/image5.png',
    ],
    github: 'https://github.com/PradnyaKulkarni2005/SHE_SOLVES_TriadCoders.git',
    demo: 'https://herworld-women.vercel.app',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    name: 'Project Diary',
    description:
      'Role-based academic project management system enabling student group formation, project submission, faculty evaluation, and secure workflow management.',
    images: [
      '/projects/projectdiary/image1.png',
      '/projects/projectdiary/image2.png',
      '/projects/projectdiary/image3.png',
      '/projects/projectdiary/image4.png',
    ],
    github: 'https://github.com/PradnyaKulkarni2005/ProjectDiary.git',
    demo: '',
    tech: ['React', 'Node.js', 'Express.js', 'Supabase', 'JWT'],
  },
  {
    name: 'Brainalyze',
    description:
      'AI-powered brain MRI analysis platform that detects tumors using DenseNet-121 and provides Grad-CAM visualizations with automated diagnostic reports.',
    images: [
      '/projects/brainalyze/image1.png',
      '/projects/brainalyze/image2.png',
      '/projects/brainalyze/image3.png',
      '/projects/brainalyze/image4.png',
      '/projects/brainalyze/image5.png',
    ],
    github: 'https://github.com/PradnyaKulkarni2005/Brainalyze.git',
    demo: '',
    tech: ['React', 'Python', 'DenseNet-121', 'Grad-CAM', 'OpenCV'],
  },
  {
    name: 'Library Management System',
    description:
      'Full-stack library management system featuring book cataloging, user management, issue/return tracking, overdue reminders, and analytics dashboard.',
    images: [
      '/projects/library/image1.png',
      '/projects/library/image2.png',
      '/projects/library/image3.png',
      '/projects/library/image4.png',
    ],
    github: 'https://github.com/PradnyaKulkarni2005/Library-Management-System.git',
    demo: 'https://library-management-system-umber-six.vercel.app',
    tech: ['React', 'Node.js', 'Express.js', 'MySQL', 'JWT'],
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 4);

  return (
    <section
      id="projects"
      className="relative scroll-mt-20 overflow-hidden bg-white px-6 py-24 transition-colors duration-300 dark:bg-[#0B1220] md:px-16"
    >
      {/* faint static grid, matches Hero/About/Experience */}
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
            Projects
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl"
        >
          Things I&apos;ve built
        </motion.h2>
        {/* <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mt-3 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300"
        >
          A mix of AI/ML products, full-stack platforms, and client work — each shipped end to
          end.
        </motion.p> */}

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {visibleProjects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <ProjectCard project={project} index={idx + 1} />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="border border-slate-300 px-6 py-2.5 font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 dark:border-white/15 dark:text-slate-200 dark:hover:border-white/30 dark:hover:bg-white/5"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: ProjectType; index: number }) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    mode: 'snap',
  });

  const label = String(index).padStart(2, '0');

  return (
    <div className="group flex h-full flex-col border border-slate-200 bg-white transition-colors hover:border-teal-600/40 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-teal-400/30">
      <div className="relative h-56 w-full border-b border-slate-200 dark:border-white/10">
        <div ref={sliderRef} className="keen-slider h-full">
          {project.images.map((img, i) => (
            <div key={i} className="keen-slider__slide relative">
              <Image
                src={img}
                alt={`${project.name}-${i}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>

        {/* index tag */}
        <span className="absolute left-3 top-3 z-10 bg-white/90 px-2 py-1 font-mono text-[10px] tracking-widest text-slate-500 backdrop-blur-sm dark:bg-[#0B1220]/85 dark:text-slate-400">
          {label}
        </span>

        {/* Arrows */}
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-slate-200 bg-white/90 text-slate-600 backdrop-blur-sm transition-colors hover:border-teal-600/40 hover:text-teal-700 dark:border-white/15 dark:bg-[#0B1220]/85 dark:text-slate-300 dark:hover:border-teal-400/40 dark:hover:text-teal-400"
          aria-label="Previous Slide"
        >
          <FaChevronLeft className="text-xs" />
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-slate-200 bg-white/90 text-slate-600 backdrop-blur-sm transition-colors hover:border-teal-600/40 hover:text-teal-700 dark:border-white/15 dark:bg-[#0B1220]/85 dark:text-slate-300 dark:hover:border-teal-400/40 dark:hover:text-teal-400"
          aria-label="Next Slide"
        >
          <FaChevronRight className="text-xs" />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.name}</h3>
        <p className="flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs text-slate-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-sm dark:border-white/5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-medium text-slate-600 transition-colors hover:text-teal-700 dark:text-slate-300 dark:hover:text-teal-400"
          >
            <FaGithub /> Code
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-medium text-teal-700 transition-colors hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-300"
            >
              <FaExternalLinkAlt className="text-xs" /> Live
            </a>
          ) : (
            <span className="italic text-slate-400 dark:text-slate-500">Available soon</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;