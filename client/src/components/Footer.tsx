import { Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-primary/20 py-8 px-4 glassmorphism">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-primary" data-testid="icon-footer-terminal" />
            <span className="font-mono text-sm text-muted-foreground" data-testid="text-copyright">
              © 2024 Lakshy Baid. All rights reserved.
            </span>
          </div>
          <div className="text-sm text-muted-foreground font-mono" data-testid="text-tagline">
            Designed with <span className="text-neon-green">cyberpunk</span> aesthetics
          </div>
        </div>
      </div>
    </footer>
  );
}
