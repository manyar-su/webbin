import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '@/data/faq';
import SectionHeader from '@/components/ui/SectionHeader';

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeader
          label="FAQ"
          title="Pertanyaan yang Sering Diajukan"
          description="Temukan jawaban atas pertanyaan umum seputar layanan pembuatan website kami."
        />
        <div className="mt-12 space-y-3">
          {faqItems.map((item, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-border/40 bg-card/50">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
              >
                <span className="text-sm font-semibold md:text-base">{item.question}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-5 pb-5 text-sm text-muted-foreground">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}