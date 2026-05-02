import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  duration?: number;
}

function AnimatedCounter({ value, suffix, label, duration = 1.5 }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const startTime = performance.now();
    const durationMs = duration * 1000;

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * end);
      setCount(start);
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="text-center px-4 sm:px-8 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary">
          {count}
          <span className="text-saffron">{suffix}</span>
        </p>
        <p className="mt-2 text-sm sm:text-base text-text-muted max-w-[200px] mx-auto">
          {label}
        </p>
      </motion.div>
    </div>
  );
}

export default function StatsBar() {
  const stats: StatProps[] = [
    { value: 960, suffix: 'M+', label: 'Registered voters in India' },
    { value: 67, suffix: '%', label: 'Average turnout — but most don\'t know the full process' },
    { value: 8, suffix: ' Phases', label: 'From announcement to government formation' },
  ];

  return (
    <section className="bg-saffron-light py-10 sm:py-14">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-saffron/20">
          {stats.map((stat, i) => (
            <AnimatedCounter key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
