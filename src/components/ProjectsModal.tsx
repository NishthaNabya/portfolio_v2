import { useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  year: number;
  imageUrl: string;
  skills: string[];
  type: string; // project type/category
}

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: ProjectItem[];
}

const chipBase = 'whitespace-nowrap rounded-full border px-3 py-1.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent';
const typeOptions = [
  'Hackathon',
  'Personal project',
  'Volunteer',
  'Research',
  'Case competition',
];
const skillsOptions = [
  'Data modelling',
  'Data analytics',
  'Machine learning',
  'Data engineering',
  'Dashboarding/BI',
  'A/B testing',
  'SQL',
  'Python',
  'R',
];

const ProjectsModal: React.FC<ProjectsModalProps> = ({ isOpen, onClose, projects }) => {
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedSkills, setSelectedSkills] = useState<Set<string>>(new Set());
  const [sheetOpen, setSheetOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return projects.filter(p => {
      const matchSearch = q === '' || p.title.toLowerCase().includes(q) || p.subtitle.toLowerCase().includes(q);
      const matchType = !selectedType || p.type === selectedType;
      const matchSkills = selectedSkills.size === 0 || Array.from(selectedSkills).every(s => p.skills.includes(s));
      return matchSearch && matchType && matchSkills;
    });
  }, [projects, search, selectedType, selectedSkills]);

  const clearFilters = () => {
    setSearch('');
    setSelectedType(null);
    setSelectedSkills(new Set());
  };

  const removeApplied = (token: { kind: 'type' | 'skill'; value: string }) => {
    if (token.kind === 'type') setSelectedType(null);
    if (token.kind === 'skill') setSelectedSkills(prev => { const n = new Set(prev); n.delete(token.value); return n; });
  };

  const toggleSkill = (s: string) => {
    setSelectedSkills(prev => { const n = new Set(prev); if (n.has(s)) n.delete(s); else n.add(s); return n; });
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4" role="dialog" aria-modal="true">
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">All Projects</h3>
            <div className="w-16 h-[3px] bg-accent mt-2 rounded" />
          </div>
          <div className="flex items-center gap-3">
            <button onClick={clearFilters} className="hidden md:inline-block text-sm text-gray-600 hover:text-gray-900 underline underline-offset-4">Clear</button>
            <button onClick={() => setSheetOpen(true)} className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 text-sm text-gray-800 hover:bg-gray-50">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 3H2"/><path d="M22 9H8"/><path d="M22 15H14"/><path d="M22 21H20"/></svg>
              Filter
            </button>
            <button onClick={onClose} aria-label="Close" className="text-gray-500 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="mt-6">
          <div className="relative w-full">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search projects..."
              className="w-full rounded-full border border-gray-200 bg-gray-50 px-10 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white"
            />
          </div>
        </div>

        {/* Applied filters */}
        {(selectedType || selectedSkills.size > 0) && (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {selectedType && (
              <button onClick={() => removeApplied({ kind: 'type', value: selectedType! })} className="flex items-center gap-2 rounded-full bg-gray-100 text-gray-800 px-3 py-1 text-sm">
                {selectedType}
                <span aria-hidden>✕</span>
              </button>
            )}
            {Array.from(selectedSkills).map(s => (
              <button key={s} onClick={() => removeApplied({ kind: 'skill', value: s })} className="flex items-center gap-2 rounded-full bg-gray-100 text-gray-800 px-3 py-1 text-sm">
                {s}
                <span aria-hidden>✕</span>
              </button>
            ))}
          </div>
        )}

        {/* Inline chips (desktop) */}
        <div className="mt-6 space-y-4 hidden md:block">
          {/* Type as segmented radios */}
          <div>
            <div className="text-xs uppercase tracking-wide text-gray-500 mb-2">Type</div>
            <div role="radiogroup" aria-label="Project Type" className="flex items-center gap-2 flex-wrap">
              {typeOptions.map(t => {
                const active = selectedType === t;
                return (
                  <button
                    key={t}
                    role="radio"
                    aria-checked={active}
                    onClick={() => setSelectedType(active ? null : t)}
                    className={
                      `${chipBase} ` + (active ? 'bg-accent text-white border-transparent' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100')
                    }
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Skills as toggles */}
          <div>
            <div className="text-xs uppercase tracking-wide text-gray-500 mb-2">Skills</div>
            <div className="flex items-center gap-2 flex-wrap">
              {skillsOptions.map(s => {
                const active = selectedSkills.has(s);
                return (
                  <button
                    key={s}
                    aria-pressed={active}
                    onClick={() => toggleSkill(s)}
                    className={
                      `${chipBase} ` + (active ? 'bg-accent text-white border-transparent' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100')
                    }
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[60vh] overflow-auto pr-1">
          {filtered.map(project => (
            <div key={project.id} className="relative rounded-xl overflow-hidden shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow bg-white">
              <img src={project.imageUrl} alt={project.title} className="w-full h-40 object-cover" />
              <div className="absolute top-2 left-2 text-xs font-semibold text-white bg-black/50 px-2 py-1 rounded-full">{project.year}</div>
              <div className="p-4">
                <h4 className="text-base font-bold text-gray-900">{project.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{project.subtitle}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.skills.slice(0, 4).map(skill => (
                    <span key={skill} className="text-[11px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-sm text-gray-600">No projects match your filters.</div>
          )}
        </div>

        {/* Right-side sheet */}
        {sheetOpen && createPortal(
          <div className="fixed inset-0 z-[10000]">
            <div className="absolute inset-0 bg-black/40" onClick={() => setSheetOpen(false)} />
            <div className="absolute right-0 top-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl p-6 overflow-auto">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold text-gray-900">Filters</h4>
                <button onClick={() => setSheetOpen(false)} aria-label="Close filters" className="text-gray-500 hover:text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
                </button>
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <div className="text-xs uppercase tracking-wide text-gray-500 mb-2">Type</div>
                  <div role="radiogroup" aria-label="Project Type" className="flex items-center gap-2 flex-wrap">
                    {typeOptions.map(t => {
                      const active = selectedType === t;
                      return (
                        <button
                          key={t}
                          role="radio"
                          aria-checked={active}
                          onClick={() => setSelectedType(active ? null : t)}
                          className={
                            `${chipBase} ` + (active ? 'bg-accent text-white border-transparent' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100')
                          }
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-wide text-gray-500 mb-2">Skills</div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {skillsOptions.map(s => {
                      const active = selectedSkills.has(s);
                      return (
                        <button
                          key={s}
                          aria-pressed={active}
                          onClick={() => toggleSkill(s)}
                          className={
                            `${chipBase} ` + (active ? 'bg-accent text-white border-transparent' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100')
                          }
                        >
                          {s}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button onClick={clearFilters} className="text-sm text-gray-600 hover:text-gray-900 underline underline-offset-4">Clear</button>
                  <button onClick={() => setSheetOpen(false)} className="px-4 py-2 text-sm font-medium rounded-md text-white bg-accent hover:opacity-90">Apply</button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </div>,
    document.body
  );
};

export default ProjectsModal;
