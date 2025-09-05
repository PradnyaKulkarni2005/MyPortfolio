'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaLaptopCode,
  FaUsersCog,
  FaProjectDiagram,
  FaCodeBranch,
  FaBriefcase,
} from 'react-icons/fa';

const experiences = [
  {
    role: 'Web Development Head',
    org: 'Google Developer Group Campus',
    period: 'Aug – Present',
    icon: <FaProjectDiagram className="text-indigo-500 dark:text-indigo-400 text-xl" />,
  },
  {
    role: 'Web Masters Co-Lead',
    org: 'ITSA',
    period: 'Jun – Present',
    icon: <FaUsersCog className="text-indigo-500 dark:text-indigo-400 text-xl" />,
  },
  {
    role: 'Website Developer',
    org: 'Yash Dabeli & Fast Food',
    period: 'Freelance',
    icon: <FaLaptopCode className="text-indigo-500 dark:text-indigo-400 text-xl" />,
  },
  {
    role: 'Full Stack Developer Intern',
    org: 'Library Management System, IT Dept PCCOE',
    period: 'May 1 – Jun 8',
    icon: <FaCodeBranch className="text-indigo-500 dark:text-indigo-400 text-xl" />,
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="scroll-mt-24 py-20 px-6 md:px-16 bg-gradient-to-b from-gray-50 via-white to-gray-50 
                 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <FaBriefcase className="text-indigo-500 dark:text-indigo-400 text-3xl" />
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Experience
          </h2>
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          A journey of growth through impactful roles — from internships to leadership
          positions, each step sharpened my skills in web development, teamwork,
          and problem-solving.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="mt-16 relative max-w-3xl mx-auto">
        {/* Vertical Line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="absolute left-6 top-0 w-1 h-full origin-top 
                     bg-gradient-to-b from-indigo-500 via-indigo-400 to-indigo-300 
                     dark:from-indigo-400 dark:via-indigo-500 dark:to-indigo-600 rounded-full"
        />

        {/* Cards */}
        <div className="flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative flex items-start gap-4 ml-14 group"
            >
              {/* Timeline Dot */}
              <motion.span
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="absolute -left-7 flex items-center justify-center w-10 h-10 
                           bg-indigo-100 dark:bg-indigo-700 rounded-full shadow-md 
                           group-hover:shadow-lg group-hover:shadow-indigo-300 
                           dark:group-hover:shadow-indigo-600"
              >
                {exp.icon}
              </motion.span>

              {/* Card */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md 
                           transition-all p-6 w-full border border-transparent 
                           hover:border-indigo-300 dark:hover:border-indigo-600"
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {exp.role}
                </h3>
                <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                  {exp.org}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 italic">
                  {exp.period}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
