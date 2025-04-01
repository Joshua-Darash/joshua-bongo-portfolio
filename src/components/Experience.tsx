
import { Briefcase, Calendar } from "lucide-react";

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
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <div 
            key={index} 
            className="bg-card shadow-sm rounded-lg p-6 border-l-4 border-secondary animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-primary">{experience.title}</h3>
                <div className="text-lg text-muted-foreground">
                  {experience.company}
                  {experience.location && <span> | {experience.location}</span>}
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                <Calendar size={16} />
                <span>{experience.period}</span>
              </div>
            </div>
            <ul className="space-y-2 mt-4">
              {experience.tasks.map((task, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-secondary mt-1">
                    <Briefcase size={16} />
                  </span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
