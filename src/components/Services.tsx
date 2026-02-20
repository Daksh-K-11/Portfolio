import { Code, Smartphone, Brain, Server, LineChart, Cloud, Quote } from "lucide-react";
import { Card } from "./ui/card";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { Avatar, AvatarFallback } from "./ui/avatar";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Frontend Web Development",
      description:
        "Building responsive and interactive web applications using modern frameworks like React, Vue, and cutting-edge technologies.",
    },
    {
      icon: Smartphone,
      title: "Frontend App Development",
      description:
        "Creating beautiful and performant mobile applications with Flutter, delivering seamless cross-platform experiences.",
    },
    {
      icon: Brain,
      title: "ML Solutions",
      description:
        "Developing intelligent machine learning models for predictive analytics, computer vision, and natural language processing.",
    },
    {
      icon: Server,
      title: "Backend API Development",
      description:
        "Designing and implementing robust RESTful APIs and backend services using FastAPI, Flask, and modern architectures.",
    },
    {
      icon: LineChart,
      title: "Data Analysis & Forecasting",
      description:
        "Extracting insights from data and building forecasting models using statistical analysis and machine learning techniques.",
    },
    {
      icon: Cloud,
      title: "Deployment & DevOps",
      description:
        "Managing application deployment, CI/CD pipelines, and cloud infrastructure on platforms like Azure and AWS.",
    },
  ];

  const testimonials = [
    {
      name: "Ravit Jain",
      role: "Founder and CEO, The Ravit Show",
      initials: "RJ",
      text: "Working with Daksh was an absolute pleasure. He’s proactive, solution-oriented, and always comes prepared with thoughtful ideas instead of just highlighting problems. What I appreciated most was his willingness to go the extra mile and experiment to see what truly works. I’m extremely happy with the outcome and would highly recommend him.",
    },
    {
      name: "Prince Jain",
      role: "Co-Founder, JP Diamond Labs",
      initials: "PJ",
      text: "From the moment our website launched, clients have remarked on how professional and trustworthy it feels. Daksh created a clear, elegant layout with detailed, easy-to-understand information. He exceeded our expectations, and we are truly delighted with the outcome.",
    },
    {
      name: "Cyril Praveen",
      // role: "Founder, StartupXYZ",
      initials: "CP",
      text: "Working with Daksh was a great experience. He quickly understood our startup’s needs,  and delivered a solution that fit perfectly. What really stood out was his speed and quality of his execution. He’s proactive, adaptable, and genuinely takes ownership. The quality he delivers at his stage is impressive, and I’d happily work with him again.",
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
              Services
            </h2>
            <p className="text-muted-foreground text-lg font-light">
              What I can do for you
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 80} direction="scale">
              <Card className="glass-card p-6 hover:shadow-card transition-all duration-300 h-full group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors duration-300">
                  <service.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-24">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-3 text-foreground tracking-tight">
                What People Say
              </h3>
              <p className="text-muted-foreground text-lg font-light">
                Feedback from clients & collaborators
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              testimonials.map((testimonial, index) => (
                <ScrollReveal key={testimonial.name} delay={index * 100} direction="up">
                  <Card className="glass-card p-6 h-full flex flex-col justify-between">
                    <div>
                      <Quote size={20} className="text-primary/40 mb-3" />
                      <p className="text-base text-muted-foreground leading-relaxed italic">
                        "{testimonial.text}"
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-5 pt-4 border-t border-border">
                      <Avatar className="h-9 w-9">
                        <AvatarFallback className="text-xs font-semibold bg-primary/10 text-primary">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
