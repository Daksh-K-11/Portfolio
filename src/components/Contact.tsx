import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { Mail, MapPin, Send, Linkedin } from "lucide-react";
import {
  siGithub,
  siLeetcode,
  siGeeksforgeeks,
} from "simple-icons";
import { useToast } from "@/hooks/use-toast";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

const SocialIcon = ({ icon, label }) => {
  // Simple-icons case
  if (icon.path) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        className="w-7 h-7 transition-all duration-300"
        aria-label={label}
      >
        <path
          d={icon.path}
          className="fill-muted-foreground group-hover:fill-current dark:group-hover:fill-white"
          style={{ color: `#${icon.hex}` }}
        />
      </svg>
    );
  }

  // Lucide case (LinkedIn)
  const LucideIcon = icon;

  return (
    <LucideIcon
      className="w-7 h-7 text-muted-foreground group-hover:text-[#0A66C2] transition-all duration-300"
      strokeWidth={2}
    />
  );
};


const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, India",
      href: null,
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: siGithub, href: "https://github.com", label: "GitHub" },
    { icon: siLeetcode, href: "https://leetcode.com", label: "LeetCode" },
    { icon: siGeeksforgeeks, href: "https://auth.geeksforgeeks.org", label: "GeeksforGeeks" },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-lg font-light">
              Let's work together on your next project
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <info.icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Connect With Me</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      // className="p-3 rounded-lg border border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/30 hover:shadow-card transition-all duration-300"
                      className="group p-4 rounded-full border border-border bg-card/50
hover:shadow-card transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                      aria-label={social.label}
                    >
                      <SocialIcon icon={social.icon} label={social.label} />
                    </a>
                  ))}
                </div>
              </div>

              <Card className="glass-card p-6">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Available for freelance projects and full-time opportunities.
                  Feel free to reach out for collaborations or just a friendly chat!
                </p>
              </Card>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right" delay={150}>
            <Card className="glass-card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-muted border-border"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-muted border-border"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                    className="bg-muted border-border"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    className="bg-muted border-border resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="mr-2" size={18} />
                  Send Message
                </Button>
              </form>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
