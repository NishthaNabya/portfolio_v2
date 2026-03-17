import { useState, useEffect, useRef } from 'react';

const metrics = [
  { id: 'projects',     value: 10, suffix: '+', label: 'Projects built'      },
  { id: 'competitions', value: 7,  suffix: '',  label: 'Competitions placed' },
  { id: 'startups',     value: 6,  suffix: '',  label: 'Startup collabs'     },
];

const ImpactMetrics = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState(metrics.map(() => 0));
  const [fired, setFired] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !fired) setFired(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [fired]);

  useEffect(() => {
    if (!fired) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCounts(metrics.map(m => m.value)); return;
    }
    metrics.forEach((m, i) => {
      const duration = 1100 + i * 180;
      const start = performance.now() + i * 100;
      const tick = (now: number) => {
        const p = Math.min(Math.max((now - start) / duration, 0), 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setCounts(prev => { const n = [...prev]; n[i] = Math.floor(eased * m.value); return n; });
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, [fired]);

  return (
    <div ref={ref} className="-mx-4 sm:-mx-6 md:-mx-8 lg:-mx-16 xl:-mx-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
      <div className="border-t border-b border-gray-200 py-5">
        <div className="flex items-center justify-between">
          {metrics.map((m, i) => (
            <div
              key={m.id}
              className={`flex items-baseline gap-2 flex-1 ${
                i === 1 ? 'justify-center' : i === 2 ? 'justify-end' : ''
              }`}
            >
              <span className="font-serif text-3xl sm:text-4xl text-[#BE3D2A]">{counts[i]}{m.suffix}</span>
              <span className="text-xs text-gray-400">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactMetrics;
