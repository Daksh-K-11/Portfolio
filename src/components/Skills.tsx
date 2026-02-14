import React, { useEffect, useState } from "react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

import {
  FaReact,
  FaPython,
  FaJava,
  FaGitAlt,
  FaDocker,
  FaMicrosoft,
  FaAws,
} from "react-icons/fa";

import {
  SiVite,
  SiFlutter,
  SiTailwindcss,
  SiFastapi,
  SiFlask,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiGooglecloud,
  SiJavascript,
  SiC,
  SiCplusplus,
  SiOpencv,
  SiTensorflow,
  SiPytorch,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";


const usePrefersDark = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mm =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");

    const apply = () => {
      const prefers = mm ? mm.matches : false;
      const hasClass = document.documentElement.classList.contains("dark");
      setIsDark(prefers || hasClass);
    };

    apply();

    if (mm && typeof mm.addEventListener === "function") {
      const listener = () => apply();
      mm.addEventListener("change", listener);
      return () => mm.removeEventListener("change", listener);
    }

    // If your app toggles `dark` class on <html>, observe that change:
    const obs = new MutationObserver(apply);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  return isDark;
};

/* ------------------------------
   Reusable Skill Badge Component
--------------------------------*/
const SkillBadge = ({ name, logo, darkLogo, FallbackIcon, fallbackColor }) => {
  const isDark = usePrefersDark();
  const [imgError, setImgError] = useState(false);
  const src = isDark && darkLogo ? darkLogo : logo;

  // Reset error if src changes (for theme switch)
  useEffect(() => {
    setImgError(false);
  }, [src]);

  return (
    <div
      className="group flex items-center gap-2 px-4 py-2 bg-muted dark:bg-muted/80 rounded-full text-sm font-medium text-muted-foreground hover:bg-primary/5 transition-all duration-200 cursor-default"
      title={name}
    >
      {!imgError && src ? (
        <img
          src={src}
          alt={name}
          className="w-5 h-5 object-contain transform transition-transform duration-200 group-hover:scale-110"
          onError={() => setImgError(true)}
          loading="lazy"
        />
      ) : (
        // fallback colored icon
        <FallbackIcon
          className="text-lg transform transition-transform duration-200 group-hover:scale-110"
          style={{ color: fallbackColor }}
          aria-hidden
        />
      )}

      <span className="hover:text-primary transition-colors duration-150">{name}</span>
    </div>
  );
};

/* ------------------------------
   Data (logos & fallback icons)
--------------------------------*/
const skillCategories = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        darkLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        name: "ViteJs",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
        icon: SiVite,
        color: "#646CFF",
      },
      {
        name: "Flutter",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        icon: SiFlutter,
        color: "#02569B",
      },
      {
        name: "Tailwind CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        icon: SiTailwindcss,
        color: "#38BDF8",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "FastAPI",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
        icon: SiFastapi,
        color: "#009688",
      },
      {
        name: "Flask",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
        icon: SiFlask,
        color: "#000000",
      },
      // Note: Mongo moved to Databases (below) — backend remains frameworks/services
    ],
  },
  {
    title: "Languages",
    skills: [
      {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        icon: FaPython,
        color: "#3776AB",
      },
      {
        name: "Java",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        icon: FaJava,
        color: "#F89820",
      },
      {
        name: "C",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        icon: SiC,
        color: "#A8B9CC",
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
      {
        name: "C++",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        icon: SiCplusplus,
        color: "#00599C",
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        name: "PostgreSQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        icon: SiPostgresql,
        color: "#4169E1",
      },
      {
        name: "MongoDB",
        // devicon has mongodb icons; choose original or plain depending on preference
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        darkLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg", // plain can be better on dark
        icon: SiMongodb,
        color: "#47A248",
      },
      {
        name: "MySQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        icon: SiMysql,
        color: "#4479A1",
      },
      {
        name: "SQLite",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
        icon: SiSqlite,
        color: "#003B57",
      },
    ],
  },
  {
    title: "Data & ML",
    skills: [
      {
        name: "NumPy",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
        icon: SiNumpy,
        color: "#013243",
      },
      {
        name: "Pandas",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
        icon: SiPandas,
        color: "#150458",
      },
      {
        name: "Scikit-learn",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
        icon: SiScikitlearn,
        color: "#F7931E",
      },
    ],
  },
  {
    title: "Tools & Deployment",
    skills: [
      {
        name: "Git",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        icon: FaGitAlt,
        color: "#F05032",
      },
      {
        name: "Azure",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
        icon: FaMicrosoft,
        color: "#00A4EF",
      },
      {
        name: "AWS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        icon: FaAws,
        color: "#FF9900",
      },
      {
        name: "Google Cloud",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
        icon: SiGooglecloud,
        color: "#4285F4",
      },
      {
        name: "Firebase",
        // devicon tends to have a plain variant for firebase; original might not exist in some cases
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        darkLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        icon: SiFirebase,
        color: "#FFCA28",
      },
    ],
  },
];

const futureSkills = [
  {
    name: "OpenCV",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
    icon: SiOpencv,
    color: "#5C3EE8",
  },
  {
    name: "TensorFlow",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    icon: SiTensorflow,
    color: "#FF6F00",
  },
  {
    name: "PyTorch",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    icon: SiPytorch,
    color: "#EE4C2C",
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    icon: FaDocker,
    color: "#2496ED",
  },
];

/* ------------------------------
   Main Component
--------------------------------*/
const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
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
              <ScrollReveal key={category.title} delay={categoryIndex * 80}>
                <div className="glass-card p-6 rounded-xl hover:shadow-card transition-all duration-300 h-full">
                  <h3 className="text-xl font-semibold mb-4">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <SkillBadge
                        key={skill.name}
                        name={skill.name}
                        logo={skill.logo}
                        darkLogo={skill.darkLogo}
                        FallbackIcon={skill.icon}
                        fallbackColor={skill.color}
                      />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="glass-card p-6 rounded-xl text-center">
              <h3 className="text-xl font-semibold mb-4 text-muted-foreground">
                Currently Learning
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {futureSkills.map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    logo={skill.logo}
                    darkLogo={skill.darkLogo}
                    FallbackIcon={skill.icon}
                    fallbackColor={skill.color}
                  />
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
