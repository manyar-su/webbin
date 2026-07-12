import { techLogos } from '@/data/site';
import SectionReveal from '@/components/ui/SectionReveal';

export default function TechMarquee() {
  const items = [...techLogos, ...techLogos];
  return (
    <section className="border-y border-border/40 py-8">
      <SectionReveal className="mx-auto max-w-7xl px-4">
        <p className="mb-6 text-center font-mono text-xs tracking-widest text-muted-foreground uppercase">
          Teknologi yang Kami Gunakan
        </p>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
          <div className="flex w-max items-center gap-12 animate-scroll-x">
            {items.map((tech, i) => (
              <span key={i} className="text-xl font-heading font-bold text-muted-foreground/40 transition-colors hover:text-foreground">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}