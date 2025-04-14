
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <a href="#" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-autostack-800">Auto<span className="text-autostack-500">Stack</span></span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-sm font-medium hover:text-autostack-600 transition-colors">
            About
          </a>
          <a href="#offerings" className="text-sm font-medium hover:text-autostack-600 transition-colors">
            What We Offer
          </a>
          <a href="#solutions" className="text-sm font-medium hover:text-autostack-600 transition-colors">
            Solutions
          </a>
          <a href="#case-studies" className="text-sm font-medium hover:text-autostack-600 transition-colors">
            Case Studies
          </a>
          <a href="#videos" className="text-sm font-medium hover:text-autostack-600 transition-colors">
            Videos
          </a>
          <Button asChild size="sm" className="bg-autostack-600 hover:bg-autostack-700">
            <a href="#contact">Contact Us</a>
          </Button>
        </nav>
        
        {/* Mobile Navigation Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b shadow-lg animate-fade-in">
          <div className="container py-4 space-y-4">
            <a href="#about" className="block py-2 font-medium hover:text-autostack-600" onClick={toggleMenu}>
              About
            </a>
            <a href="#offerings" className="block py-2 font-medium hover:text-autostack-600" onClick={toggleMenu}>
              What We Offer
            </a>
            <a href="#solutions" className="block py-2 font-medium hover:text-autostack-600" onClick={toggleMenu}>
              Solutions
            </a>
            <a href="#case-studies" className="block py-2 font-medium hover:text-autostack-600" onClick={toggleMenu}>
              Case Studies
            </a>
            <a href="#videos" className="block py-2 font-medium hover:text-autostack-600" onClick={toggleMenu}>
              Videos
            </a>
            <Button asChild className="w-full bg-autostack-600 hover:bg-autostack-700">
              <a href="#contact" onClick={toggleMenu}>Contact Us</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
