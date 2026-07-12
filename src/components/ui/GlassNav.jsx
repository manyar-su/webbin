import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { site } from '@/data/site';
import ThemeSwitcher from './ThemeSwitcher';
import MagneticButton from './MagneticButton';

export default function GlassNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1.8, type: 'spring', stiffness: 100 }}
        className={`fixed left-0 right-0 top-0 z-[9997] transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4">
          <div className={`flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-300 ${scrolled ? 'glass-card' : ''}`}>
            <span className="text-lg font-heading font-bold tracking-tighter">
              <span className="gradient-text">Webin</span>
            </span>
          </div>
          <div className={`hidden items-center gap-1 rounded-full px-2 py-2 md:flex transition-all duration-300 ${scrolled ? 'glass-card' : ''}`}>
            {site.navLinks.map((link) => (
              <a key={link.href} href={link.href} className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <ThemeSwitcher />
            </div>
            <MagneticButton
              as="a"
              href={site.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-colors hover:bg-primary/90 md:block"
            >
              Konsultasi Gratis
            </MagneticButton>
            <button onClick={() => setOpen(true)} className="flex h-10 w-10 items-center justify-center rounded-full glass-card text-foreground md:hidden" aria-label="Menu">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between p-4">
              <span className="text-lg font-bold gradient-text">Webin</span>
              <button onClick={() => setOpen(false)} className="flex h-10 w-10 items-center justify-center rounded-full glass-card" aria-label="Tutup">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-col gap-2 px-4 pt-8">
              {site.navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-xl px-4 py-3 text-lg text-foreground hover:bg-accent"
                >
                  {link.label}
                </motion.a>
              ))}
              <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-4 rounded-xl bg-primary px-4 py-3 text-center font-semibold text-white">
                Konsultasi Gratis
              </a>
              <div className="mt-4 flex justify-center">
                <ThemeSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}