
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6">
            <div className="inline-flex items-center space-x-2 bg-autostack-50 text-autostack-700 px-3 py-1 rounded-full text-sm font-medium mb-2">
              <span className="inline-block w-2 h-2 bg-autostack-500 rounded-full"></span>
              <span>Professional Diagnostics</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Smarter Vehicle Diagnostics. <span className="gradient-text">Delivered.</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-md">
              Advanced diagnostic solutions for automotive professionals, hobbyists, 
              and technology partners across Android, iOS, and Windows platforms.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button className="bg-autostack-600 hover:bg-autostack-700 text-white">
                Request a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-autostack-200 hover:bg-autostack-50">
                Explore Features
              </Button>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden card-shadow">
            <div className="aspect-video bg-gradient-to-br from-autostack-700 to-teal-700 rounded-lg flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg max-w-xs">
                <div className="text-white mb-2 text-sm uppercase tracking-wider">Vehicle Performance</div>
                <div className="grid grid-cols-2 gap-4 text-white">
                  <div>
                    <div className="text-xs text-white/70">Engine RPM</div>
                    <div className="text-2xl font-mono">2,543</div>
                  </div>
                  <div>
                    <div className="text-xs text-white/70">Speed</div>
                    <div className="text-2xl font-mono">45 mph</div>
                  </div>
                  <div>
                    <div className="text-xs text-white/70">Temp</div>
                    <div className="text-2xl font-mono">198 °F</div>
                  </div>
                  <div>
                    <div className="text-xs text-white/70">O2 Sensor</div>
                    <div className="text-2xl font-mono">0.92 V</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
