import { Star } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Testimonials() {
  const items = [...testimonials, ...testimonials];
  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          label="Testimoni"
          title="Apa Kata Klien Kami"
          description="Kepercayaan klien adalah prioritas utama kami. Berikut beberapa testimoni dari bisnis yang telah berkembang bersama Webin."
        />
      </div>
      <div className="relative mt-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max gap-6 animate-scroll-x hover:[animation-play-state:paused]">
          {items.map((t, i) => (
            <div key={i} className="w-80 shrink-0">
              <div className="glass-card h-full rounded-2xl p-6">
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${t.avatarColor} text-sm font-bold text-white`}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.business}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}