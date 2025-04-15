
import React, { useState } from 'react';
import { Check, Bluetooth, Wifi, Usb, Filter, CheckCircle2, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const OfferingsSection = () => {
  const [activeFeatureFilter, setActiveFeatureFilter] = useState<string[]>([]);
  
  const toggleFeatureFilter = (feature: string) => {
    setActiveFeatureFilter(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature) 
        : [...prev, feature]
    );
  };

  const protocols = [
    {
      name: "J1979 (OBD2)",
      description: "Standard On-Board Diagnostics protocol for light-duty vehicles",
      features: ["Trouble code reading", "Live data streams", "Emissions readiness"],
      laymanExplanation: "Think of OBD2 as the universal language that lets our app talk to your car. It's like having a translator who can tell you exactly what your car is trying to say when a warning light comes on."
    },
    {
      name: "J1979-2 (OBDonUDS, DEV)",
      description: "Next-generation protocol enhancing vehicle diagnostics capabilities",
      features: ["Extended data access", "Enhanced diagnostic functions", "Modern vehicle support"],
      laymanExplanation: "This is the newer, more advanced way our app communicates with the latest vehicles. It's like upgrading from basic text messages to video calls - you get much more information and can do more with your car."
    },
    {
      name: "KWP (K-Line)",
      description: "Keyword Protocol for older European and Asian vehicles",
      features: ["Legacy vehicle support", "Manufacturer-specific codes", "Comprehensive coverage"],
      laymanExplanation: "This is a special language mostly used by older European and Asian cars. If you have a classic BMW, Mercedes, or Toyota from the 90s, our app knows how to speak its language."
    },
    {
      name: "CAN (15765, 14229)",
      description: "Controller Area Network protocols for modern vehicles",
      features: ["High-speed data communication", "Robust error detection", "Comprehensive vehicle network access"],
      laymanExplanation: "CAN is like the high-speed internet for cars. It's how all the computers in modern vehicles talk to each other quickly and reliably. Our app taps into this network to give you detailed information about all your car's systems."
    },
    {
      name: "VPW & PWM",
      description: "Variable & Pulse Width Modulation protocols for US vehicles",
      features: ["GM, Ford compatibility", "Legacy support", "Complete historical coverage"],
      laymanExplanation: "These are special dialects spoken mostly by American cars, especially older GM and Ford vehicles. If you own a classic American car, our app can communicate with it using these specific protocols."
    }
  ];

  const connectivityOptions = [
    { name: "Bluetooth", icon: <Bluetooth className="h-5 w-5" />, description: "Connect wirelessly to your vehicle adapter within short range" },
    { name: "WiFi", icon: <Wifi className="h-5 w-5" />, description: "High-speed wireless connection to your vehicle adapter" },
    { name: "USB", icon: <Usb className="h-5 w-5" />, description: "Direct cable connection for maximum reliability and speed" }
  ];

  const featureComparisonData = {
    versions: ["Basic", "Professional", "Enterprise"],
    features: [
      {
        name: "Basic OBD2 Diagnostics",
        availability: [true, true, true],
        description: "Read and clear trouble codes, view basic sensor data"
      },
      {
        name: "Enhanced J1979-2 Support",
        availability: [false, true, true],
        description: "Access extended diagnostic capabilities for modern vehicles"
      },
      {
        name: "Legacy Protocol Support",
        availability: [false, true, true],
        description: "Support for KWP, VPW, and PWM for older vehicles"
      },
      {
        name: "Japanese Vehicle Support",
        availability: [false, true, true],
        description: "Specialized support for Japanese vehicle makes and models"
      },
      {
        name: "Live Data Graphing",
        availability: [true, true, true],
        description: "Visualize sensor data in real-time graphs"
      },
      {
        name: "Custom PID Support",
        availability: [false, true, true],
        description: "Monitor non-standard parameters and custom PIDs"
      },
      {
        name: "DTC Lookup Database",
        availability: [true, true, true],
        description: "Access to trouble code explanations and common fixes"
      },
      {
        name: "Multi-Vehicle Support",
        availability: [false, true, true],
        description: "Monitor and manage multiple vehicles simultaneously"
      },
      {
        name: "Advanced Vehicle Profiles",
        availability: [false, false, true],
        description: "Create and save detailed vehicle configurations"
      },
      {
        name: "Fleet Management",
        availability: [false, false, true],
        description: "Track and manage entire vehicle fleets with central admin"
      },
      {
        name: "Predictive Maintenance",
        availability: [false, false, true],
        description: "AI-powered recommendations to prevent breakdowns"
      },
      {
        name: "Cloud Data Sync",
        availability: [false, true, true],
        description: "Sync vehicle data across devices and platforms"
      }
    ]
  };

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
                  <div className="bg-autostack-50 p-4 rounded-lg mb-4 text-left italic text-sm">
                    <p className="font-medium mb-1">In simple terms:</p>
                    <p>{protocol.laymanExplanation}</p>
                  </div>
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

        <div className="bg-white rounded-xl p-8 card-shadow mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Connectivity Options</h3>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our applications support multiple connection methods to interface with your vehicle's diagnostic port
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {connectivityOptions.map((option, index) => (
              <div key={index} className="border border-autostack-100 rounded-lg p-6 flex flex-col items-center text-center bg-autostack-50/30 hover:bg-autostack-50 transition-colors">
                <div className="w-12 h-12 bg-autostack-100 rounded-full flex items-center justify-center mb-4 text-autostack-600">
                  {option.icon}
                </div>
                <h4 className="text-lg font-bold mb-2">{option.name}</h4>
                <p className="text-muted-foreground text-sm">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-8 card-shadow mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Interactive Feature Comparison</h3>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Compare features across our different product tiers to find the right solution for your needs
          </p>
          
          <div className="mb-6 flex flex-wrap gap-2 justify-center">
            <Button 
              variant="outline" 
              size="sm"
              className="flex gap-2 items-center"
              onClick={() => setActiveFeatureFilter([])}
            >
              <Filter className="h-4 w-4" />
              <span>Clear Filters</span>
            </Button>
            {["Basic", "Professional", "Enterprise"].map((version) => (
              <Button 
                key={version}
                variant={activeFeatureFilter.includes(version) ? "default" : "outline"}
                size="sm"
                className={activeFeatureFilter.includes(version) ? "bg-autostack-600" : ""}
                onClick={() => toggleFeatureFilter(version)}
              >
                {version}
              </Button>
            ))}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-autostack-100">
                  <th className="text-left p-4">Feature</th>
                  {featureComparisonData.versions.map((version, i) => (
                    <th key={i} className="p-4 text-center">{version}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureComparisonData.features
                  .filter(feature => {
                    if (activeFeatureFilter.length === 0) return true;
                    return activeFeatureFilter.some((filter, i) => {
                      const versionIndex = featureComparisonData.versions.indexOf(filter);
                      return feature.availability[versionIndex];
                    });
                  })
                  .map((feature, i) => (
                    <tr key={i} className="border-b border-autostack-50 hover:bg-autostack-50/30">
                      <td className="p-4">
                        <div>
                          <p className="font-medium">{feature.name}</p>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </td>
                      {feature.availability.map((available, j) => (
                        <td key={j} className="p-4 text-center">
                          {available ? 
                            <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" /> :
                            <XCircle className="h-5 w-5 text-red-300 mx-auto" />
                          }
                        </td>
                      ))}
                    </tr>
                  ))
                }
              </tbody>
            </table>
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
