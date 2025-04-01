
const skills = {
  "Programming Languages": ["Python", "Java", "C", "PHP", "JavaScript"],
  "Web Development": ["React.js", "Node.js", "Express.js", "HTML", "CSS", "PHP", "MongoDB", "MySQL"],
  "AI & Machine Learning": ["Deep Learning", "Computer Vision", "Predictive Modeling"],
  "Tools & Platforms": ["Git", "GitHub", "Figma", "Jira", "Linux"],
  "Other": ["Electrical Systems", "Solar Power Installation", "Problem-Solving"]
};

const Skills = () => {
  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, skillList], index) => (
          <div 
            key={category} 
            className="bg-card shadow-sm rounded-lg p-6 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="text-lg font-bold text-primary mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill) => (
                <span 
                  key={skill} 
                  className="bg-muted text-foreground px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
