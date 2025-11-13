import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CertificationsSection() {
  const certifications = [
    {
      name: 'Add Your Certification',
      organization: 'Issuing Organization',
      date: '2024',
      credentialId: 'XXXX-XXXX',
    },
    {
      name: 'Add Your Certification',
      organization: 'Issuing Organization',
      date: '2024',
      credentialId: 'XXXX-XXXX',
    },
    {
      name: 'Add Your Certification',
      organization: 'Issuing Organization',
      date: '2023',
      credentialId: 'XXXX-XXXX',
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
                <div className="p-2 rounded-lg bg-primary/10">
                  <Award className="w-6 h-6 text-primary" data-testid={`icon-cert-${index}`} />
                </div>
                <Badge variant="outline" className="border-primary/30" data-testid={`badge-date-${index}`}>
                  {cert.date}
                </Badge>
              </div>

              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors" data-testid={`heading-cert-${index}`}>
                {cert.name}
              </h3>

              <p className="text-sm text-muted-foreground mb-3" data-testid={`text-org-${index}`}>
                {cert.organization}
              </p>

              <p className="text-xs font-mono text-muted-foreground mb-4" data-testid={`text-credential-${index}`}>
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

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground" data-testid="text-note">
            <span className="text-neon-green">Note:</span> Please share your LinkedIn certifications to update this section with your actual credentials.
          </p>
        </div>
      </div>
    </section>
  );
}
