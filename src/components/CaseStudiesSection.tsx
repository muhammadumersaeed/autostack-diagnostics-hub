
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Star } from 'lucide-react';

const CaseStudiesSection = () => {
  const testimonials = [
    {
      quote: "Autostack's diagnostic tools have completely transformed how we handle vehicle diagnostics in our shop. The detailed reports and cross-platform compatibility save us hours every day.",
      author: "Michael Chen",
      position: "Owner, Precision Auto Care",
      rating: 5
    },
    {
      quote: "As someone who works on cars as a hobby, I needed something powerful but user-friendly. Autostack delivers exactly that - professional-grade diagnostics without the complexity.",
      author: "Sarah Johnson",
      position: "Automotive Enthusiast",
      rating: 5
    },
    {
      quote: "Managing a fleet of 50+ vehicles used to be a nightmare until we integrated Autostack's solutions. The real-time diagnostics and predictive maintenance have reduced our downtime by 40%.",
      author: "Robert Williams",
      position: "Fleet Manager, CityTransit Inc.",
      rating: 5
    }
  ];

  const caseStudies = [
    {
      title: "National Fleet Sees 40% Reduction in Vehicle Downtime",
      category: "Fleet Management",
      description: "How a leading logistics company leveraged Autostack's diagnostic platform to implement predictive maintenance",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Independent Garage Expands Services with Advanced Diagnostics",
      category: "Professional Workshop",
      description: "A small-town garage now offers dealership-level services using our comprehensive diagnostic tools",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Tech Startup Builds Custom Diagnostic Solution",
      category: "Technology Partner",
      description: "How a startup integrated our API to create an innovative new service for the automotive industry",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="case-studies" className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">Case Studies & <span className="gradient-text">Testimonials</span></h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real-world success stories and feedback from our valued customers
          </p>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 card-shadow">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <blockquote className="mb-4 text-muted-foreground">"{testimonial.quote}"</blockquote>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Featured Case Studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden card-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-autostack-600 mb-2">{study.category}</div>
                  <h4 className="text-xl font-bold mb-3">{study.title}</h4>
                  <p className="text-muted-foreground mb-4">{study.description}</p>
                  <Button variant="ghost" className="text-autostack-600 hover:text-autostack-800 hover:bg-autostack-50 p-0 h-auto font-medium">
                    Read Case Study <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
