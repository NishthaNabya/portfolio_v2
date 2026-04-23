import { useMemo, useState } from 'react';
import { projectsData, typeOptions } from '../data/projects';

const Projects = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const base = selectedType
      ? projectsData.filter(p => p.type === selectedType)
      : projectsData;

    return [...base].sort((a, b) => b.year - a.year);
  }, [selectedType]);

  const handleCardClick = (link?: string) => {
    if (link) window.open(link, '_blank', 'noopener noreferrer');
  };

  return (
    <section className="pt-10 pb-16">

      {/* Header */}
      <div className="mb-10">
        <p className="text-xs font-medium tracking-widest text-[#BE3D2A] uppercase mb-2">All Work</p>
        <h1 className="font-serif text-3xl sm:text-4xl text-gray-900">What I've built.</h1>
      </div>

      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setSelectedType(null)}
          className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors border ${
            !selectedType
              ? 'bg-gray-900 text-white border-gray-900'
              : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-700'
          }`}
        >
          All
        </button>
        {typeOptions.map(t => (
          <button
            key={t}
            onClick={() => setSelectedType(selectedType === t ? null : t)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors border ${
              selectedType === t
                ? 'bg-gray-900 text-white border-gray-900'
                : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-700'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filtered.map((p) => {
          const link = p.links?.github || p.links?.live || p.links?.demo;
          return (
            <>
              {/* Mobile: flat card, all info visible */}
              <div
                key={`${p.id}-mobile`}
                onClick={() => handleCardClick(link)}
                className={`sm:hidden rounded-xl border border-gray-200 bg-white p-5 ${link ? 'cursor-pointer active:border-[#BE3D2A]/50' : ''}`}
              >
                <span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">{p.type}</span>
                <h3 className="font-serif text-xl text-gray-900 mt-1 mb-2">{p.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">{p.subtitle}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.technologies.slice(0, 4).map(tech => (
                    <span key={tech} className="text-[10px] text-gray-400 border border-gray-200 rounded-full px-2 py-0.5">{tech}</span>
                  ))}
                </div>
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs text-[#BE3D2A] underline underline-offset-2 hover:text-[#a8341f] transition-colors"
                  >
                    Link to Project
                  </a>
                )}
              </div>

              {/* Desktop: hover-reveal card */}
              <div
                key={p.id}
                onClick={() => handleCardClick(link)}
                className={`hidden sm:block group relative rounded-xl border border-gray-200 bg-white overflow-hidden h-48 hover:border-[#BE3D2A]/30 transition-colors ${link ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <div className="absolute inset-0 flex flex-col justify-between p-5 transition-transform duration-300 group-hover:-translate-y-full">
                  <span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">{p.type}</span>
                  <div>
                    <h3 className="font-serif text-xl text-gray-900 mb-1">{p.title}</h3>
                    <span className="text-xs text-gray-400">{p.year}</span>
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col p-5 bg-[#BE3D2A] translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-white/90 text-sm leading-relaxed line-clamp-3">{p.subtitle}</p>
                  <div className="flex-1 flex items-center">
                    {link && (
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-white/90 text-xs font-medium underline underline-offset-2 hover:text-white transition-colors"
                      >
                        Link to Project
                      </a>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                    {p.technologies.slice(0, 4).map(tech => (
                      <span key={tech} className="text-[10px] text-white/70 border border-white/30 rounded-full px-2 py-0.5">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="py-16 text-center">
          <p className="font-serif text-lg text-gray-400">No projects match that filter.</p>
          <button
            onClick={() => setSelectedType(null)}
            className="mt-4 text-xs text-gray-400 hover:text-[#BE3D2A] transition-colors"
          >
            Clear filter →
          </button>
        </div>
      )}

    </section>
  );
};

export default Projects;
