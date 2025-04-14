
import React from 'react';
import { Check } from 'lucide-react';

const OfferingsSection = () => {
  const protocols = [
    {
      name: "J1979 (OBD2)",
      description: "Standard On-Board Diagnostics protocol for light-duty vehicles",
      features: ["Trouble code reading", "Live data streams", "Emissions readiness"]
    },
    {
      name: "J1979-2 (OBDonUDS, DEV)",
      description: "Next-generation protocol enhancing vehicle diagnostics capabilities",
      features: ["Extended data access", "Enhanced diagnostic functions", "Modern vehicle support"]
    },
    {
      name: "KWP (K-Line)",
      description: "Keyword Protocol for older European and Asian vehicles",
      features: ["Legacy vehicle support", "Manufacturer-specific codes", "Comprehensive coverage"]
    },
    {
      name: "CAN (15765, 14229)",
      description: "Controller Area Network protocols for modern vehicles",
      features: ["High-speed data communication", "Robust error detection", "Comprehensive vehicle network access"]
    },
    {
      name: "VPW & PWM",
      description: "Variable & Pulse Width Modulation protocols for US vehicles",
      features: ["GM, Ford compatibility", "Legacy support", "Complete historical coverage"]
    }
  ];

  return (
    <section id="offerings" className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">What We <span className="gradient-text">Offer</span></h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive diagnostic technology across all major automotive protocols and platforms
          </p>
        </div>
        
        <div className="relative mb-12">
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-border"></div>
          <div className="grid grid-cols-1 gap-16">
            {protocols.map((protocol, index) => (
              <div key={index} className={`relative flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-6 h-6 rounded-full bg-autostack-600 border-4 border-white z-10"></div>
                <div className={`bg-white rounded-lg p-6 card-shadow flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <h3 className="text-xl font-bold mb-2 text-autostack-800">{protocol.name}</h3>
                  <p className="text-muted-foreground mb-4">{protocol.description}</p>
                  <ul className={`space-y-2 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                    {protocol.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={`flex items-center ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <Check className={`h-4 w-4 text-autostack-600 ${index % 2 === 0 ? 'md:order-2 md:ml-2' : 'mr-2'}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Cross-Platform Compatibility</h3>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <div className="flex items-center p-3 rounded-lg bg-white card-shadow">
              <div className="w-10 h-10 bg-autostack-50 rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-autostack-600"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>
              </div>
              <span className="font-medium">Android</span>
            </div>
            <div className="flex items-center p-3 rounded-lg bg-white card-shadow">
              <div className="w-10 h-10 bg-autostack-50 rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-autostack-600"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m8 7 2 1c0-2 1-3 2-3a4 4 0 0 1 4 4v1c0 2-2 2-2 4"></path><path d="M12 18h.01"></path></svg>
              </div>
              <span className="font-medium">iOS</span>
            </div>
            <div className="flex items-center p-3 rounded-lg bg-white card-shadow">
              <div className="w-10 h-10 bg-autostack-50 rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-autostack-600"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
              </div>
              <span className="font-medium">Windows</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
