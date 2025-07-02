'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useKeenSlider } from 'keen-slider/react';
import { motion } from 'framer-motion';
import 'keen-slider/keen-slider.min.css';

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
    description: 'AI-powered career coach generating gamified learning roadmaps.',
     images: ['/projects/dreamcanvas/image1.png', '/projects/dreamcanvas/image2.png','/projects/dreamcanvas/image3.png','/projects/dreamcanvas/image4.png','/projects/dreamcanvas/image5.png'],
    github: 'https://github.com/PradnyaKulkarni2005/DreamCanvas.git',
    demo: 'https://dreamcanvas-murex.vercel.app',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'TailwindCSS'],
  },
  {
    name: 'Project Diary',
    description: 'Project management system for academic institutes.',
     images: ['/projects/projectdiary/image1.png', '/projects/projectdiary/image2.png','/projects/projectdiary/image3.png','/projects/projectdiary/image4.png'],
    github: 'https://github.com/PradnyaKulkarni2005/ProjectDiary.git',
    demo: '',
    tech: ['React', 'Supabase', 'Node.js', 'Express.js'],
  },
  {
    name: 'Library Management System',
    description: 'Full-stack system for managing libraries and tracking overdue books.',
     images: ['/projects/library/image1.png', '/projects/library/image2.png','/projects/library/image3.png','/projects/library/image4.png'],
    github: 'https://github.com/PradnyaKulkarni2005/Library-Management-System.git',
    demo: 'https://library-management-system-umber-six.vercel.app',
    tech: ['React', 'Node.js', 'MySQL'],
  },
  {
    name: 'Yash Dabeli',
    description: 'Modern responsive website for a local food business.',
    images: ['/projects/yashdabeli/image1.png', '/projects/yashdabeli/image2.png','/projects/yashdabeli/image3.png','/projects/yashdabeli/image4.png'],
    github: 'https://github.com/PradnyaKulkarni2005/YashDabeli.git',
    demo: 'https://yash-dabeli.vercel.app',
    tech: ['React', 'Bootstrap'],
  },
  {
    name: 'HerWorld',
    description: 'Community platform for women featuring forums and curated content.',
     images: ['/projects/herworld/image1.png', '/projects/herworld/image2.png','/projects/herworld/image3.png','/projects/herworld/image4.png','/projects/herworld/image5.png'],
    github: 'https://github.com/PradnyaKulkarni2005/SHE_SOLVES_TriadCoders.git',
    demo: 'https://herworld-women.vercel.app',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    name: 'HappyNest',
    description: 'Mood-based interactive site for kids to explore activities.',
    images: ['/projects/happynest/image1.png', '/projects/happynest/image2.png','/projects/happynest/image3.png','/projects/happynest/image4.png','/projects/happynest/image5.png','/projects/happynest/image5.png','/projects/happynest/image6.png','/projects/happynest/image7.png'
    ],
    github: 'https://github.com/PradnyaKulkarni2005/Happynest.git',
    demo: 'https://happynest-pi.vercel.app',
    tech: ['React.js'],
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 4);

  return (
    <section id="projects" className="scroll-mt-20 py-20 px-6 md:px-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <motion.h2
        className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🚀 My Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {visibleProjects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-indigo-600 text-white px-6 py-2 rounded-full shadow hover:bg-indigo-700 transition"
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: ProjectType }) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    mode: 'snap',
  });

  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col">
      <div className="relative h-64 w-full">
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

        {/* Arrows */}
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute top-1/2 left-2 z-10 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          aria-label="Previous Slide"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute top-1/2 right-2 z-10 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          aria-label="Next Slide"
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="p-5 space-y-3 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.name}</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 text-sm">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="bg-indigo-200 dark:bg-indigo-700 text-indigo-900 dark:text-white px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between pt-4 text-sm text-indigo-600 dark:text-indigo-300">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <FaGithub /> Code
          </a>
          {project.demo ? (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <FaExternalLinkAlt /> Live
            </a>
          ) : (
            <span className="italic text-gray-500 dark:text-gray-400">Available soon...</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;