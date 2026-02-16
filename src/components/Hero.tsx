import { Button } from "./ui/button";
import { Download, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import dakshImage from "@/assets/about/daksh.jpg";
import socialLinks from "@/lib/social-links";
import SocialIcon  from "./ui/social-icon";
import resumePDF from "@/assets/about/daksh-resume.pdf";


const Hero = () => {
  
  const handleDownloadCV = () => {
  const link = document.createElement("a");
  link.href = resumePDF;
  link.download = "Daksh_Khinvasara_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Hero background"
          className="w-full h-full object-cover opacity-10 dark:opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />
      </div>

      {/* Subtle accent shapes */}
      <div className="absolute top-32 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-32 right-10 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          {/* Profile Photo */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-border shadow-card">
              <img
                src={dakshImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground tracking-tight">
                Hi, I'm <span className="text-primary">Daksh Khinvasara</span>
              </h1>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-light">
                Full-Stack Developer · Machine Learning Enthusiast · Problem Solver
              </p>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed">
                Passionate about creating innovative solutions through code. Experienced in
                building web applications, mobile apps, and ML models. Always eager to learn
                and tackle new challenges.
              </p>
            </div>

            {/* Social Links */}
            <div className="animate-fade-in-up flex justify-center lg:justify-start gap-3 mb-10" style={{ animationDelay: "0.6s" }}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-full border border-border bg-card/50
hover:shadow-card transition-all duration-300 hover:scale-110
hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <SocialIcon icon={social.icon} label={social.label} />
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="animate-fade-in-up flex flex-wrap justify-center lg:justify-start gap-4" style={{ animationDelay: "0.8s" }}>
              <Button size="lg" onClick={handleDownloadCV}>
                <Download className="mr-2" size={18} />
                Download CV
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToContact}>
                <Mail className="mr-2" size={18} />
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
