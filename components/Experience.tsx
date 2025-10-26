import React from 'react';
import { RetailIcon } from './icons/RetailIcon';
import { GamingIcon } from './icons/GamingIcon';
import { LogisticsIcon } from './icons/LogisticsIcon';
import { FintechIcon } from './icons/FintechIcon';
import { UtilitiesIcon } from './icons/UtilitiesIcon';

interface ExperienceItemProps {
  icon: React.ReactNode;
  domain: string;
  title: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ icon, domain, title, description }) => (
  <div className="relative pl-8 sm:pl-12 py-6 group">
    <div className="absolute left-0 sm:left-4 h-full w-px bg-slate-200 group-hover:bg-sky-400 transition-colors duration-300"></div>
    <div className="absolute left-[-9px] sm:left-0 bg-white border-2 border-slate-300 group-hover:border-sky-400 p-2 rounded-full text-sky-500 transition-all duration-300 transform group-hover:scale-110">
      {icon}
    </div>
    <div className="flex flex-col-reverse sm:flex-row sm:justify-between sm:items-baseline">
      <h3 className="text-lg font-bold text-slate-800">{title}</h3>
      <span className="text-xs font-semibold uppercase text-sky-600/80 tracking-wider mb-1 sm:mb-0 sm:ml-4">{domain}</span>
    </div>
    <p className="text-slate-600 mt-2 sm:mt-1 text-sm">{description}</p>
  </div>
);

const Experience: React.FC = () => {
  const experiences: ExperienceItemProps[] = [
    { 
      icon: <RetailIcon className="w-6 h-6"/>, 
      domain: "Retail", 
      title: "Self-Payment Kiosks", 
      description: "Architected and developed self-service payment solutions and integrated with various payment gateways."
    },
    { 
      icon: <GamingIcon className="w-6 h-6"/>, 
      domain: "Gaming", 
      title: "Real-Time Fraud Detection", 
      description: "Built high-throughput systems for detecting fraudulent activities in real-time within the gaming industry."
    },
    { 
      icon: <LogisticsIcon className="w-6 h-6"/>, 
      domain: "Logistics", 
      title: "Geo-Information Systems", 
      description: "Developed geo-information systems for tracking and optimizing routes for a major logistics company."
    },
    { 
      icon: <FintechIcon className="w-6 h-6"/>, 
      domain: "FinTech", 
      title: "ATM Network Infrastructure", 
      description: "Designed and implemented the backend infrastructure for a new ATM network for a financial technology startup."
    },
    { 
      icon: <UtilitiesIcon className="w-6 h-6"/>, 
      domain: "Utilities", 
      title: "Smart Meter Integrations", 
      description: "Led the integration of smart meters for electricity utility services, enabling real-time data collection and analysis."
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Proven Domain Experience</h2>
          <p className="text-lg text-slate-600 mt-2">Applying technical skills to solve real-world business challenges.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          {experiences.map(exp => <ExperienceItem key={exp.title} {...exp} />)}
        </div>
      </div>
    </section>
  );
};

export default Experience;