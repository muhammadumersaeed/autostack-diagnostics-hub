
import React from 'react';
import { CheckCircle2, Laptop, Cpu, Car, Shield, LineChart, BellRing, Gauge, Languages, AlertCircle } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    "Decades of automotive engineering expertise",
    "Cutting-edge diagnostic technology",
    "Cross-platform compatibility",
    "Industry-leading technical support",
  ];

  const customSoftwareServices = [
    {
      icon: <Cpu className="h-5 w-5 text-autostack-600" />,
      title: "ECU Development with AUTOSAR",
      description: "We develop and customize vehicle Electronic Control Units (ECUs) using AUTOSAR standards for optimal performance and compatibility."
    },
    {
      icon: <Laptop className="h-5 w-5 text-autostack-600" />,
      title: "Embedded Linux Solutions",
      description: "Custom embedded Linux systems for automotive applications requiring robust, real-time performance."
    },
    {
      icon: <Shield className="h-5 w-5 text-autostack-600" />,
      title: "UDS Diagnostics",
      description: "Unified Diagnostic Services implementation for comprehensive vehicle diagnostics and troubleshooting."
    },
    {
      icon: <LineChart className="h-5 w-5 text-autostack-600" />,
      title: "Predictive Maintenance",
      description: "Advanced algorithms analyzing live sensor data to predict maintenance needs before failures occur."
    },
    {
      icon: <BellRing className="h-5 w-5 text-autostack-600" />,
      title: "Maintenance Alerts & Fleet Management",
      description: "Proactive notification systems and comprehensive fleet monitoring solutions for business efficiency."
    },
    {
      icon: <Gauge className="h-5 w-5 text-autostack-600" />,
      title: "Engine Optimization",
      description: "Custom PID monitoring and analysis to suggest optimal engine usage parameters for performance and efficiency."
    },
    {
      icon: <Languages className="h-5 w-5 text-autostack-600" />,
      title: "Japanese Vehicle Specialization",
      description: "Dedicated diagnostic solutions for Japanese vehicles with comprehensive DTC libraries."
    },
    {
      icon: <AlertCircle className="h-5 w-5 text-autostack-600" />,
      title: "DTC Analysis & Solutions",
      description: "Comprehensive database of Diagnostic Trouble Codes with specific fix suggestions tailored to vehicle makes and models."
    },
    {
      icon: <Car className="h-5 w-5 text-autostack-600" />,
      title: "Full ELM327 Support",
      description: "Extended ELM327 adapter support with optimization suggestions for maximum compatibility and performance."
    }
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

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Custom Software Development Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customSoftwareServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 card-shadow hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-autostack-50 rounded-md mr-3">
                    {service.icon}
                  </div>
                  <h4 className="font-bold">{service.title}</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="bg-autostack-50 rounded-xl p-8 mt-8 border border-autostack-200">
            <h4 className="font-bold text-xl mb-4">App Store Management</h4>
            <p className="text-muted-foreground mb-4">
              We provide full-cycle development and maintenance services for mobile applications on both iOS and Android platforms, 
              including app store optimization, submission, updates, and compliance management.
            </p>
            <div className="flex justify-center gap-8 mt-6">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 4-6 4-11 0-3-2.5-5-5-5s-4 2-6 2-3-2-5-2-5 2-5 5c0 5 1 11 4 11 1.25 0 2.5-1.06 4-1.06Z"></path><path d="M12 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path></svg>
                <span className="font-medium">iOS App Store</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M20 16V6.5a2.5 2.5 0 0 0-5 0V16"></path><path d="M8 9v7"></path><path d="M11 16V9a2 2 0 1 0-4 0v7"></path><path d="M4 22v-5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5"></path><path d="M15 22v-5"></path><path d="M8 22v-5"></path></svg>
                <span className="font-medium">Android Play Store</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
