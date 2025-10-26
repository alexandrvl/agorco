import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Experience from './components/Experience';
import WorkingPrinciples from './components/WorkingPrinciples';
import RAndD from './components/RAndD';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-700 min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Experience />
        <WorkingPrinciples />
        <RAndD />
      </main>
      <Footer />
    </div>
  );
};

export default App;