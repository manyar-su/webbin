import { stats } from '@/data/site';
import Counter from '@/components/ui/Counter';
import SectionReveal from '@/components/ui/SectionReveal';

export default function Stats() {
  return (
    <section className="border-y border-border/40 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <SectionReveal key={s.label} delay={i * 0.08} direction="up">
              <div className="text-center">
                <div className="font-mono text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
