import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener('mousemove', move, { passive: true });
    document.body.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      document.body.removeEventListener('mouseleave', leave);
    };
  }, []);

  if (!visible) return null;
  return (
    <div
      className="pointer-events-none fixed z-[9999] h-96 w-96 rounded-full opacity-30 transition-opacity duration-300"
      style={{
        left: pos.x - 192,
        top: pos.y - 192,
        background: 'radial-gradient(circle, hsl(var(--primary) / 0.25) 0%, transparent 70%)',
      }}
    />
  );
}