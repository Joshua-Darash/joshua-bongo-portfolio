
import { Calendar, Github, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";

const projects = [
  {
    title: "Realtime Suspicious Shoplifting Detection System",
    period: "Ongoing (Jan 2025 – Present)",
    description: "Building a deep learning-powered computer vision system for real-time shoplifting detection in supermarkets.",
    tags: ["Computer Vision", "Deep Learning", "Python"],
    image: "/images/computer-vision-detection.jpg",
    links: {
      github: "#",
      demo: "#"
    }
  },
  {
    title: "University Virtual Campus Tour Website",
    period: "Sep 2023 – Dec 2023",
    description: "Designed and developed a React.js-based virtual tour platform with Figma for Soroti University.",
    tags: ["React.js", "Figma", "JavaScript"],
    image: "/images/virtual-campus-tour.jpg", 
    links: {
      github: "#",
      demo: "#"
    }
  },
  {
    title: "Community Seed Bank Mobile App",
    period: "Sep 2024 – Jan 2025",
    description: "Created an AI-based app for crop yield prediction and seed bank management for ABC Blende Project in Mozambique.",
    tags: ["AI", "Mobile Development", "Agriculture"],
    image: "/images/agriculture-app.jpg",
    links: {
      github: "#",
      demo: "#"
    }
  },
  {
    title: "Events Management System",
    period: "May 2021 – Aug 2021",
    description: "Developed a C-based CLI app for employee and event booking management.",
    tags: ["C", "CLI", "Database Management"],
    image: "/images/events-management.jpg",
    links: {
      github: "#",
      demo: "#"
    }
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Key Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="overflow-hidden border border-border animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="overflow-hidden">
              <AspectRatio ratio={16/9}>
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "placeholder.svg"; // Fallback if image doesn't load
                  }}
                />
              </AspectRatio>
            </div>
            <CardHeader className="p-6 pb-2">
              <h3 className="text-xl font-bold text-primary">{project.title}</h3>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar size={16} />
                <span>{project.period}</span>
              </div>
            </CardHeader>
            <CardContent className="p-6 pt-2">
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="bg-secondary/10 text-secondary text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex gap-3">
              <Button variant="outline" size="sm" className="rounded-full">
                <Github size={16} className="mr-2" />
                Code
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                <Globe size={16} className="mr-2" />
                Demo
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
