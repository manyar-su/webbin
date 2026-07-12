import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ArrowRight, ArrowUpRight } from 'lucide-react';
import { blogArticles } from '@/data/blog';
import { site } from '@/data/site';
import Icon from '@/components/ui/Icon';
import SectionHeader from '@/components/ui/SectionHeader';
import SectionReveal from '@/components/ui/SectionReveal';
import TiltCard from '@/components/ui/TiltCard';

const categories = ['Semua', 'SEO', 'SEO & GEO', 'Digital Marketing', 'Performa', 'AI & Teknologi', 'Web Design'];

export default function Blog() {
  const [filter, setFilter] = useState('Semua');

  const filtered = useMemo(
    () => (filter === 'Semua' ? blogArticles : blogArticles.filter((a) => a.category === filter)),
    [filter]
  );

  return (
    <section id="blog" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          label="Blog & Edukasi"
          title="Wawasan untuk Mengembangkan Bisnis Online"
          description="Artikel edukasi seputar optimasi website, SEO, GEO, dan digital marketing untuk membantu bisnis Anda bertumbuh."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'glass-card text-muted-foreground hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((article, i) => (
              <motion.div
                key={article.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <TiltCard className="group h-full" max={5}>
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/40 bg-card">
                    <div className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${article.gradient} overflow-hidden`}>
                      <Icon name={article.icon} className="h-12 w-12 text-white/70 transition-transform duration-500 group-hover:scale-110" />
                      <span className="absolute left-3 top-3 rounded-full bg-black/30 px-3 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
                        {article.category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{formatDate(article.date)}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {article.readTime}
                        </span>
                      </div>
                      <h3 className="mt-3 text-base font-bold leading-snug tracking-tight line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-3">{article.excerpt}</p>
                      <div className="mt-3 flex flex-wrap gap-1">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="rounded bg-accent px-2 py-0.5 text-[10px] text-muted-foreground">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={site.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                      >
                        Baca Selengkapnya <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </article>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <SectionReveal className="mt-12 text-center">
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full glass-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            Diskusi Topik Lain <ArrowUpRight className="h-4 w-4" />
          </a>
        </SectionReveal>
      </div>
    </section>
  );
}

function formatDate(dateStr) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  const d = new Date(dateStr);
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}