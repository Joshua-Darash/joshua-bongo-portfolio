
import { Briefcase, Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const experiences = [
  {
    title: "Software Development Consultant",
    company: "ABC Blende Project",
    location: "Mozambique",
    period: "Sep 2024 – Jan 2025",
    tasks: [
      "Designed a comprehensive community seed bank framework tailored for implementation in Mozambique",
      "Developed an AI-powered mobile application for crop yield prediction and seed bank record-keeping",
      "Collaborated with cross-functional teams to create scalable and sustainable agricultural technology solutions"
    ]
  },
  {
    title: "Frontend Developer",
    company: "Aetotechs",
    location: "",
    period: "Feb 2023 – Jul 2023",
    tasks: [
      "Built a real estate web platform frontend with React.js",
      "Mastered JavaScript and modern frontend technologies including HTML and CSS",
      "Implemented responsive design principles for optimal user experience across devices"
    ]
  },
  {
    title: "Electrical & Systems Engineer",
    company: "Proson Electricals",
    location: "Lira",
    period: "Apr 2022 – Aug 2022 (Intern) & Dec 2022 – Feb 2023 (Contract)",
    tasks: [
      "Executed electrical installations, solar setups, and CCTV systems",
      "Supervised site operations and coordinated with technical teams",
      "Applied technical knowledge to troubleshoot and optimize existing systems"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">Professional Experience</h2>
      
      <Tabs defaultValue="timeline" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
          <TabsTrigger value="timeline">Timeline View</TabsTrigger>
          <TabsTrigger value="cards">Card View</TabsTrigger>
        </TabsList>
        
        <TabsContent value="timeline" className="animate-fade-in">
          <div className="relative border-l-2 border-secondary/30 pl-8 space-y-10 ml-4 md:ml-8">
            {experiences.map((experience, index) => (
              <div 
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="absolute w-4 h-4 bg-secondary rounded-full -left-[2.55rem] top-1.5 shadow-md shadow-secondary/20"></span>
                <div className="bg-card shadow-md rounded-lg p-6 border border-muted/40 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary">{experience.title}</h3>
                      <div className="text-lg text-muted-foreground flex flex-wrap items-center gap-1">
                        <span>{experience.company}</span>
                        {experience.location && (
                          <>
                            <span className="text-muted-foreground/50">•</span>
                            <span>{experience.location}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0 text-sm">
                      <Calendar size={16} className="text-secondary" />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {experience.tasks.map((task, i) => (
                      <li key={i} className="flex gap-3 group">
                        <span className="text-secondary mt-1 group-hover:translate-x-1 transition-transform">
                          <ArrowRight size={16} />
                        </span>
                        <span className="text-muted-foreground">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="cards" className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((experience, index) => (
              <Card 
                key={index}
                className="bg-gradient-to-br from-card to-background border border-muted/40 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-2 bg-gradient-to-r from-secondary to-secondary/50"></div>
                <CardContent className="p-6 pt-5">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Briefcase size={18} className="text-secondary" />
                    </div>
                    <div className="px-2 py-1 bg-muted text-xs rounded-full text-muted-foreground flex items-center">
                      <Calendar size={12} className="mr-1" />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1">{experience.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {experience.company}
                    {experience.location && ` • ${experience.location}`}
                  </p>
                  
                  <div className="border-t border-border pt-4">
                    <ul className="space-y-2">
                      {experience.tasks.map((task, i) => (
                        <li key={i} className="flex gap-2 group text-sm">
                          <span className="text-secondary shrink-0 mt-1 group-hover:translate-x-1 transition-transform">
                            <ArrowRight size={14} />
                          </span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Experience;
