
import { Award, BookOpen, Briefcase, User } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-card to-background border border-muted/40 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group animate-fade-in">
          <CardContent className="p-6 flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <User size={24} className="text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Who I Am</h3>
            <p className="text-muted-foreground text-center">
              A passionate Software Engineer with expertise in electronics and computer engineering
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-card to-background border border-muted/40 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group animate-fade-in delay-100">
          <CardContent className="p-6 flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Briefcase size={24} className="text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">What I Do</h3>
            <p className="text-muted-foreground text-center">
              Specialize in full-stack web development, machine learning, and computer vision
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-card to-background border border-muted/40 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group animate-fade-in delay-200">
          <CardContent className="p-6 flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Award size={24} className="text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">How I Work</h3>
            <p className="text-muted-foreground text-center">
              Committed to clean code, innovative design, and collaborative success
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Card className="bg-card shadow-md rounded-lg overflow-hidden animate-fade-in delay-300">
        <div className="p-1 bg-gradient-to-r from-secondary/40 via-primary/20 to-secondary/40"></div>
        <CardContent className="p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex-shrink-0 flex items-center justify-center mt-1">
              <BookOpen size={20} className="text-secondary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">My Journey</h3>
              <p className="text-lg leading-relaxed">
                I am a passionate Software Engineer with a strong foundation in electronics and computer engineering, 
                specializing in full-stack web development, machine learning, and computer vision. With hands-on 
                experience in designing impactful solutions—like AI-driven mobile apps and real-time detection 
                systems—I thrive at the intersection of technology and real-world problem-solving.
              </p>
            </div>
          </div>
          
          <div className="mt-6 pl-16">
            <p className="text-lg leading-relaxed text-muted-foreground">
              My work reflects a commitment to clean code, innovative design, and collaborative success. I believe in 
              creating technology that not only functions efficiently but also enhances user experiences and solves 
              meaningful problems.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default About;
