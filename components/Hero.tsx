import React from 'react';
import { LinkedInIcon } from './icons/LinkedInIcon';

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 -z-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.08)_0%,_transparent_40%)]"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-4">
          Expert-Led <span className="text-sky-500">Enterprise Solutions</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
          Delivering robust software consultancy in Java, Big Data, and Cloud-Native technologies to scale your business.
        </p>
        <a 
          href="https://ee.linkedin.com/in/aleksandr-gortujev-57a822144" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-sky-500 text-white font-semibold px-8 py-3 rounded-md hover:bg-sky-600 transition-all duration-300 shadow-lg shadow-sky-500/30"
        >
          <LinkedInIcon className="w-5 h-5" />
          Connect on LinkedIn
        </a>
        <p className="mt-6 text-sm text-slate-500">
          or reach out via email: <a href="mailto:dev@agorco.com" className="font-medium text-sky-600 hover:underline">dev@agorco.com</a>
        </p>
      </div>
    </section>
  );
};

export default Hero;