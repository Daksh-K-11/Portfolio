import { Card } from "./ui/card";
import { Trophy, ExternalLink } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import  sih  from "@/assets/achievements/sih.jpg";
import  codeathon2  from "@/assets/achievements/codeathon-2-win.jpg";
import  codetahonSpecialPrize  from "@/assets/achievements/codeathon-special-prize.jpg";
import  conocithon  from "@/assets/achievements/conocithon-3.jpg";
import  hackmeggadon  from "@/assets/achievements/hackmeggadon.jpg";

const Achievements = () => {
  const achievements = [
    {
      title: "Smart India Hackathon Winner",
      description:
        "Won the prestigious Smart India Hackathon 2023, competing against teams from across India.",
      linkedinUrl: "https://www.linkedin.com/posts/daksh-khinvasara_im-overjoyed-to-announce-that-my-team-and-activity-7274033261922689024-2mZE",
      year: "2024",
      image: sih,
    },
    {
      title: "Hackmeggadon Champion",
      description:
        "First place in Hackmeggadon, a 24-hour intensive hackathon, among 300+ competitive teams.",
      linkedinUrl: "https://www.linkedin.com/posts/daksh-khinvasara_over-the-moon-to-share-that-our-team-emerged-activity-7229462130331111424-MQIK",
      year: "2024",
      image: hackmeggadon,
    },
    {
      title: "Codeathon 2.0 Winner",
      description:
        "Got first position in a national-level hackathon, demonstrating exceptional coding skills and problem-solving, in first year of college.",
      linkedinUrl: "https://www.linkedin.com/posts/daksh-khinvasara_hey-everyone-we-participated-and-won-1st-activity-7177611814526988288-aDIo",
      year: "2023",
      image: codeathon2,
    },
    {
      title: "Conocithon 3.0 2nd Runner Up",
      description:
        "Achieved 3rd place in a tech competition, showcasing innovative thinking and technical excellence.",
      linkedinUrl: "https://www.linkedin.com/posts/daksh-khinvasara_proud-to-announce-that-we-secured-3rd-place-activity-7240702183199928321-ZJ1M",
      year: "2024",
      image: conocithon,
    },
    {
      title: "Codeathon 3.0 Special Prize",
      description:
        "Won a special prize in Codeathon 3.0 for an innovative project that stood out among hundreds of entries.",
      linkedinUrl: "https://www.linkedin.com/posts/daksh-khinvasara_exactly-a-year-ago-this-very-hackathon-marked-activity-7311731362938376192-l0hm",
      year: "2025",
      image: codetahonSpecialPrize,
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

          <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8">
          {achievements.map((achievement, index) => (
            <ScrollReveal key={achievement.title} delay={index * 100} direction="up">
              <a
                href={achievement.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-[360px]"
              >
                <Card className="glass-card overflow-hidden hover:shadow-card transition-all duration-300 h-full cursor-pointer group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
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
