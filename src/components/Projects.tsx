import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Github, Play } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const projects = [
    {
      title: "Smart Classroom",
      description:
      "Built a Flutter-based intelligent classroom app with AI attendance (OpenCV), YOLOv8 behavior tracking, IoT monitoring, role-based dashboards, analytics, and real-time notifications.",
      tags: ["Flutter", "Riverpod", "Python", "Django", "IoT", "YOLOv8", "Computer Vision"],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      githubUrl: null,
    },
    {
      title: "Smart Parking System",
      description:
      "Real-time parking management solution with computer vision. Detects available parking spots, guides drivers, and provides occupancy analytics.",
      tags: ["Flutter", "OpenCV", "Django", "Computer Vision"],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      githubUrl: "https://github.com",
    },
    {
      title: "Inventory Management System",
      description:
      "Developed a scalable inventory management system with QR-based stock tracking, real-time updates, automated alerts, shift optimization, and multi-branch reporting to improve efficiency and reduce costs.",
      tags: ["Flutter", "Riverpod", "PostgreSQL", "Django"],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      githubUrl: null,
    },
    {
      title: "Spotify Clone",
      description:
        "A fully functional music streaming application, exactly like Spotify. Features include playlist management, music player controls, and responsive design.",
      tags: ["Flutter", "Riverpod", "PostgreSQL", "FastAPI"],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      githubUrl: "https://github.com",
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg font-light">
              Some of my recent work
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 100} direction="up">
              <Card className="glass-card overflow-hidden hover:shadow-card transition-all duration-300 h-full flex flex-col">
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-muted">
                  <iframe
                    src={project.videoUrl}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-1 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2" size={16} />
                          Code
                        </a>
                      </Button>
                    )}
                    <Button
                      variant="default"
                      size="sm"
                      asChild
                      className={project.githubUrl ? "flex-1" : "w-full"}
                    >
                      <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Play className="mr-2" size={16} />
                        Watch Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Future Projects Note */}
        <ScrollReveal delay={400}>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              More exciting projects including Machine Learning solutions coming soon!
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;
