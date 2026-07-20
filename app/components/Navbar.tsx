'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/app/context/ThemeContext';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md transition-colors duration-300 dark:border-white/10 dark:bg-[#0B1220]/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="#hero"
          className="text-lg font-bold tracking-tight text-slate-900 transition-colors dark:text-white"
        >
          <span className="text-teal-700 dark:text-teal-400">Pradnya</span> Kulkarni
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group relative text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-teal-600 transition-all duration-300 group-hover:w-full dark:bg-teal-400" />
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center border border-slate-200 text-slate-600 transition-colors hover:border-teal-600/40 hover:text-teal-700 dark:border-white/10 dark:text-slate-300 dark:hover:border-teal-400/40 dark:hover:text-teal-400"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>

        {/* Mobile Icon */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center border border-slate-200 text-slate-600 dark:border-white/10 dark:text-slate-300"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-800 dark:text-white"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="space-y-1 border-t border-slate-200 bg-white px-6 pb-6 pt-4 dark:border-white/10 dark:bg-[#0B1220] md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-medium text-slate-700 transition-colors hover:text-teal-700 dark:text-slate-200 dark:hover:text-teal-400"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;