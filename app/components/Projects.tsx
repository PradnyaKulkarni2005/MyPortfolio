'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useKeenSlider } from 'keen-slider/react';
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
    description: 'DreamCanvas is your AI-powered personal career coach that generates a tailored 30-day learning roadmap to help you become job-ready in your desired role. It integrates streaks, badges, progress tracking, and YouTube resources to create a gamified learning experience.',
    images: ['/projects/dreamcanvas/image1.png', '/projects/dreamcanvas/image2.png','/projects/dreamcanvas/image3.png','/projects/dreamcanvas/image4.png','/projects/dreamcanvas/image5.png'],
    github: 'https://github.com/PradnyaKulkarni2005/DreamCanvas.git',
    demo: 'https://dreamcanvas-murex.vercel.app',
    tech: ['Next.js', 'TypeScript','Supabase','GROQ AI', 'TailwindCSS'],
  },
  {
    name: 'Project Diary',
    description: 'An autonomous institutes complete project management solution from group formation to final evaluation — for students, guides, coordinators, HODs, and directors.',
    images: ['/projects/demo1.png', '/projects/demo2.png'],
    github: 'https://github.com/PradnyaKulkarni2005/ProjectDiary.git',
    demo: '#',
    tech: ['React', 'Supabase','Node.js','Express.js'],
  },
  {
    name: 'Library Management System',
    description: 'A full-stack Library Management System built with React, Node.js, and MySQL. Designed for internal use to manage library operations such as book circulation, user records, and overdue tracking.',
    images: ['/projects/weather1.png', '/projects/weather2.png'],
    github: 'https://github.com/PradnyaKulkarni2005/Library-Management-System.git',
    demo: 'https://your-weather-url.com',
    tech: ['React','Node.js','MySQL','Nodemailer','Node-Cron','Recharts'],
  },
  
  {
    name: 'Yash Dabeli',
    description: 'Website designed for Yash Dabel cafe',
    images: ['/projects/yashdabeli/image1.png', '/projects/demo4.png'],
    github: 'https://github.com/PradnyaKulkarni2005/YashDabeli.git',
    demo: 'https://yash-dabeli.vercel.app',
    tech: ['React','React.dev.bits'],
  },
  {
    name: 'HerWorld - Women-Centric Platform',
    description: 'HerWorld is a comprehensive web platform created to empower women through community interaction, business ideation, and curated news content. The platform also includes a categorized video section tailored specifically for womens interests.',
    images: ['/projects/demo5.png', '/projects/demo6.png'],
    github: 'https://github.com/PradnyaKulkarni2005/SHE_SOLVES_TriadCoders.git',
    demo: 'https://herworld-women.vercel.app',
    tech: ['React.js','Node.js','Express.js', 'MongoDB'],
  },
  {
    name: 'HappyNest',
    description: 'Developed an interactive website for children where they select their mood, and activities are recommended accordingly.',
    images: ['/projects/demo3.png', '/projects/demo4.png'],
    github: 'https://github.com/PradnyaKulkarni2005/Happynest.git',
    demo: 'https://happynest-pi.vercel.app',
    tech: ['React'],
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 4);

  return (
    <section id="projects" className="scroll-mt-20 py-20 px-6 md:px-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">🚀 My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {visibleProjects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>

      {!showAll && allProjects.length > 4 && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="bg-indigo-600 text-white px-6 py-2 rounded-full shadow hover:bg-indigo-700 transition"
          >
            Show More
          </button>
        </div>
      )}
    </section>
  );
};

const ProjectCard = ({ project }: { project: ProjectType }) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
  });

  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col">
      <div ref={sliderRef} className="keen-slider relative h-64">
        {project.images.map((img, i) => (
          <div key={i} className="keen-slider__slide relative">
            <Image src={img} alt={`${project.name}-${i}`} fill className="object-cover" />
          </div>
        ))}
      </div>

      <div className="p-5 space-y-3 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.name}</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 text-xs">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="bg-indigo-200 dark:bg-indigo-700 text-indigo-900 dark:text-white px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between pt-3 text-sm text-indigo-600 dark:text-indigo-300">
          <a href={project.github} target="_blank" className="flex gap-1 items-center">
            <FaGithub /> Code
          </a>
          <a href={project.demo} target="_blank" className="flex gap-1 items-center">
            <FaExternalLinkAlt /> Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
