
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    "Decades of automotive engineering expertise",
    "Cutting-edge diagnostic technology",
    "Cross-platform compatibility",
    "Industry-leading technical support",
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-autostack-50/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading">About <span className="gradient-text">Autostack</span></h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Pioneering vehicle diagnostics with innovative solutions for every automotive need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="bg-white rounded-lg card-shadow p-8 relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-autostack-600 rounded-md flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect width="18" height="14" x="3" y="3" rx="2"></rect><path d="M10 9h4"></path><path d="M12 17v4"></path><path d="M12 13v4"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mt-4 mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                We're dedicated to democratizing advanced vehicle diagnostics through intuitive, 
                powerful software that bridges the gap between complex vehicle systems and the people who need to understand them.
              </p>
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">Why Choose Autostack</h4>
              <ul className="space-y-3">
                {highlights.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-autostack-600 mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Expertise</h3>
            <p className="text-muted-foreground">
              With over two decades of experience in automotive diagnostics engineering, our team 
              combines deep technical knowledge with innovative software development to create 
              solutions that are both powerful and accessible.
            </p>
            <p className="text-muted-foreground">
              We specialize in developing cross-platform diagnostic applications that leverage the 
              latest in automotive communication protocols, data analysis, and user interface design.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              {['Android', 'iOS', 'Windows', 'Cloud', 'Machine Learning', 'Data Analytics'].map((tech, index) => (
                <div key={index} className="bg-white rounded-lg p-3 text-center border border-border">
                  <span className="font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
