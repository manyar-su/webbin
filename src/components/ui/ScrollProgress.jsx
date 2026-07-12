import { motion } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[9998] h-0.5 origin-left bg-gradient-to-r from-primary to-spark"
      style={{ scaleX: progress / 100 }}
    />
  );
}