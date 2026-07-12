import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye } from 'lucide-react';
import { projects, categories } from '@/data/portfolio';
import Icon from '@/components/ui/Icon';
import TiltCard from '@/components/ui/TiltCard';
import SectionHeader from '@/components/ui/SectionHeader';
import PreviewModal from '@/components/ui/PreviewModal';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const [preview, setPreview] = useState(null);

  const filtered = useMemo(
    () => (filter === 'all' ? projects.slice(0, 8) : projects.filter((p) => p.categoryId === filter)),
    [filter]
  );

  return (
    <section id="demo" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          label="Demo Website"
          title="Portofolio Demo per Kategori Bisnis"
          description="Lihat contoh website yang kami buat untuk berbagai industri. Filter berdasarkan kategori bisnis Anda."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>Semua</FilterButton>
          {categories.map((cat) => (
            <FilterButton key={cat.id} active={filter === cat.id} onClick={() => setFilter(cat.id)}>
              {cat.label}
            </FilterButton>
          ))}
        </div>

        <motion.div layout className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => {
              const cat = categories.find((c) => c.id === project.categoryId);
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <TiltCard className="group h-full" max={5}>
                    <div className="overflow-hidden rounded-2xl border border-border/40 bg-card">
                      <div className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${cat?.gradient} overflow-hidden`}>
                        <img
                          src={project.imageUrl || `/assets/demo/${project.categoryId}.svg`}
                          alt={`Demo website ${project.name} kategori ${cat?.label || 'bisnis'}`}
                          className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                        <Icon name={cat?.icon} className="absolute h-14 w-14 text-white/70 transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                        <button
                          onClick={() => setPreview(project)}
                          className="absolute flex items-center gap-1.5 rounded-full bg-white/20 px-4 py-2 text-xs font-semibold text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100"
                        >
                          <Eye className="h-3.5 w-3.5" /> Preview
                        </button>
                      </div>
                      <div className="p-4">
                        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-medium text-primary">{cat?.label}</span>
                        <h3 className="mt-2 text-base font-bold tracking-tight">{project.name}</h3>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {project.tech.map((t) => (
                            <span key={t} className="rounded bg-accent px-2 py-0.5 text-[10px] text-muted-foreground">{t}</span>
                          ))}
                        </div>
                        <div className="mt-3 flex gap-2">
                          <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary/10 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary/20">
                            <ExternalLink className="h-3.5 w-3.5" /> Demo
                          </a>
                          <button onClick={() => setPreview(project)} className="flex items-center justify-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground">
                            <Eye className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <PreviewModal project={preview} onClose={() => setPreview(null)} />
    </section>
  );
}

function FilterButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
        active
          ? 'bg-primary text-white shadow-lg shadow-primary/30'
          : 'glass-card text-muted-foreground hover:text-foreground'
      }`}
    >
      {children}
    </button>
  );
}
