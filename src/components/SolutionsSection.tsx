
import React from 'react';
import { Button } from '@/components/ui/button';
import { Wrench, Car, Building2, Database } from 'lucide-react';

const SolutionsSection = () => {
  const solutions = [
    {
      icon: <Wrench className="h-8 w-8 text-white" />,
      title: "Hobbyists",
      description: "Perfect for car enthusiasts and DIY mechanics who want professional-grade diagnostics without complexity.",
      features: [
        "Live vehicle data streams",
        "Trouble code reading & clearing",
        "Easy plug-and-play setup",
        "Intuitive mobile interface"
      ],
      bgColor: "bg-autostack-600",
      ctaText: "Perfect for DIY Enthusiasts"
    },
    {
      icon: <Building2 className="h-8 w-8 text-white" />,
      title: "Garage Owners",
      description: "Comprehensive tools for professional automotive service providers requiring reliable, in-depth diagnostics.",
      features: [
        "Multi-vehicle support",
        "Advanced data logging",
        "Professional reports & exports",
        "Enhanced vehicle coverage"
      ],
      bgColor: "bg-teal-600",
      ctaText: "Built for Professional Shops"
    },
    {
      icon: <Database className="h-8 w-8 text-white" />,
      title: "Technology Experts",
      description: "Customizable platform for enterprises and fleet managers integrating with existing management systems.",
      features: [
        "API integrations",
        "Fleet management solutions",
        "AI diagnostic assistants",
        "Custom development options"
      ],
      bgColor: "bg-autostack-800",
      ctaText: "Enterprise-Grade Solutions"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-autostack-50/50 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">Solutions For <span className="gradient-text">Every Need</span></h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tailored diagnostic capabilities for different users, from hobbyists to enterprise fleet managers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden card-shadow flex flex-col h-full">
              <div className={`p-6 ${solution.bgColor}`}>
                <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{solution.title}</h3>
                <p className="text-white/80">{solution.description}</p>
              </div>
              
              <div className="p-6 flex-grow">
                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-autostack-600"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6 pt-0 mt-auto">
                <Button className="w-full bg-autostack-600 hover:bg-autostack-700">
                  {solution.ctaText}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="mb-6 text-lg">Not sure which solution fits your needs?</p>
          <Button variant="outline" size="lg" className="border-autostack-200">
            Compare All Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
