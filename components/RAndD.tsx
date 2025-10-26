import React from 'react';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';

interface TechLinkProps {
  name: string;
  url: string;
  description: string;
}

const TechLinkCard: React.FC<TechLinkProps> = ({ name, url, description }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group block bg-white p-6 rounded-lg border border-slate-200 hover:border-sky-400 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-lg"
  >
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-xl font-bold text-slate-800 group-hover:text-sky-600 transition-colors duration-300">{name}</h3>
        <p className="text-slate-600 mt-2">{description}</p>
      </div>
      <ExternalLinkIcon className="w-5 h-5 text-slate-400 group-hover:text-sky-500 transition-colors duration-300 flex-shrink-0 ml-4 mt-1" />
    </div>
  </a>
);

const RAndD: React.FC = () => {
  const techLinks: TechLinkProps[] = [
    {
      name: "Vortex",
      url: "https://vortex.dev/blog",
      description: "A real-time data framework for building data-intensive applications."
    },
    {
      name: "LanceDB",
      url: "https://lancedb.com/",
      description: "An open-source, serverless vector database for AI applications."
    },
    {
      name: "Apache DataFusion",
      url: "https://datafusion.apache.org/",
      description: "An extensible query execution framework, written in Rust, that uses Apache Arrow."
    },
    {
      name: "RisingWave",
      url: "https://risingwave.com/",
      description: "A distributed SQL streaming database for real-time analytics."
    }
  ];

  return (
    <section id="research" className="py-20 bg-slate-100 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Research & Development</h2>
          <p className="text-lg text-slate-600 mt-2">
            Exploring trending technologies to help companies gain a competitive advantage.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {techLinks.map(link => <TechLinkCard key={link.name} {...link} />)}
        </div>
      </div>
    </section>
  );
};

export default RAndD;