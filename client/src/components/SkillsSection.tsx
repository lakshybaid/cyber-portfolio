import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Code, Database, Wrench } from 'lucide-react';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Cyber Security & Networking',
      icon: Shield,
      skills: [
        'Ethical Hacking',
        'Cyber Security Fundamentals',
        'Linux Administration',
        'Networking Protocols',
        'Cloud Security',
        'Vulnerability Analysis',
        'Anomaly Detection',
      ],
    },
    {
      title: 'Programming & Development',
      icon: Code,
      skills: ['C', 'C++', 'Java', 'Python', 'PHP', 'SQL', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Data & Analytics',
      icon: Database,
      skills: ['Power BI', 'Data Visualization', 'Machine Learning Fundamentals'],
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: [
        'Linux (Ubuntu, Kali)',
        'Bolt IoT Platform',
        'AWS Cloud',
        'Wireshark',
        'Metasploit',
        'BetterCap',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-mono" data-testid="heading-skills">
          <span className="text-neon-green">{'<'}</span>
          Skills & Expertise
          <span className="text-neon-green">{' />'}</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="glassmorphism p-6 hover-elevate transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-md bg-primary/10">
                  <category.icon className="w-6 h-6 text-primary" data-testid={`icon-${category.title.toLowerCase().replace(/\s+/g, '-')}`} />
                </div>
                <h3 className="text-lg font-semibold text-primary" data-testid={`heading-${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="outline"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all cursor-default"
                    data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
