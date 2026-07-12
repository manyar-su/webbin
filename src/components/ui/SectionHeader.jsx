import { motion } from 'framer-motion';

export default function SectionHeader({ label, title, description, className = '' }) {
  return (
    <div className={`mx-auto max-w-3xl text-center ${className}`}>
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-medium tracking-widest text-primary uppercase"
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-4 text-3xl font-heading font-bold tracking-tight text-balance md:text-5xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-base text-muted-foreground text-balance md:text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}