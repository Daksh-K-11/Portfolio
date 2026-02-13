import { ScrollReveal } from "@/hooks/useScrollAnimation";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "ViteJs", "Flutter", "Tailwind CSS", "JavaScript"],
    },
    {
      title: "Backend",
      skills: ["FastAPI", "Flask"],
    },
    {
      title: "Languages",
      skills: ["Python", "Java", "JavaScript", "C", "C++"],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "SQLite"],
    },
    {
      title: "Data and ML",
      skills: ["Numpy", "Pandas", "Scikit-learn"],
    },
    {
      title: "Tools & Deployment",
      skills: ["Git", "Google Cloud", "Azure"],
    },
  ];

  const futureSkills = ["OpenCV", "TensorFlow", "PyTorch", "Docker"];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
              Skills & Technologies
            </h2>
            <p className="text-muted-foreground text-lg font-light">
              Technologies I work with
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {skillCategories.map((category, categoryIndex) => (
              <ScrollReveal key={category.title} delay={categoryIndex * 80} direction="scale">
                <div className="glass-card p-6 rounded-xl hover:shadow-card transition-all duration-300 h-full">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Future Skills */}
          <ScrollReveal delay={400}>
            <div className="glass-card p-6 rounded-xl text-center">
              <h3 className="text-xl font-semibold mb-4 text-muted-foreground">
                Currently Learning
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {futureSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 border border-primary/30 rounded-full text-sm font-medium text-primary hover:bg-primary/5 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Skills;
