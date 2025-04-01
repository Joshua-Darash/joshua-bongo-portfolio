
import { Github, Globe, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Joshua Bongo</h3>
            <p className="mb-2 text-primary-foreground/80">Software Engineer | Machine Learning & Web Development Specialist</p>
            <p className="text-primary-foreground/80">
              <a href="mailto:bongojoshua01@gmail.com" className="hover:text-secondary transition-colors">
                bongojoshua01@gmail.com
              </a>
            </p>
          </div>
          
          <div className="flex gap-3">
            <Button variant="outline" size="icon" className="rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 border-primary-foreground/20">
              <Linkedin size={20} className="text-primary-foreground" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 border-primary-foreground/20">
              <Github size={20} className="text-primary-foreground" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 border-primary-foreground/20">
              <Globe size={20} className="text-primary-foreground" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 border-primary-foreground/20">
              <Mail size={20} className="text-primary-foreground" />
            </Button>
          </div>
        </div>
        
        <div className="w-full h-px bg-primary-foreground/20 mb-8"></div>
        
        <div className="text-center">
          <p className="text-primary-foreground/70 text-sm">
            © {currentYear} Joshua Bongo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
