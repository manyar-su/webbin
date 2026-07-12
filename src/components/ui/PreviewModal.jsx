import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';
import Icon from './Icon';
import { categories } from '@/data/portfolio';

export default function PreviewModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-border/60 bg-card"
          >
            <div className={`relative flex h-64 items-center justify-center bg-gradient-to-br ${categories.find((c) => c.id === project.categoryId)?.gradient} md:h-80`}>
              <Icon name={categories.find((c) => c.id === project.categoryId)?.icon} className="h-24 w-24 text-white/80" />
              <button onClick={onClose} className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm" aria-label="Tutup">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="max-h-[40vh] overflow-y-auto p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{categories.find((c) => c.id === project.categoryId)?.label}</span>
                {project.tech.map((t) => (
                  <span key={t} className="rounded-full bg-accent px-3 py-1 text-xs text-muted-foreground">{t}</span>
                ))}
              </div>
              <h3 className="mt-4 text-2xl font-bold tracking-tight">{project.name}</h3>
              <p className="mt-2 text-muted-foreground">{project.description}</p>
              <div className="mt-6 flex gap-3">
                <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90">
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full glass-card px-5 py-2.5 text-sm font-semibold transition-colors hover:text-primary">
                    <Github className="h-4 w-4" /> Github
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}