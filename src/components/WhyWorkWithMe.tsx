
import { Check, Code, Lightbulb, Users } from "lucide-react";

const reasons = [
  {
    icon: <Lightbulb className="text-secondary" />,
    title: "Innovative Solutions",
    description: "I approach each project with creative problem-solving, delivering solutions that address real-world challenges."
  },
  {
    icon: <Code className="text-secondary" />,
    title: "Technical Expertise",
    description: "From AI-driven tools to seamless web experiences, I bring a depth of knowledge across multiple domains."
  },
  {
    icon: <Check className="text-secondary" />,
    title: "Proven Track Record",
    description: "My portfolio demonstrates successful delivery of impactful projects from agriculture to security systems."
  },
  {
    icon: <Users className="text-secondary" />,
    title: "Collaborative Approach",
    description: "I thrive in team environments, combining my skills with others to create solutions that exceed expectations."
  }
];

const WhyWorkWithMe = () => {
  return (
    <section id="why-work-with-me" className="section-container bg-muted/30">
      <h2 className="section-title">Why Work With Me?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reasons.map((reason, index) => (
          <div 
            key={index} 
            className="bg-card shadow-sm rounded-lg p-6 border border-border flex items-start gap-4 hover:shadow-md transition-shadow animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
              {reason.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 bg-card shadow-sm rounded-lg p-6 animate-fade-in">
        <p className="text-lg leading-relaxed">
          Whether it's crafting seamless web experiences or harnessing machine learning for innovation, 
          I'm driven by a desire to make technology work for people. Let's build something impactful together.
        </p>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
