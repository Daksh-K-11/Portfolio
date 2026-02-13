import { Card } from "./ui/card";
import { Trophy, ExternalLink } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

const Achievements = () => {
  const achievements = [
    {
      title: "Smart India Hackathon Winner",
      description:
        "Won the prestigious Smart India Hackathon 2023, competing against teams from across India. Developed an innovative solution for smart city management.",
      linkedinUrl: "https://linkedin.com",
      year: "2023",
      image: "/placeholder.svg",
    },
    {
      title: "Hackmeggadon Champion",
      description:
        "First place in Hackmeggadon, a 24-hour intensive hackathon. Built a revolutionary healthcare application using AI and IoT technologies.",
      linkedinUrl: "https://linkedin.com",
      year: "2023",
      image: "/placeholder.svg",
    },
    {
      title: "Codeathon 2.0 Winner",
      description:
        "Secured first position in Codeathon 2.0, demonstrating exceptional coding skills and problem-solving abilities in competitive programming.",
      linkedinUrl: "https://linkedin.com",
      year: "2022",
      image: "/placeholder.svg",
    },
    {
      title: "National Level Competition Winner",
      description:
        "Achieved first place in a national-level tech competition, showcasing innovative thinking and technical excellence.",
      linkedinUrl: "https://linkedin.com",
      year: "2022",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
              Achievements
            </h2>
            <p className="text-muted-foreground text-lg font-light">
              Recognition and awards
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <ScrollReveal key={achievement.title} delay={index * 100} direction="up">
              <a
                href={achievement.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="glass-card overflow-hidden hover:shadow-card transition-all duration-300 h-full cursor-pointer group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute top-4 right-4 p-2 bg-primary/10 backdrop-blur-sm rounded-lg border border-primary/20">
                      <Trophy size={20} className="text-primary" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h3>
                      <ExternalLink
                        size={16}
                        className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-2 mt-1"
                      />
                    </div>
                    <p className="text-sm text-primary font-medium mb-3">
                      {achievement.year}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </Card>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
