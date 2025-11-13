import { useEffect, useState } from 'react';

interface BootScreenProps {
  onComplete: () => void;
}

export default function BootScreen({ onComplete }: BootScreenProps) {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);

  const bootSequence = [
    'INITIALIZING SYSTEM...',
    'Loading kernel modules... [OK]',
    'Mounting filesystems... [OK]',
    'Starting network services... [OK]',
    'Initializing security protocols... [OK]',
    'Loading cyber defense modules... [OK]',
    'Establishing secure connection... [OK]',
    'SYSTEM READY',
    'Welcome to CYBER.PORTFOLIO v1.0',
    '',
  ];

  useEffect(() => {
    if (currentLine < bootSequence.length) {
      const timer = setTimeout(() => {
        setLines(prev => [...prev, bootSequence[currentLine]]);
        setCurrentLine(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timer);
    } else {
      const exitTimer = setTimeout(onComplete, 500);
      return () => clearTimeout(exitTimer);
    }
  }, [currentLine, onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center font-mono">
      <div className="scanline" />
      <div className="w-full max-w-2xl px-4">
        <div className="text-neon-green text-sm space-y-1">
          {lines.map((line, i) => (
            <div key={i} className="overflow-hidden whitespace-nowrap">
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
