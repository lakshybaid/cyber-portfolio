import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CertificationsSection() {
  const certifications = [
    {
      name: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
      organization: 'Oracle',
      date: 'Oct 2025',
      credentialId: '102980826OCI25FNDCFA',
      emoji: '☁️',
      category: 'Cloud Computing',
    },
    {
      name: 'Artificial Intelligence with Machine Learning',
      organization: 'Vital Skills',
      date: 'Oct 2025',
      credentialId: 'VS-OWIB-155',
      emoji: '🤖',
      category: 'AI & ML',
    },
    {
      name: 'Mastering Generative AI',
      organization: 'Vital Skills',
      date: 'Oct 2025',
      credentialId: 'VS-OWIB-155',
      emoji: '✨',
      category: 'Generative AI',
    },
    {
      name: 'AI & ML Hackathon',
      organization: 'Vital Skills',
      date: 'Oct 2025',
      credentialId: 'VS-OWIB-155',
      emoji: '🏆',
      category: 'Hackathon',
    },
    {
      name: 'GEN AI Hackathon',
      organization: 'Vital Skills',
      date: 'Oct 2025',
      credentialId: 'VS-OWIB-155',
      emoji: '🚀',
      category: 'Hackathon',
    },
    {
      name: 'Internet of Things and Machine Learning',
      organization: 'Bolt IoT',
      date: 'Feb 2025',
      credentialId: 'Bolt-IoT-2025',
      emoji: '📡',
      category: 'IoT',
    },
    {
      name: 'Cyber Security Training',
      organization: 'Acmegrade',
      date: 'Nov 2023',
      credentialId: 'ACME-CS-2023',
      emoji: '🔒',
      category: 'Cybersecurity',
    },
    {
      name: 'Implementation of Cloud Solution',
      organization: 'SSMRV & RVETDCA',
      date: '2024',
      credentialId: 'SSMRV-CLOUD-2024',
      emoji: '🌐',
      category: 'Cloud Solutions',
    },
    {
      name: 'Introduction to Data Center & Cloud Technology',
      organization: 'SSMRV & RVETDCA',
      date: '2024',
      credentialId: 'SSMRV-DC-2024',
      emoji: '💾',
      category: 'Data Center',
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-mono" data-testid="heading-certifications">
          <span className="text-neon-green">{'<'}</span>
          Certifications & Achievements
          <span className="text-neon-green">{' />'}</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto" data-testid="text-certifications-intro">
          Professional certifications validating expertise in cybersecurity and technology
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="glassmorphism p-6 hover-elevate hover:neon-glow transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl" data-testid={`emoji-cert-${index}`}>
                  {cert.emoji}
                </div>
                <Badge variant="outline" className="border-primary/30" data-testid={`badge-date-${index}`}>
                  {cert.date}
                </Badge>
              </div>

              <Badge variant="secondary" className="mb-3 text-xs" data-testid={`badge-category-${index}`}>
                {cert.category}
              </Badge>

              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors leading-tight" data-testid={`heading-cert-${index}`}>
                {cert.name}
              </h3>

              <p className="text-sm text-muted-foreground mb-2" data-testid={`text-org-${index}`}>
                {cert.organization}
              </p>

              <p className="text-xs font-mono text-muted-foreground/70 mb-4" data-testid={`text-credential-${index}`}>
                ID: {cert.credentialId}
              </p>

              <Button
                variant="ghost"
                size="sm"
                className="text-primary hover:text-primary group/btn w-full justify-center"
                onClick={() => console.log(`View ${cert.name} certificate`)}
                data-testid={`button-view-cert-${index}`}
              >
                View Certificate
                <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
