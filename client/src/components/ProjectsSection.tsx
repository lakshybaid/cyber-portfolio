import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Lightbulb, Shield, Smartphone, Wifi } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Light Intensity Monitor',
      description:
        'Created an IoT system using Bolt Wi-Fi to monitor and visualize light intensity data on the cloud. Real-time monitoring with cloud dashboard integration.',
      icon: Lightbulb,
      tags: ['Bolt IoT', 'Cloud Dashboard', 'JavaScript'],
      color: 'text-neon-green',
      bgColor: 'bg-primary/5',
    },
    {
      title: 'Man-in-the-Middle Attack',
      description:
        'Demonstrated an ethical hacking attack using ARP spoofing and packet sniffing to analyze network traffic. Educational project for security research.',
      icon: Shield,
      tags: ['BetterCap', 'Wireshark', 'Metasploit'],
      color: 'text-neon-cyan',
      bgColor: 'bg-secondary/5',
    },
    {
      title: 'AndroRAT',
      description:
        'Designed a remote access tool to control Android devices and monitor data, for research and learning purposes in mobile security.',
      icon: Smartphone,
      tags: ['Android Studio', 'Kali Linux', 'Metasploit', 'Java'],
      color: 'text-neon-green',
      bgColor: 'bg-primary/5',
    },
    {
      title: 'RFID Smart Attendance System',
      description:
        'Developed an RFID-Based Smart Attendance System using ESP8266 (NodeMCU) that scans RFID cards and updates attendance records in real-time to Google Sheets with cloud integration.',
      icon: Wifi,
      tags: ['ESP8266', 'RFID', 'Google Sheets', 'IoT'],
      color: 'text-neon-cyan',
      bgColor: 'bg-secondary/5',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-mono" data-testid="heading-projects">
          <span className="text-neon-green">{'<'}</span>
          Featured Projects
          <span className="text-neon-green">{' />'}</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto" data-testid="text-projects-intro">
          A collection of hands-on projects demonstrating expertise in IoT, cybersecurity, and ethical hacking
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glassmorphism p-6 hover-elevate hover:neon-glow transition-all duration-300 group"
            >
              <div className={`p-3 rounded-lg ${project.bgColor} w-fit mb-4`}>
                <project.icon className={`w-8 h-8 ${project.color}`} data-testid={`icon-${project.title.toLowerCase().replace(/\s+/g, '-')}`} />
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors" data-testid={`heading-${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-4 text-sm leading-relaxed" data-testid={`text-${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <Badge
                    key={tagIndex}
                    variant="secondary"
                    className="text-xs"
                    data-testid={`tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="text-primary hover:text-primary group/btn"
                onClick={() => console.log(`View ${project.title} details`)}
                data-testid={`button-view-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                View Details
                <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
