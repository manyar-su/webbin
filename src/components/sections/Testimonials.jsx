import { Star } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Testimonials() {
  const firstTrack = [...testimonials, ...testimonials];
  const secondTrack = [...testimonials.slice().reverse(), ...testimonials.slice().reverse()];

  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          label="Testimoni"
          title="Apa Kata Klien Kami"
          description="Kepercayaan klien adalah prioritas utama kami. Berikut beberapa testimoni dari bisnis yang telah berkembang bersama Webin."
        />
      </div>
      <div className="relative mt-16 space-y-6 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max gap-6 animate-scroll-x will-change-transform hover:[animation-play-state:paused]">
          {firstTrack.map((testimonial, index) => (
            <TestimonialCard key={`track-a-${index}`} testimonial={testimonial} />
          ))}
        </div>
        <div className="flex w-max gap-6 animate-scroll-x-reverse will-change-transform hover:[animation-play-state:paused]">
          {secondTrack.map((testimonial, index) => (
            <TestimonialCard key={`track-b-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="w-[18.5rem] shrink-0 sm:w-80">
      <div className="glass-card h-full rounded-2xl p-6">
        <div className="flex gap-1">
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <Star key={index} className="h-4 w-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">"{testimonial.text}"</p>
        <div className="mt-6 flex items-center gap-3">
          <img
            src={testimonial.avatarImage}
            alt={`Foto ${testimonial.name}`}
            className="h-12 w-12 rounded-full border border-white/15 object-cover shadow-lg shadow-black/20"
            loading="lazy"
          />
          <div>
            <div className="text-sm font-semibold">{testimonial.name}</div>
            <div className="text-xs text-muted-foreground">{testimonial.business}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
