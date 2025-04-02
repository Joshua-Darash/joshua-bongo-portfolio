
import { 
  Check, 
  Code, 
  Laptop, 
  Lightbulb, 
  Star, 
  Rocket, 
  BookOpen
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { useState } from "react";

const skills = {
  "Programming Languages": {
    icon: <Code className="text-secondary" />,
    items: ["Python", "Java", "C", "PHP", "JavaScript"],
  },
  "Web Development": {
    icon: <Laptop className="text-secondary" />,
    items: ["React.js", "Node.js", "Express.js", "HTML", "CSS", "PHP", "MongoDB", "MySQL"],
  },
  "AI & Machine Learning": {
    icon: <Lightbulb className="text-secondary" />,
    items: ["Deep Learning", "Computer Vision", "Predictive Modeling"],
  },
  "Tools & Platforms": {
    icon: <Star className="text-secondary" />,
    items: ["Git", "GitHub", "Figma", "Jira", "Linux"],
  },
  "Other": {
    icon: <Rocket className="text-secondary" />,
    items: ["Electrical Systems", "Solar Power Installation", "Problem-Solving"],
  }
};

type SkillDisplayMode = 'grid' | 'list' | 'compact';

const Skills = () => {
  const [displayMode, setDisplayMode] = useState<SkillDisplayMode>('grid');

  return (
    <section id="skills" className="section-container">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <h2 className="section-title mb-0">Technical Skills</h2>
        
        <ToggleGroup 
          type="single" 
          value={displayMode} 
          onValueChange={(value) => value && setDisplayMode(value as SkillDisplayMode)}
          className="border rounded-md p-1 bg-muted/30"
        >
          <ToggleGroupItem value="grid" aria-label="Grid View">
            <span className="flex items-center gap-2">
              <Laptop size={16} />
              <span className="hidden sm:inline">Grid</span>
            </span>
          </ToggleGroupItem>
          <ToggleGroupItem value="list" aria-label="List View">
            <span className="flex items-center gap-2">
              <BookOpen size={16} />
              <span className="hidden sm:inline">List</span>
            </span>
          </ToggleGroupItem>
          <ToggleGroupItem value="compact" aria-label="Compact View">
            <span className="flex items-center gap-2">
              <Star size={16} />
              <span className="hidden sm:inline">Compact</span>
            </span>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {displayMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, { icon, items }], index) => (
            <div 
              key={category} 
              className="bg-card border border-muted/40 shadow-sm rounded-lg p-6 hover:shadow-md transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  {icon}
                </div>
                <h3 className="text-lg font-bold text-primary">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span 
                    key={skill} 
                    className="bg-muted text-foreground px-3 py-1 rounded-full text-sm hover:bg-secondary/10 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {displayMode === 'list' && (
        <div className="space-y-6">
          {Object.entries(skills).map(([category, { icon, items }], index) => (
            <div 
              key={category} 
              className="bg-card border border-muted/40 shadow-sm rounded-lg p-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  {icon}
                </div>
                <h3 className="text-lg font-bold text-primary">{category}</h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {items.map((skill) => (
                  <li 
                    key={skill}
                    className="flex items-center gap-2 group" 
                  >
                    <Check size={16} className="text-secondary group-hover:scale-110 transition-transform" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {displayMode === 'compact' && (
        <TooltipProvider>
          <div className="bg-card border border-muted/40 shadow-sm rounded-lg p-6 animate-fade-in">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {Object.entries(skills).map(([category, { icon, items }]) => (
                <div key={category} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-3">
                    {icon}
                  </div>
                  <h3 className="text-md font-bold mb-3">{category}</h3>
                  <div className="flex flex-wrap justify-center gap-1">
                    {items.map((skill) => (
                      <Tooltip key={skill}>
                        <TooltipTrigger asChild>
                          <div className="w-2 h-2 bg-secondary rounded-full hover:scale-150 transition-transform"></div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{skill}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TooltipProvider>
      )}
    </section>
  );
};

export default Skills;
