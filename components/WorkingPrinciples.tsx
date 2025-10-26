import React from 'react';
import { ADRIcon } from './icons/ADRIcon';
import { SystemAnalysisIcon } from './icons/SystemAnalysisIcon';
import { ResultOrientedIcon } from './icons/ResultOrientedIcon';
import { C4Icon } from './icons/C4Icon';


interface PrincipleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PrincipleCard: React.FC<PrincipleCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg border border-slate-200 hover:border-sky-400 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-lg">
    <div className="flex items-center gap-4 mb-4">
      <div className="bg-sky-100 p-3 rounded-full text-sky-600">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-800">{title}</h3>
    </div>
    <p className="text-slate-600">{description}</p>
  </div>
);


const WorkingPrinciples: React.FC = () => {
    const principlesData: PrincipleCardProps[] = [
        {
            icon: <ADRIcon className="w-6 h-6" />,
            title: "Transparent Decision-Making",
            description: "All significant decisions are meticulously documented as Architecture Decision Records (ADRs), creating a clear and traceable history of our technical evolution."
        },
        {
            icon: <SystemAnalysisIcon className="w-6 h-6" />,
            title: "Context-Driven Analysis",
            description: "Our system analysis considers your people, processes, and existing tech stack to design solutions that are perfectly tailored to your unique environment."
        },
        {
            icon: <ResultOrientedIcon className="w-6 h-6" />,
            title: "Result-Oriented Approach",
            description: "We focus on delivering tangible results that drive your business forward. Success is measured by the value we create and the goals we help you achieve."
        },
        {
            icon: <C4Icon className="w-6 h-6" />,
            title: "Clear Architectural Vision",
            description: "We use the C4 model to create clear, hierarchical diagrams of software architecture, ensuring everyone from developers to stakeholders shares a common understanding."
        }
    ];

  return (
    <section id="principles" className="py-20 bg-slate-100 border-y border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Working Principles</h2>
          <p className="text-lg text-slate-600 mt-2">A transparent and structured approach to delivering excellence.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {principlesData.map(principle => <PrincipleCard key={principle.title} {...principle} />)}
        </div>
      </div>
    </section>
  );
};

export default WorkingPrinciples;
