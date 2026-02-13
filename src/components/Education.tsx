import { GraduationCap, Briefcase } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

const Education = () => {
  const timeline = [
    {
      type: "education",
      icon: GraduationCap,
      title: "B.Tech in AI & Data Science",
      organization: "Rajalakshmi Engineering College",
      period: "2022 - 2027",
      description: "Focused on Software Engineering, Machine Learning, and Data Structures",
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "High School",
      organization: "Sherwood Hall Senior Secondary School",
      period: "2008 - 2022",
      description: "Specialized in Science and Mathematics with top grades.",
    },
    {
      type: "experience",
      icon: Briefcase,
      title: "Technical Lead",
      organization: "Google Developer Group",
      period: "2023",
      description:
      "Led technical workshops and events. Mentored junior developers and organized coding competitions.",
    },
    {
      type: "experience",
      icon: Briefcase,
      title: "Core Member",
      organization: "Intellexa Tech Club",
      period: "2023",
      description:
      "Collaborated on multiple tech projects. Participated in hackathons and coding competitions.",
    },
    {
      type: "experience",
      icon: Briefcase,
      title: "App Developer Intern",
      organization: "WeDigiStudio",
      period: "Apr 2025 - Dec 2025",
      description:
        "Developed and maintained web applications using React and Node.js. Implemented new features and optimized performance.",
    },
  ];

  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
              Education & Experience
            </h2>
            <p className="text-muted-foreground text-lg font-light">My journey so far</p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8 md:space-y-12">
            {timeline.map((item, index) => (
              <ScrollReveal
                key={index}
                delay={index * 100}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`relative flex items-start md:items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 md:w-3 md:h-3 -ml-1.5 rounded-full bg-primary z-10" />

                  {/* Content Card */}
                  <div
                    className={`ml-10 md:ml-0 md:w-5/12 w-[calc(100%-3rem)] ${
                      index % 2 === 0 ? "md:mr-auto md:pr-8 lg:pr-12" : "md:ml-auto md:pl-8 lg:pl-12"
                    }`}
                  >
                    <div className="glass-card p-4 md:p-6 rounded-xl hover:shadow-card transition-all duration-300">
                      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                        <div
                          className={`p-2 md:p-3 rounded-lg flex-shrink-0 ${
                            item.type === "education"
                              ? "bg-primary/10 text-primary"
                              : "bg-accent/10 text-accent"
                          }`}
                        >
                          <item.icon size={20} className="md:w-6 md:h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1 break-words">
                            {item.title}
                          </h3>
                          <p className="text-sm md:text-base text-primary font-medium mb-1">
                            {item.organization}
                          </p>
                          <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3">
                            {item.period}
                          </p>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
