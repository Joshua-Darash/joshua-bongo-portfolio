
import { Award, Calendar } from "lucide-react";

const certifications = [
  {
    title: "Frontend Development with React.js",
    issuer: "Meta Online Training",
    period: "Jun 2023 – Aug 2023",
    description: "Comprehensive training in React.js development and modern frontend techniques."
  },
  {
    title: "CS50x: Introduction to Computer Science",
    issuer: "Harvard Online",
    period: "Feb 2023 – Mar 2023",
    description: "Harvard's introduction to computer science and programming principles."
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-container">
      <h2 className="section-title">Certifications & Training</h2>
      <div className="space-y-6">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="bg-card shadow-sm rounded-lg p-6 flex flex-col md:flex-row gap-4 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex-shrink-0 flex items-start justify-center">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <Award size={24} className="text-secondary" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary">{cert.title}</h3>
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <span>{cert.issuer}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{cert.period}</span>
                </div>
              </div>
              <p className="text-foreground">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
