import React from 'react';
import { JavaIcon } from './icons/JavaIcon';
import { KubernetesIcon } from './icons/KubernetesIcon';
import { GrafanaIcon } from './icons/GrafanaIcon';
import { DataIcon } from './icons/DataIcon';

interface TechTagProps {
  name: string;
}

const TechTag: React.FC<TechTagProps> = ({ name }) => (
  <span className="inline-block bg-slate-200 text-slate-700 text-xs font-medium mr-2 mb-2 px-2.5 py-1 rounded-full">
    {name}
  </span>
);

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tech: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, tech }) => (
  <div className="bg-white p-6 rounded-lg border border-slate-200 hover:border-sky-400 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-lg">
    <div className="flex items-center gap-4 mb-4">
      <div className="bg-sky-100 p-3 rounded-full text-sky-600">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-800">{title}</h3>
    </div>
    <p className="text-slate-600 mb-4">{description}</p>
    <div>
      {tech.map(t => <TechTag key={t} name={t} />)}
    </div>
  </div>
);

const Services: React.FC = () => {
  const servicesData: ServiceCardProps[] = [
    {
      icon: <JavaIcon className="w-6 h-6" />,
      title: "Enterprise Development",
      description: "Building scalable, high-performance backend systems with modern Java technologies and microservices architecture.",
      tech: ["Java", "Spring Boot", "Kafka", "RabbitMQ", "CI/CD"]
    },
    {
      icon: <KubernetesIcon className="w-6 h-6" />,
      title: "Cloud & Operations",
      description: "Full support for operational use cases, including deployment, scaling, and APM monitoring on cloud-native platforms.",
      tech: ["Kubernetes", "Grafana", "Prometheus", "New Relic", "Kibana APM"]
    },
    {
      icon: <DataIcon className="w-6 h-6" />,
      title: "Big Data & Engineering",
      description: "Designing and implementing efficient data pipelines and optimizing storage for real-time analytics and large-scale processing.",
      tech: ["Google Dataflow", "Apache Iceberg", "Trino", "DuckDB", "Pandas", "dbt", "Data Vault 2.0", "Daft", "pyiceberg"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-100 border-y border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Core Expertise</h2>
          <p className="text-lg text-slate-600 mt-2">Specialized services to elevate your technological capabilities.</p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesData.map(service => <ServiceCard key={service.title} {...service} />)}
        </div>
      </div>
    </section>
  );
};

export default Services;