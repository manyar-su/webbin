import { Check } from 'lucide-react';
import { pricingPlans } from '@/data/pricing';
import { site } from '@/data/site';
import SectionHeader from '@/components/ui/SectionHeader';
import SectionReveal from '@/components/ui/SectionReveal';
import MagneticButton from '@/components/ui/MagneticButton';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          label="Harga"
          title="Paket yang Sesuai dengan Kebutuhan Bisnis"
          description="Mulai dari landing page sederhana hingga marketplace lengkap. Pilih paket yang tepat untuk bisnis Anda."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan, i) => (
            <SectionReveal key={plan.id} delay={i * 0.08} direction="up">
              <div className={`relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 ${
                plan.highlighted
                  ? 'border-primary/50 bg-card border-beam'
                  : 'border-border/40 bg-card'
              }`}>
                {plan.badge && (
                  <div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-[10px] font-bold text-white">
                    {plan.badge}
                  </div>
                )}
                <h3 className="text-lg font-bold tracking-tight">{plan.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2 min-h-[2rem]">{plan.description}</p>
                <div className="mt-4">
                  <span className="font-mono text-xs text-muted-foreground">{plan.pricePrefix}</span>
                  <div className="font-mono text-3xl font-bold tracking-tight">{plan.price}</div>
                </div>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <MagneticButton
                  as="a"
                  href={site.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 block w-full rounded-full py-3 text-center text-sm font-semibold transition-colors ${
                    plan.highlighted
                      ? 'bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary/90'
                      : 'border border-border bg-card text-foreground hover:bg-accent'
                  }`}
                >
                  {plan.cta}
                </MagneticButton>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
