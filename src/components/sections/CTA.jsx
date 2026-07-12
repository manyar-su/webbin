import { motion } from 'framer-motion';
import { site } from '@/data/site';
import MagneticButton from '@/components/ui/MagneticButton';
import SectionReveal from '@/components/ui/SectionReveal';

export default function CTA() {
  return (
    <section id="cta" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionReveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-spark/5 px-6 py-16 md:px-12 md:py-20">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]" />
            <div className="relative grid items-center gap-8 lg:grid-cols-2">
              <div className="text-center lg:text-left">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl font-heading font-bold tracking-tight text-balance md:text-5xl"
                >
                  Bingung Mau Mulai dari Mana?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="mx-auto mt-4 max-w-xl text-base text-muted-foreground text-balance lg:mx-0 md:text-lg"
                >
                  Konsultasikan kebutuhan bisnis Anda secara gratis. Kami bantu tentukan solusi website terbaik untuk bisnis Anda.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="mt-8 flex justify-center lg:justify-start"
                >
                  <MagneticButton
                    as="a"
                    href={site.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-xl shadow-primary/30 transition-colors hover:bg-primary/90"
                  >
                    Konsultasi Gratis Sekarang
                  </MagneticButton>
                </motion.div>
              </div>
              <div className="relative hidden justify-center lg:flex">
                <img
                  src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80"
                  alt="Konsultasi website"
                  className="h-72 w-72 rounded-2xl object-cover opacity-90"
                />
                <div className="absolute -bottom-4 -left-4 glass-card flex items-center gap-2 rounded-2xl px-4 py-3 shadow-xl">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-success/20">
                    <div className="h-3 w-3 rounded-full bg-success animate-glow-pulse" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Online 24/7</div>
                    <div className="text-[10px] text-muted-foreground">Siap melayani</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}