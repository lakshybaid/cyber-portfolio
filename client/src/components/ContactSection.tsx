import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Instagram, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/lakshybaid',
      username: '@lakshybaid',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/lakshy-baid-b0744427b',
      username: 'Lakshy Baid',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/laksh_baid/',
      username: '@laksh_baid',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:Lakshy.baid21@gmail.com',
      username: 'Lakshy.baid21@gmail.com',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-mono" data-testid="heading-contact">
          <span className="text-neon-green">{'<'}</span>
          Get In Touch
          <span className="text-neon-green">{' />'}</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto" data-testid="text-contact-intro">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="glassmorphism p-8 hover-elevate transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6 text-primary" data-testid="heading-send-message">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background/50 border-primary/30 focus:border-primary"
                  required
                  data-testid="input-name"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background/50 border-primary/30 focus:border-primary"
                  required
                  data-testid="input-email"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background/50 border-primary/30 focus:border-primary min-h-[150px]"
                  required
                  data-testid="input-message"
                />
              </div>
              <Button type="submit" className="w-full neon-glow" data-testid="button-send">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          <div className="space-y-4">
            <Card className="glassmorphism p-8 hover-elevate transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 text-primary" data-testid="heading-connect">
                Connect With Me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-md bg-background/30 hover:bg-primary/10 border border-transparent hover:border-primary/30 transition-all group"
                    data-testid={`link-${link.label.toLowerCase()}`}
                  >
                    <div className="p-2 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <link.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm" data-testid={`text-${link.label.toLowerCase()}-label`}>{link.label}</div>
                      <div className="text-xs text-muted-foreground" data-testid={`text-${link.label.toLowerCase()}-username`}>
                        {link.username}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
