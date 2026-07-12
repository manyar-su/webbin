import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export default function ThemeSwitcher({ className = '' }) {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      className={`relative flex h-10 w-10 items-center justify-center rounded-full glass-card text-foreground transition-colors hover:text-primary ${className}`}
      aria-label="Ganti tema"
    >
      {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}