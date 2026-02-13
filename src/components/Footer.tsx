import { Heart } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <ScrollReveal>
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-muted-foreground flex items-center justify-center gap-2 text-sm">
              Made with <Heart size={14} className="text-primary fill-primary" /> by{" "}
              <span className="font-semibold text-foreground">Your Name</span>
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
};

export default Footer;
