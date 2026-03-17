import { useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { useState, useEffect, useRef } from 'react';

const metrics = [
  { id: 'projects',     value: 10, suffix: '+', label: 'Projects built'      },
  { id: 'competitions', value: 7,  suffix: '',  label: 'Competitions placed' },
  { id: 'internships',  value: 4,  suffix: '',  label: 'Internships'         },
  { id: 'startups',     value: 6,  suffix: '',  label: 'Startup collabs'     },
];

const LatestProjects = () => {
  const navigate = useNavigate();
  const featuredIds = ['render-mcp', 'develop-for-good', 'minneanalytics'];
  const featured = featuredIds.map(id => projectsData.find(p => p.id === id)).filter(Boolean) as typeof projectsData;
  const ref = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState(metrics.map(() => 0));
  const [fired, setFired] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !fired) setFired(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [fired]);

  useEffect(() => {
    if (!fired) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCounts(metrics.map(m => m.value)); return;
    }
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const next = metrics.map((m, i) => {
        const duration = 1100 + i * 180;
        const p = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        return Math.floor(eased * m.value);
      });
      setCounts(next);
      if (next.some((v, i) => v < metrics[i].value)) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [fired]);

  return (
    <section id="projects" className="pt-14 bg-white border-t border-gray-100">
      {/* Header */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-xs font-medium tracking-widest text-[#BE3D2A] uppercase mb-2">Selected Work</p>
          <h2 className="font-serif text-2xl sm:text-3xl text-gray-900">What I build.</h2>
        </div>
        <button
          onClick={() => navigate('/projects')}
          className="text-sm text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1"
        >
          All projects <span aria-hidden>→</span>
        </button>
      </div>

      {/* Hover-reveal cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-0">
        {featured.map((p) => {
          const link = p.links?.github || p.links?.live || p.links?.demo;
          return (
            <div
              key={p.id}
              onClick={() => { if (link) window.open(link, '_blank', 'noopener noreferrer'); }}
              className={`group relative rounded-xl border border-gray-200 bg-white overflow-hidden h-48 hover:border-[#BE3D2A]/30 transition-colors ${link ? 'cursor-pointer' : 'cursor-default'}`}
            >
              <div className="absolute inset-0 flex flex-col justify-between p-5 transition-transform duration-300 group-hover:-translate-y-full">
                <span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">{p.type}</span>
                <div>
                  <h3 className="font-serif text-xl text-gray-900 mb-1">{p.title}</h3>
                  <span className="text-xs text-gray-400">{p.year}</span>
                </div>
              </div>
              <div className="absolute inset-0 flex flex-col justify-between p-5 bg-[#BE3D2A] translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                <p className="text-white/90 text-sm leading-relaxed line-clamp-3">{p.subtitle}</p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {p.technologies.slice(0, 4).map(tech => (
                    <span key={tech} className="text-[10px] text-white/70 border border-white/30 rounded-full px-2 py-0.5">{tech}</span>
                  ))}
                </div>
                {link && (
                  <span className="mt-3 text-white/80 text-xs font-medium">
                    {p.links?.github?.includes('pull') ? 'PR →' : 'View →'} {link.replace('https://github.com/', 'github.com/')}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Stats strip — acts as section divider */}
      <div
        ref={ref}
        className="-mx-4 sm:-mx-6 md:-mx-8 lg:-mx-16 xl:-mx-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 border-t border-b border-gray-200 py-5 mt-10"
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-5">
          {metrics.map((m, i) => {
            const justify =
              i === 0 ? '' :
              i === 1 ? 'justify-end sm:justify-center' :
              i === 2 ? 'sm:justify-center' :
              'justify-end';
            return (
              <div key={m.id} className={`flex items-baseline gap-2 ${justify}`}>
                <span className="font-serif text-3xl sm:text-4xl text-[#BE3D2A] tabular-nums">{counts[i]}{m.suffix}</span>
                <span className="text-xs text-gray-400 leading-tight">{m.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;
