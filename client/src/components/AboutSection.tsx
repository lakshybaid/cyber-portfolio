import { Card } from '@/components/ui/card';
import { Shield, Code, Award, Terminal } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Code, label: 'Projects', value: 10, color: 'text-neon-green' },
    { icon: Shield, label: 'Skills', value: 20, color: 'text-neon-cyan' },
    { icon: Award, label: 'Certifications', value: 10, color: 'text-neon-green' },
    { icon: Terminal, label: 'Tools', value: 15, color: 'text-neon-cyan' },
  ];

  return (
    <section id="about" className="py-20 px-4" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-mono" data-testid="heading-about">
          <span className="text-neon-green">{'<'}</span>
          About Me
          <span className="text-neon-green">{' />'}</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="glassmorphism p-8 hover-elevate transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-primary" data-testid="heading-intro">
              Introduction
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4" data-testid="text-bio">
              I'm a BCA student with a strong passion for Cyber Security and Ethical Hacking. 
              My journey in the digital security realm is driven by curiosity and a commitment 
              to making the digital world safer.
            </p>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-mission">
              I specialize in identifying vulnerabilities, analyzing security threats, and 
              implementing robust defense mechanisms. Through hands-on projects and continuous 
              learning, I'm building expertise in penetration testing, network security, and 
              IoT security solutions.
            </p>
          </Card>

          <Card className="glassmorphism p-8 font-mono text-sm overflow-hidden hover-elevate transition-all duration-300">
            <div className="space-y-2 text-neon-green">
              <div data-testid="code-class">
                <span className="text-secondary">class</span> <span className="text-primary">CyberSecurityEnthusiast</span> {'{'}
              </div>
              <div className="pl-4">
                <span className="text-muted-foreground">constructor</span>() {'{'}
              </div>
              <div className="pl-8 text-muted-foreground">
                <div data-testid="code-name">this.name = <span className="text-neon-cyan">"Lakshy Baid"</span>;</div>
                <div data-testid="code-role">this.role = <span className="text-neon-cyan">"BCA Student"</span>;</div>
                <div data-testid="code-focus">this.focus = <span className="text-neon-cyan">"Cyber Security"</span>;</div>
                <div data-testid="code-passion">this.passion = <span className="text-neon-cyan">"Ethical Hacking"</span>;</div>
              </div>
              <div className="pl-4">{'}'}</div>
              <div>{'}'}</div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`glassmorphism p-6 text-center hover-elevate transition-all duration-300 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} data-testid={`icon-${stat.label.toLowerCase()}`} />
              <div className={`text-3xl font-bold mb-1 ${stat.color}`} data-testid={`stat-${stat.label.toLowerCase()}`}>
                {stat.value}+
              </div>
              <div className="text-sm text-muted-foreground" data-testid={`label-${stat.label.toLowerCase()}`}>
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
