import { features } from '@/data/features';
import Icon from '@/components/ui/Icon';
import SectionHeader from '@/components/ui/SectionHeader';
import SectionReveal from '@/components/ui/SectionReveal';

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          label="Keunggulan"
          title="Semua yang Anda Butuhkan untuk Sukses Online"
          description="Teknologi terkini, performa maksimal, dan fitur lengkap untuk mengembangkan bisnis Anda."
        />
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <SectionReveal
              key={feature.title}
              delay={i * 0.05}
              direction={i % 2 === 0 ? 'left' : 'right'}
              className={`${feature.span || ''}`}
            >
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border/40 bg-card/50 p-6 transition-all duration-300 hover:border-primary/40 hover:bg-card">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-opacity group-hover:bg-primary/10" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Icon name={feature.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}