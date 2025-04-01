
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { AspectRatio } from "./ui/aspect-ratio";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full bg-secondary/5 animate-float"></div>
        <div className="absolute top-1/3 -left-20 w-80 h-80 rounded-full bg-primary/5 animate-float" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
        <div className="w-full md:w-3/5 animate-fade-in">
          <div className="inline-block mb-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium">
            Software Engineer
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Joshua Bongo
          </h1>
          
          <h2 className="text-xl md:text-2xl text-secondary font-medium mb-6">
            Machine Learning & Web Development Specialist
          </h2>
          
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-2 text-muted-foreground group hover:text-foreground transition-colors">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-muted/80 transition-colors">
                <Phone size={14} />
              </div>
              <span>+256 – 787 439888</span>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground group hover:text-foreground transition-colors">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-muted/80 transition-colors">
                <Mail size={14} />
              </div>
              <a href="mailto:bongojoshua01@gmail.com" className="hover:text-secondary transition-colors">
                bongojoshua01@gmail.com
              </a>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground group hover:text-foreground transition-colors">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-muted/80 transition-colors">
                <MapPin size={14} />
              </div>
              <span>Arapai, Soroti, Eastern Uganda</span>
            </div>
          </div>
          
          <div className="flex gap-4 mb-8">
            <Button variant="outline" size="icon" className="rounded-full bg-card hover:bg-card/80 hover:text-secondary transition-all duration-300">
              <Linkedin size={20} className="text-[#0077B5]" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full bg-card hover:bg-card/80 hover:text-secondary transition-all duration-300">
              <Github size={20} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full bg-card hover:bg-card/80 hover:text-secondary transition-all duration-300">
              <Globe size={20} className="text-secondary" />
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="default" className="relative overflow-hidden group">
              <a href="#contact">
                <span className="absolute -inset-x-1 -top-1 h-0.5 bg-primary-foreground/30 group-hover:animate-[flash_2s_ease-in-out]"></span>
                Contact Me
              </a>
            </Button>
            <Button asChild variant="outline" className="hover:border-secondary hover:text-secondary transition-all duration-300">
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </div>
        
        <div className="w-full md:w-2/5 mt-14 md:mt-0 flex justify-center animate-fade-in">
          <div className="relative w-full max-w-[320px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-3xl blur-xl"></div>
            <div className="relative border-8 border-card bg-card rounded-3xl shadow-lg overflow-hidden">
              <AspectRatio ratio={1/1} className="bg-gradient-to-br from-muted/50 to-background">
                <div className="h-full w-full flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                      <code className="text-[8px] text-secondary whitespace-pre-wrap">
                        {`
function innovation() {
  const skills = [
    'ML', 'Web Dev', 
    'Computer Vision'
  ];
  
  return skills.map(
    skill => solve(skill)
  );
}
                        `}
                      </code>
                    </div>
                    <div className="relative z-10 text-6xl font-bold text-gradient-to-br from-secondary to-primary bg-clip-text text-transparent">
                      JB
                    </div>
                  </div>
                </div>
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs mb-1">Explore</span>
          <div className="w-8 h-8 rounded-full border border-muted-foreground/30 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
