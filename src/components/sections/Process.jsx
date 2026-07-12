import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { processSteps } from '@/data/process';
import Icon from '@/components/ui/Icon';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'end center'] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="process" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          label="Alur Kerja"
          title="Proses Kerja yang Transparan"
          description="Dari konsultasi hingga maintenance, kami memastikan setiap tahap berjalan profesional."
        />
        <div ref={ref} className="relative mt-20">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border" />
          <motion.div style={{ height: lineHeight }} className="absolute left-1/2 top-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary to-spark" />

          <div className="space-y-12">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className={`relative flex items-center gap-6 ${i % 2 === 1 ? 'flex-row-reverse text-right' : ''}`}
              >
                <div className="flex-1" />
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-card">
                  <Icon name={step.icon} className="h-6 w-6 text-primary" />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                    {String(step.number).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}