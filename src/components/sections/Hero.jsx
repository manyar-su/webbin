import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ChevronDown, Star, Play } from 'lucide-react';
import { site, heroFeatures } from '@/data/site';
import MagneticButton from '@/components/ui/MagneticButton';
import DeviceMockups from './DeviceMockups';
import Icon from '@/components/ui/Icon';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const yMockups = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section id="hero" ref={ref} className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-spark/5" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[100px] animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-spark/15 blur-[100px] animate-float" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div style={{ y: yText, opacity }} className="text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-wide text-primary"
            >
              <Sparkles className="h-3 w-3" /> Digital Agency Premium
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-4xl font-heading font-bold leading-[1.1] tracking-tighter text-balance md:text-6xl lg:text-7xl"
            >
              Buat Website Profesional yang{' '}
              <span className="gradient-text">Menghasilkan Pelanggan</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mx-auto mt-6 max-w-xl text-base text-muted-foreground text-balance lg:mx-0 md:text-lg"
            >
              Website bukan sekadar online. Kami membantu bisnis berkembang melalui website profesional dengan performa tinggi, SEO, dashboard CMS, dan AI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
            >
              <MagneticButton as="a" href="#demo" className="flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-colors hover:bg-primary/90">
                <Play className="h-4 w-4" /> Lihat Demo
              </MagneticButton>
              <MagneticButton as="a" href={site.whatsappLink} target="_blank" rel="noopener noreferrer" className="rounded-full glass-card px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:text-primary">
                Konsultasi Gratis
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex items-center justify-center gap-4 lg:justify-start"
            >
              <div className="flex -space-x-2">
                {['from-amber-500 to-orange-600', 'from-pink-500 to-fuchsia-600', 'from-sky-500 to-blue-600', 'from-emerald-500 to-teal-600', 'from-purple-500 to-indigo-600'].map((g, i) => (
                  <div key={i} className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br ${g} text-xs font-bold text-white`}>
                    {['A', 'S', 'B', 'D', 'E'][i]}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">Dipercaya 120+ klien</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div style={{ y: yMockups }} className="hidden lg:block">
            <DeviceMockups />
          </motion.div>
        </div>

        {/* Feature icons row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-2 gap-4 border-t border-border/40 pt-8 sm:grid-cols-4 lg:grid-cols-7"
        >
          {heroFeatures.map((f) => (
            <div key={f.title} className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon name={f.icon} className="h-5 w-5" />
              </div>
              <span className="text-xs font-medium text-muted-foreground">{f.title}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="h-6 w-6 animate-bounce-subtle text-muted-foreground" />
      </motion.div>
    </section>
  );
}