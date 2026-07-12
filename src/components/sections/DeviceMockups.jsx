import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function DeviceMockups() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 20 });
  const sy = useSpring(my, { stiffness: 40, damping: 20 });
  const phoneX = useTransform(sx, (v) => -v * 0.6);
  const phoneY = useTransform(sy, (v) => -v * 0.6);

  useEffect(() => {
    const handle = (e) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 40);
      my.set((e.clientY / window.innerHeight - 0.5) * 40);
    };
    window.addEventListener('mousemove', handle, { passive: true });
    return () => window.removeEventListener('mousemove', handle);
  }, [mx, my]);

  return (
    <div className="relative mx-auto h-[460px] w-full max-w-lg">
      <div className="absolute inset-0 rounded-full bg-primary/15 blur-3xl" />

      {/* Browser mockup */}
      <motion.div style={{ x: sx, y: sy }} className="absolute left-1/2 top-2 w-[88%] -translate-x-1/2">
        <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-2xl">
          <div className="flex items-center gap-1.5 border-b border-border/60 bg-accent/50 px-3 py-2">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
            <div className="ml-2 h-4 flex-1 rounded bg-background/50" />
          </div>
          <div className="space-y-3 p-4">
            <div className="flex items-center justify-between">
              <div className="h-3 w-16 rounded bg-primary/60" />
              <div className="flex gap-2">
                <div className="h-2 w-8 rounded bg-muted-foreground/30" />
                <div className="h-2 w-8 rounded bg-muted-foreground/30" />
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="h-5 w-3/4 rounded bg-foreground/60" />
              <div className="h-3 w-full rounded bg-muted-foreground/30" />
              <div className="h-3 w-2/3 rounded bg-muted-foreground/30" />
            </div>
            <div className="flex gap-2">
              <div className="h-8 w-24 rounded-lg bg-primary" />
              <div className="h-8 w-24 rounded-lg border border-border" />
            </div>
            <div className="grid grid-cols-3 gap-2 pt-1">
              <div className="h-14 rounded-lg bg-gradient-to-br from-primary/30 to-spark/20" />
              <div className="h-14 rounded-lg bg-gradient-to-br from-spark/30 to-primary/20" />
              <div className="h-14 rounded-lg bg-gradient-to-br from-spark/30 to-primary/20" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Phone mockup */}
      <motion.div style={{ x: phoneX, y: phoneY }} className="absolute -bottom-2 right-0 z-10">
        <div className="w-32 overflow-hidden rounded-[1.5rem] border-4 border-foreground/15 bg-card shadow-2xl">
          <div className="mx-auto h-1 w-8 rounded-b-lg bg-foreground/15" />
          <div className="space-y-1.5 p-2">
            <div className="h-2 w-12 rounded bg-primary/60" />
            <div className="h-16 rounded-lg bg-gradient-to-br from-primary/40 to-spark/30" />
            <div className="h-1.5 w-full rounded bg-muted-foreground/30" />
            <div className="h-1.5 w-2/3 rounded bg-muted-foreground/30" />
            <div className="h-5 w-full rounded bg-primary/70" />
          </div>
        </div>
      </motion.div>

      {/* Floating badge */}
      <motion.div style={{ x: phoneX, y: phoneY }} className="absolute -left-2 top-12 z-10">
        <div className="glass-card flex items-center gap-2 rounded-2xl px-3 py-2 shadow-xl">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20">
            <div className="h-3 w-3 rounded-full bg-emerald-400 animate-glow-pulse" />
          </div>
          <div>
            <div className="font-mono text-sm font-bold text-foreground">100</div>
            <div className="text-[10px] text-muted-foreground">Lighthouse</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}