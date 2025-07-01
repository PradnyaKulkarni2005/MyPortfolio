'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaDatabase,
  FaTools,
  FaChartLine,
  FaLaptopCode,
} from 'react-icons/fa';

const techCategories = [
  {
    title: 'Programming Languages',
    icon: <FaCode className="text-indigo-500 dark:text-indigo-400 text-xl" />,
    items: ['C++', 'Python', 'Java', 'C', 'TypeScript', 'JavaScript'],
  },
  {
    title: 'Web Development & Frameworks',
    icon: <FaLaptopCode className="text-indigo-500 dark:text-indigo-400 text-xl" />,
    items: ['HTML5', 'CSS3', 'React', 'Next.js', 'Node.js', 'Express.js'],
  },
  {
    title: 'Databases & Backend',
    icon: <FaDatabase className="text-indigo-500 dark:text-indigo-400 text-xl" />,
    items: ['MySQL', 'MongoDB', 'Supabase'],
  },
  {
    title: 'Data Science, ML & AI',
    icon: <FaChartLine className="text-indigo-500 dark:text-indigo-400 text-xl" />,
    items: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'ML Basics'],
  },
  {
    title: 'Tools, Platforms & Deployment',
    icon: <FaTools className="text-indigo-500 dark:text-indigo-400 text-xl" />,
    items: ['Git', 'GitHub', 'VS Code', 'Jupyter', 'Figma', 'Canva', 'Vercel', 'Render'],
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 py-20 px-6 md:px-16 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">👩‍💻 About Me</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          💡 A passionate <span className="font-semibold text-indigo-600 dark:text-indigo-400">B.Tech IT student</span>{' '}
          turning ideas into impactful digital solutions. Skilled in{' '}
          <span className="font-medium">full-stack development</span>,{' '}
          <span className="font-medium">UI/UX</span>, and{' '}
          <span className="font-medium">data science</span> — I thrive on innovation, collaboration, and lifelong learning.
        </p>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {techCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/90 dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-none p-6 hover:shadow-2xl transition-shadow backdrop-blur"
          >
            <div className="flex items-center gap-3 mb-3">
              {category.icon}
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {category.title}
              </h3>
            </div>
            <ul className="flex flex-wrap gap-2 text-sm">
              {category.items.map((item, i) => (
                <li
                  key={i}
                  className="bg-indigo-100 dark:bg-indigo-700 text-indigo-900 dark:text-white px-3 py-1 rounded-full shadow-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
