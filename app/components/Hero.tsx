'use client';
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-600 text-white text-center px-4">
      <div className="space-y-4 animate-fade-in">
        <h1 className="text-5xl font-bold">Hi, I’m Pradnya Kulkarni 👋</h1>
        <p className="text-xl max-w-xl mx-auto">
          🎓 A driven B.Tech student at Pimpri Chinchwad College of Engineering,
💡 I thrive where creativity meets code and ideas meet impact.

I’m passionate about building tech that’s not just functional — but meaningful. Whether it's crafting full-stack applications, designing intuitive UIs, or optimizing backend performance, I love turning real-world problems into powerful digital solutions.

🚀 On a mission to create, collaborate, and innovate, I combine technical depth with creative vision to build apps that resonate and perform.
        </p>
        <a
          href="https://www.linkedin.com/in/pradnya-kulkarni-8b92b42b9/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold shadow hover:bg-indigo-100 transition"
        >
          Connect with me
        </a>
      </div>
    </section>
  );
};

export default Hero;
