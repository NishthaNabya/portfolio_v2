import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Variant = 'A' | 'B' | 'C' | 'D';

const experiences = [
  {
    company: 'Elire LLC',
    role: 'Functional Cloud Consulting Intern',
    period: 'Jun 2025 – Present',
    year: '2025',
    highlight: 'Cut weekly reporting time from 16 → 9 hrs across 3 client projects.',
    tags: ['Oracle Cloud', 'VBA', 'AI Governance'],
  },
  {
    company: 'SmartPal AI Inc',
    role: 'Research Assistant',
    period: 'Feb 2025 – Present',
    year: '2025',
    highlight: 'Sped up data processing by 60% with a unified AWS/GCS storage layer.',
    tags: ['AWS S3', 'Python', 'OpenAI'],
  },
  {
    company: 'Academic Support Resource',
    role: 'Application & Workflow Dev Assistant',
    period: 'Apr 2024 – Present',
    year: '2024',
    highlight: 'Built JS automation that cut manual data-processing from 12 → 5 hrs/week.',
    tags: ['JavaScript', 'PeopleSoft', 'Pipelines'],
  },
  {
    company: 'Sparkling and Sake',
    role: 'Business Analyst Intern',
    period: 'May – Aug 2024',
    year: '2024',
    highlight: 'SQL bottleneck analysis raised throughput from 1,000 → 1,160 units/hr.',
    tags: ['SQL', 'Process Ops'],
  },
  {
    company: 'Carlson School of Management',
    role: 'Teaching Assistant',
    period: 'Jun 2023 – Present',
    year: '2023',
    highlight: 'Lifted avg student scores from 84% → 96% using Canvas analytics.',
    tags: ['Canvas LMS', 'Analytics'],
  },
];

const WorkPreview = () => {
  const navigate = useNavigate();
  const [variant, setVariant] = useState<Variant>('A');
  const [open, setOpen] = useState<string | null>(null);

  const variants: { key: Variant; label: string }[] = [
    { key: 'A', label: 'Year groups' },
    { key: 'B', label: 'Terminal' },
    { key: 'C', label: 'Accordion' },
    { key: 'D', label: 'Scroll cards' },
  ];

  const header = (
    <div className="flex items-end justify-between mb-6">
      <div>
        <p className="text-xs font-medium tracking-widest text-[#BE3D2A] uppercase mb-2">Experience</p>
        <h2 className="font-serif text-2xl sm:text-3xl text-gray-900">Where I've worked.</h2>
      </div>
      <button
        onClick={() => navigate('/work')}
        className="text-sm text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1 shrink-0"
      >
        Full experience <span aria-hidden>→</span>
      </button>
    </div>
  );

  // Group by year for variant A
  const byYear = experiences.reduce<Record<string, typeof experiences>>((acc, e) => {
    (acc[e.year] ??= []).push(e);
    return acc;
  }, {});

  return (
    <section className="pt-14 pb-10 border-t border-gray-100">
      {header}

      {/* Switcher */}
      <div className="flex items-center gap-1 mb-8 p-1 bg-gray-100 rounded-full w-fit">
        {variants.map(v => (
          <button
            key={v.key}
            onClick={() => setVariant(v.key)}
            className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-150 ${
              variant === v.key ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>

      {/* ── A: Year groups — large serif year marker, roles stacked beneath ── */}
      {variant === 'A' && (
        <div className="space-y-8">
          {Object.entries(byYear).map(([year, items]) => (
            <div key={year} className="grid grid-cols-[60px_1fr] sm:grid-cols-[80px_1fr] gap-6">
              <div className="pt-1">
                <span className="font-serif text-3xl sm:text-4xl text-gray-200 leading-none select-none">{year}</span>
              </div>
              <div className="space-y-4">
                {items.map(e => (
                  <div
                    key={e.company}
                    onClick={() => navigate('/work')}
                    className="group cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-base text-gray-900 group-hover:text-[#BE3D2A] transition-colors">{e.company}</span>
                      <span className="text-xs text-gray-400 hidden sm:block">{e.period}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-0.5">{e.role}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── B: Terminal / CLI — engineer-coded dark panel ── */}
      {variant === 'B' && (
        <div className="rounded-xl bg-gray-950 overflow-hidden">
          {/* Terminal header bar */}
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
            <span className="w-3 h-3 rounded-full bg-red-500/60" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <span className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-3 text-xs text-gray-600 font-mono">experience.log</span>
          </div>
          <div className="p-5 space-y-4 font-mono text-sm">
            {experiences.map((e, i) => (
              <div
                key={e.company}
                onClick={() => navigate('/work')}
                className="group cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <span className="text-[#BE3D2A] shrink-0 select-none">$</span>
                  <div>
                    <span className="text-green-400">{e.company}</span>
                    <span className="text-gray-600 mx-2">·</span>
                    <span className="text-gray-400">{e.role}</span>
                    <div className="mt-0.5 text-gray-600 text-xs group-hover:text-gray-400 transition-colors">
                      # {e.period} — {e.highlight}
                    </div>
                  </div>
                </div>
                {i < experiences.length - 1 && <div className="mt-3 border-t border-white/5" />}
              </div>
            ))}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-[#BE3D2A]">$</span>
              <span className="text-gray-600 text-xs animate-pulse">▋</span>
            </div>
          </div>
        </div>
      )}

      {/* ── C: Accordion — collapsed rows, click to reveal highlight + tags ── */}
      {variant === 'C' && (
        <div className="divide-y divide-gray-100">
          {experiences.map(e => {
            const isOpen = open === e.company;
            return (
              <div key={e.company}>
                <button
                  onClick={() => setOpen(isOpen ? null : e.company)}
                  className="group w-full flex items-center justify-between py-4 text-left -mx-4 px-4 hover:bg-gray-50/60 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span className={`text-xs font-mono w-4 transition-transform duration-200 ${isOpen ? 'rotate-90 text-[#BE3D2A]' : 'text-gray-300'}`}>▶</span>
                    <span className="font-serif text-base text-gray-900 group-hover:text-[#BE3D2A] transition-colors truncate">{e.company}</span>
                    <span className="text-sm text-gray-400 hidden sm:block truncate">{e.role}</span>
                  </div>
                  <span className="text-xs text-gray-400 shrink-0 ml-4">{e.period}</span>
                </button>
                {isOpen && (
                  <div className="pb-4 pl-8 pr-4">
                    <p className="text-sm text-gray-600 mb-3">{e.highlight}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {e.tags.map(t => (
                        <span key={t} className="px-2 py-0.5 text-[10px] font-medium text-gray-500 border border-gray-200 rounded-full bg-gray-50">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* ── D: Horizontal scroll cards ── */}
      {variant === 'D' && (
        <div className="overflow-x-auto -mx-4 px-4 pb-3">
          <div className="flex gap-3 w-max">
            {experiences.map(e => (
              <div
                key={e.company}
                onClick={() => navigate('/work')}
                className="group w-56 shrink-0 border border-gray-200 rounded-xl p-5 cursor-pointer hover:border-[#BE3D2A]/30 hover:shadow-sm transition-all duration-150"
              >
                <p className="text-[10px] font-medium text-gray-400 uppercase tracking-widest mb-2">{e.period}</p>
                <h3 className="font-serif text-base text-gray-900 group-hover:text-[#BE3D2A] transition-colors mb-1 leading-snug">{e.company}</h3>
                <p className="text-xs text-gray-500 mb-3 leading-snug">{e.role}</p>
                <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">{e.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkPreview;
