
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const Videos = () => {
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
      description: "Watch our software diagnose common vehicle issues in real-time",
      youtubeId: "PO9E_ws4CqE"
    },
    {
      title: "Advanced Fleet Management Features",
      duration: "3:45",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
      description: "Learn how our enterprise solutions help manage large vehicle fleets",
      youtubeId: "PO9E_ws4CqE"
    },
    {
      title: "Japanese Vehicle Diagnostics Support",
      duration: "3:18",
      thumbnail: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=600&q=80",
      description: "See our specialized diagnostics tools for Japanese vehicles in action",
      youtubeId: "PO9E_ws4CqE"
    },
    {
      title: "Understanding OBD2 Protocols",
      duration: "5:22",
      thumbnail: "https://images.unsplash.com/photo-1581093458791-9d45c7d2a106?auto=format&fit=crop&w=600&q=80",
      description: "Learn about the various OBD2 protocols and how they differ",
      youtubeId: "PO9E_ws4CqE"
    },
    {
      title: "ELM327 Setup Guide",
      duration: "2:49",
      thumbnail: "https://images.unsplash.com/photo-1570733577524-3a047079e80d?auto=format&fit=crop&w=600&q=80",
      description: "Step-by-step instructions for setting up your ELM327 adapter",
      youtubeId: "PO9E_ws4CqE"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-background to-autostack-50/50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h1 className="section-heading">Video <span className="gradient-text">Library</span></h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Browse our complete collection of product demonstrations, tutorials, and diagnostic sessions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {videos.map((video, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden card-shadow flex flex-col h-full">
                  <div className="relative aspect-video">
                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group">
                      <Button 
                        variant="outline" 
                        size="icon"
                        className="rounded-full bg-white/20 border-white text-white hover:bg-white hover:text-autostack-800 transition-all transform group-hover:scale-110"
                        onClick={() => window.open(`https://www.youtube.com/watch?v=${video.youtubeId}`, '_blank')}
                      >
                        <Play className="h-6 w-6" fill="currentColor" />
                      </Button>
                      <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                    <p className="text-muted-foreground mb-4">{video.description}</p>
                    <Button 
                      variant="outline" 
                      className="mt-auto w-full border-autostack-200 hover:bg-autostack-50"
                      onClick={() => window.open(`https://www.youtube.com/watch?v=${video.youtubeId}`, '_blank')}
                    >
                      Watch Video
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-8 card-shadow text-center">
              <h3 className="text-2xl font-bold mb-4">Need Custom Video Guides?</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                Our team can create personalized tutorial videos for your specific vehicle types, 
                diagnostic needs, or integration questions.
              </p>
              <Button className="bg-autostack-600 hover:bg-autostack-700">
                Request Custom Video
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Videos;
