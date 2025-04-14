
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Check, Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: 'hobbyist',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleRadioChange = (value: string) => {
    setFormState(prev => ({ ...prev, interest: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast("Message sent successfully", {
        description: "We'll get back to you shortly.",
        icon: <Check className="h-4 w-4 text-green-500" />
      });
      setIsSubmitting(false);
      setFormState({
        name: '',
        email: '',
        company: '',
        phone: '',
        interest: 'hobbyist',
        message: ''
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">Get in <span className="gradient-text">Touch</span></h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Request a demo, custom quote, or learn more about our solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 card-shadow">
              <h3 className="text-2xl font-bold mb-6">Request Information</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input 
                      id="name" 
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Smith" 
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@example.com" 
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input 
                      id="company" 
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input 
                      id="phone" 
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <Label>I'm interested in solutions for:</Label>
                  <RadioGroup 
                    defaultValue="hobbyist" 
                    value={formState.interest}
                    onValueChange={handleRadioChange}
                    className="flex flex-col space-y-1 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="hobbyist" id="hobbyist" />
                      <Label htmlFor="hobbyist">Hobbyist/Personal Use</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="professional" id="professional" />
                      <Label htmlFor="professional">Professional Garage/Shop</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="enterprise" id="enterprise" />
                      <Label htmlFor="enterprise">Enterprise/Fleet Management</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="technology" id="technology" />
                      <Label htmlFor="technology">Technology Integration/Partner</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell us about your needs or questions..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-autostack-600 hover:bg-autostack-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit Request"}
                </Button>
              </form>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-xl p-8 card-shadow mb-8">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-autostack-600 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:info@autostack.tech" className="text-autostack-600 hover:underline">
                      info@autostack.tech
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-autostack-600 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+15551234567" className="text-autostack-600 hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-autostack-600 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Headquarters</p>
                    <p className="text-muted-foreground">
                      123 Tech Avenue<br />
                      San Francisco, CA 94107<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-autostack-700 to-autostack-900 rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Support Hours</h3>
              <p className="mb-4">Our technical support team is available:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9AM - 6PM EST</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10AM - 2PM EST</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>
              <p className="text-sm text-white/80">
                * Enterprise customers have access to 24/7 priority support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
