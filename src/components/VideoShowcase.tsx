
import React from 'react';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VideoShowcase = () => {
  const videos = [
    {
      title: "Introducing Autostack Vehicle Diagnostics",
      duration: "2:34",
      thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80",
      description: "A quick overview of our diagnostics platform and key features",
      youtubeId: "PO9E_ws4CqE"
    },
    {
      title: "Live Demo: OBD2 Diagnostics",
      duration: "4:17",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
      description: "Watch our software diagnose common vehicle issues in real-time"
    },
    {
      title: "Advanced Fleet Management Features",
      duration: "3:45",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
      description: "Learn how our enterprise solutions help manage large vehicle fleets"
    }
  ];

  return (
    <section id="videos" className="py-20 bg-gradient-to-b from-background to-autostack-50/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">Video <span className="gradient-text">Showcase</span></h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Watch product demonstrations, tutorials, and live diagnostic sessions
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="relative rounded-xl overflow-hidden card-shadow aspect-video bg-black">
            <iframe 
              className="w-full h-full"
              src={`https://www.youtube.com/embed/PO9E_ws4CqE`} 
              title="Autostack Vehicle Diagnostics"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">See Autostack in Action</h3>
            <p className="text-lg text-muted-foreground">
              Our video library showcases real-world applications of our diagnostic software across 
              different vehicles, platforms, and use cases. Watch expert demonstrations and learn 
              how to get the most out of our solutions.
            </p>
            <div className="space-y-4">
              {videos.map((video, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-lg hover:bg-white/80 transition-colors group cursor-pointer">
                  <div className="relative rounded-md overflow-hidden flex-shrink-0 w-24 h-16">
                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <Play className="h-4 w-4 text-white" fill="white" />
                    </div>
                    <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium group-hover:text-autostack-700">{video.title}</h4>
                    <p className="text-sm text-muted-foreground">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="border-autostack-200 hover:bg-autostack-50">
              View All Videos
            </Button>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-8 card-shadow text-center">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Demo?</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Our team can provide personalized demonstrations for your specific vehicle types, 
            diagnostic needs, or integration requirements.
          </p>
          <Button className="bg-autostack-600 hover:bg-autostack-700">
            Request Custom Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
