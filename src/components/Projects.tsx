import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Github, Play } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import smartClassroomDark from "@/assets/projects/smart-classroom-dark.png";
import smartClassroomLight from "@/assets/projects/smart-classroom-light.png";
import inventoryManagementDark from "@/assets/projects/inventory-management-dark.png";
import inventoryManagementLight from "@/assets/projects/inventory-management-light.png";
import plantDiseaseDark from "@/assets/projects/plant-disease-detection-dark.png";
import plantDiseaseLight from "@/assets/projects/plant-disease-detection-light.png";
import smartParkingDark from "@/assets/projects/smart-parking-dark.png";
import smartParkingLight from "@/assets/projects/smart-parking-light.png";
import spotifyCloneDark from "@/assets/projects/spotify-clone-dark.png";
import spotifyCloneLight from "@/assets/projects/spotify-clone-light.png";

const Projects = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const projects = [
    {
      title: "Smart Classroom",
      thumbnails: {
        dark: smartClassroomDark,
        light: smartClassroomLight,
      },
      description:
        "Built a Flutter-based intelligent classroom app with AI attendance (OpenCV), YOLOv8 behavior tracking, IoT monitoring, role-based dashboards, analytics, and real-time notifications.",
      tags: ["Flutter", "Riverpod", "Python", "Django", "IoT", "YOLOv8", "Computer Vision"],
      videoUrl: null,
      githubUrl: null,
    },
    {
      title: "Smart Parking System",
      thumbnails: {
        dark: smartParkingDark,
        light: smartParkingLight,
      },
      description:
        "Real-time parking management solution with computer vision. Detects available parking spots, guides drivers, and provides occupancy analytics.",
      tags: ["Flutter", "OpenCV", "Django", "Computer Vision"],
      videoUrl: null,
      githubUrl: "https://github.com/Daksh-K-11/Smart-Parking-System",
    },
    {
      title: "Inventory Management System",
      thumbnails: {
        dark: inventoryManagementDark,
        light: inventoryManagementLight,
      },
      description:
        "Developed a scalable inventory management system with QR-based stock tracking, real-time updates, automated alerts, shift optimization, and multi-branch reporting to improve efficiency and reduce costs.",
      tags: ["Flutter", "Riverpod", "PostgreSQL", "Django"],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      githubUrl: "https://github.com/Daksh-K-11/Inventory-Management-App",
    },
    {
      title: "Spotify Clone",
      thumbnails: {
        dark: spotifyCloneDark,
        light: spotifyCloneLight,
      },
      description:
        "A fully functional music streaming application, exactly like Spotify. Features include playlist management, music player controls, and responsive design, built using MVVM architecture.",
      tags: ["Flutter", "Riverpod", "PostgreSQL", "FastAPI"],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      githubUrl: "https://github.com/Daksh-K-11/Spotify-Clone",
    },
    {
      title: "Plant Disease Detection System",
      thumbnails: {
        dark: plantDiseaseDark,
        light: plantDiseaseLight,
      },
      description:
        "Built a deep learning-based plant disease detection system that classifies diseases across 10+ crops with over 90% accuracy. Utilizes CNN models for real-time image-based diagnosis to support smart agriculture.",
      tags: ["Python", "TensorFlow", "CNN", "Deep Learning", "Computer Vision"],
      videoUrl: null,
      githubUrl: "https://github.com/Daksh-K-11/Plant-Disease-Detection",
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

        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 100} direction="up">
              <Card className="glass-card w-[360px] overflow-hidden hover:shadow-card transition-all duration-300 h-full flex flex-col">
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-muted">
                  {/* Light Image */}
                  <img
                    src={project.thumbnails.light}
                    alt={`${project.title} light`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${theme === "light" ? "opacity-100" : "opacity-0"
                      }`}
                  />

                  {/* Dark Image */}
                  <img
                    src={project.thumbnails.dark}
                    alt={`${project.title} dark`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${theme === "dark" ? "opacity-100" : "opacity-0"
                      }`}
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
