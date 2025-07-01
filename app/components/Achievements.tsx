'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';

const achievements = [
  {
    title: 'Responsive Web Design',
    description: 'Completed certificate covering HTML5, CSS3, Flexbox, and Media Queries from FreeCodeCamp.',
    image: '/certificates/responsiveweb.png',
  },
  {
    title: 'Problem Solving - HackerRank',
    description: 'Certified for DSA proficiency using optimal algorithms and data structures.',
    image: '/certificates/hackerrank.png',
  },
  {
    title: 'SQL Basics - HackerRank',
    description: 'Certified for Proficiency SQL queries including joins, filters, aggregations, and basic data analysis.',
    image: '/certificates/sqlbasic.png',
  },
  {
    title: 'Full-Stack Web Development',
    description: 'Completed Udemy course with hands-on projects in frontend, backend, and deployment.',
    image: '/certificates/udemy.png',
  },
  {
    title: 'OOPs in Java',
    description: 'Explored object-oriented concepts with Java via Coding Ninjas.',
    image: '/certificates/oopsinjava.png',
  },
  {
    title: 'Intro to CyberSecurity',
    description: 'Learned key cyber concepts, threats, and protection techniques via Great Learning.',
    image: '/certificates/cybersecurity.png',
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="scroll-mt-20 py-20 px-6 md:px-16 bg-gradient-to-br from-indigo-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <motion.div
        className="flex items-center justify-center gap-3 mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <FiAward className="text-4xl text-indigo-600 dark:text-indigo-400" />
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Milestones & Achievements
        </h2>
      </motion.div>

      <div className="overflow-x-auto">
        <div className="flex gap-6 md:gap-8 px-1 min-w-max">
          {achievements.map((achieve, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-gray-800 flex-shrink-0 w-[300px] sm:w-[340px] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-700">
                <Image
                  src={achieve.image}
                  alt={achieve.title}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-5 space-y-2">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{achieve.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{achieve.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
