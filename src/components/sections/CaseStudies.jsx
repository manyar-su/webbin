import { ArrowRight, TrendingUp } from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';
import SectionHeader from '@/components/ui/SectionHeader';
import SectionReveal from '@/components/ui/SectionReveal';

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          label="Studi Kasus"
          title="Kisah Sukses Klien Kami"
          description="Lihat bagaimana website profesional mengubah bisnis klien kami menjadi lebih sukses."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <SectionReveal key={cs.id} delay={i * 0.1} direction="up">
              <div className="group h-full overflow-hidden rounded-2xl border border-border/40 bg-card">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold text-white">
                    {cs.category}
                  </span>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-success/90 px-3 py-1 text-[10px] font-bold text-white">
                    <TrendingUp className="h-3 w-3" /> {cs.result}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold leading-snug tracking-tight">{cs.title}</h3>
                  <div className="mt-3 space-y-2">
                    <div>
                      <span className="text-xs font-semibold text-destructive">Masalah:</span>
                      <p className="text-sm text-muted-foreground">{cs.problem}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-success">Solusi:</span>
                      <p className="text-sm text-muted-foreground">{cs.solution}</p>
                    </div>
                  </div>
                  <a
                    href="#pricing"
                    className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    Lihat Detail <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}