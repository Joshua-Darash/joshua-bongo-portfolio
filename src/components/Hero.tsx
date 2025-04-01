
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-2/3 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
            Joshua Bongo
          </h1>
          <h2 className="text-xl md:text-2xl text-secondary font-medium mb-4">
            Software Engineer | Machine Learning & Web Development Specialist
          </h2>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+256 – 787 439888</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:bongojoshua01@gmail.com" className="hover:text-secondary transition-colors">
                bongojoshua01@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground mb-8">
            <MapPin size={16} />
            <span>Arapai, Soroti, Eastern Uganda</span>
          </div>
          
          <div className="flex gap-4 mb-8">
            <Button variant="outline" size="icon" className="rounded-full">
              <Linkedin size={20} className="text-[#0077B5]" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Github size={20} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Globe size={20} className="text-secondary" />
            </Button>
          </div>
          
          <div className="flex gap-4">
            <Button asChild variant="default">
              <a href="#contact">Contact Me</a>
            </Button>
            <Button asChild variant="outline">
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </div>
        
        <div className="w-full md:w-1/3 mt-10 md:mt-0 flex justify-center animate-fade-in">
          <div className="w-64 h-64 rounded-full bg-secondary/10 border-4 border-secondary/30 flex items-center justify-center text-4xl font-bold text-secondary">
            JB
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
