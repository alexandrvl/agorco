import React from 'react';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { EmailIcon } from './icons/EmailIcon';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 border-t border-slate-200">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-slate-900">agorco</h3>
            <p className="text-slate-600 text-sm">Enterprise Software Consultancy</p>
          </div>
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a 
                href="mailto:dev@agorco.com" 
                className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors"
                aria-label="Email Address"
            >
                <EmailIcon className="w-5 h-5" />
                <span className="text-sm font-medium">dev@agorco.com</span>
            </a>
            <a 
              href="https://ee.linkedin.com/in/aleksandr-gortujev-57a822144" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-500 hover:text-sky-500 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm text-slate-500">&copy; {currentYear} Agorco. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;