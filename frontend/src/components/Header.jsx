import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="https://customer-assets.emergentagent.com/job_041d947b-c392-44a0-8a73-ec2e8e1b6062/artifacts/xt8024o8_file_000000003d9462468e13d4fece119786.png"
              alt="Arigami Digital Logo"
              className="h-12 w-12 object-contain"
            />
            <div>
              <div className="font-display font-bold text-xl logo-3d">ARIGAMI</div>
              <div className="text-lg text-blue-600 font-mono font-black uppercase tracking-wide">DIGITAL</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#services" className="nav-link text-gray-700 hover:text-blue-600 transition-colors">
              Послуги
            </a>
            <a href="#about" className="nav-link text-gray-700 hover:text-blue-600 transition-colors">
              Про нас
            </a>
            <a href="#contact" className="nav-link text-gray-700 hover:text-blue-600 transition-colors">
              Контакти
            </a>
            <Button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="cta-button bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full"
            >
              БЕЗКОШТОВНА КОНСУЛЬТАЦІЯ
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4">
            <a href="#services" className="block py-2 text-gray-700 hover:text-blue-600">
              Послуги
            </a>
            <a href="#about" className="block py-2 text-gray-700 hover:text-blue-600">
              Про нас
            </a>
            <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600">
              Контакти
            </a>
            <Button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full"
            >
              БЕЗКОШТОВНА КОНСУЛЬТАЦІЯ
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;