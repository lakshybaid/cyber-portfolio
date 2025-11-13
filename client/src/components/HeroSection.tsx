import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail, Instagram } from 'lucide-react';

export default function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Lakshy Baid - BCA Student & Cyber Security Enthusiast';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative">
      <div className="scanline" />
      <div className="max-w-4xl w-full">
        <Card className="glassmorphism neon-glow p-8 md:p-12">
          <div className="space-y-6">
            <div className="flex items-start gap-2 text-muted-foreground font-mono text-sm">
              <span className="text-neon-green" data-testid="text-prompt">$</span>
              <span data-testid="text-command">whoami</span>
            </div>
            
            <div className="font-mono text-xl md:text-2xl lg:text-3xl min-h-[2em]">
              <span className="text-neon-green" data-testid="text-typed">{typedText}</span>
              <span className="terminal-cursor text-neon-green"></span>
            </div>

            <p className="text-muted-foreground text-base md:text-lg max-w-2xl" data-testid="text-intro">
              Passionate about protecting digital systems, finding vulnerabilities, and creating secure solutions. 
              Eager to apply my skills and learning mindset to support organizational security and growth.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <Button
                onClick={() => scrollToSection('projects')}
                className="neon-glow hover:neon-glow"
                data-testid="button-view-projects"
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-primary/50 hover:border-primary"
                data-testid="button-contact"
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/lakshybaid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-github"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/lakshy-baid-b0744427b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/laksh_baid/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:Lakshy.baid21@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </Card>

        <div className="flex justify-center mt-12 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection('about')}
            className="text-primary"
            data-testid="button-scroll-down"
          >
            <ChevronDown className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
