import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 bg-slate-50/80 backdrop-blur-md z-50 border-b border-slate-200/80">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-slate-900 tracking-wider">
            agorco
          </a>
          <nav>
            <a 
              href="mailto:dev@agorco.com"
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-sky-500 transition-colors duration-300"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;