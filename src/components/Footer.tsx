
import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-autostack-900 text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold">Auto<span className="text-autostack-400">Stack</span></span>
            </div>
            <p className="text-white/70 mb-4">
              Advanced vehicle diagnostics solutions for automotive professionals, enthusiasts, and enterprises.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Hobbyist Solutions</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Professional Tools</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Enterprise Platform</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">API & Integrations</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Mobile Applications</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Support Center</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Video Tutorials</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Developer Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Press & Media</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Partners</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Autostack Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
