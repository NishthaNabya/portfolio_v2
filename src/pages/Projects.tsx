import { useMemo, useState } from 'react';

const typeOptions = ['Hackathon','Personal project','Volunteer','Research','Case competition'];
const skillsOptions = ['Data modelling','Data analytics','Machine learning','Data engineering','Dashboarding/BI','A/B testing','SQL','Python','R'];

interface ProjectItem { id: string; title: string; subtitle: string; year: number; imageUrl: string; type: string; skills: string[]; }

const Projects = () => {
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedSkills, setSelectedSkills] = useState<Set<string>>(new Set());

  const projects: ProjectItem[] = useMemo(() => [
    { id: 'trailtype', title: 'TrailType', subtitle: 'Modern design inspired by the great outdoors.', year: 2025, imageUrl: 'https://via.placeholder.com/600x400', type: 'Personal project', skills: ['Data analytics','Dashboarding/BI','Python'] },
    { id: 'spark', title: 'The Spark Sessions', subtitle: 'A podcast for creators chasing meaningful work.', year: 2024, imageUrl: 'https://via.placeholder.com/600x400', type: 'Volunteer', skills: ['Data modelling','SQL'] },
    { id: 'wild', title: 'Into the Wild', subtitle: 'A raw journey through nature’s extremes.', year: 2023, imageUrl: 'https://via.placeholder.com/600x400', type: 'Personal project', skills: ['Machine learning','Python'] },
    { id: 'urban', title: 'Urban Canvas', subtitle: 'Exploring the intersection of art and city life.', year: 2022, imageUrl: 'https://via.placeholder.com/600x400', type: 'Research', skills: ['Data engineering','Data analytics','R'] },
    { id: 'echoes', title: 'Echoes of Silence', subtitle: 'A study in minimalist soundscapes.', year: 2021, imageUrl: 'https://via.placeholder.com/600x400', type: 'Case competition', skills: ['A/B testing','SQL'] },
  ], []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return projects.filter(p => {
      const matchSearch = q === '' || p.title.toLowerCase().includes(q) || p.subtitle.toLowerCase().includes(q);
      const matchType = !selectedType || p.type === selectedType;
      const matchSkills = selectedSkills.size === 0 || Array.from(selectedSkills).every(s => p.skills.includes(s));
      return matchSearch && matchType && matchSkills;
    });
  }, [projects, search, selectedType, selectedSkills]);

  const toggleSkill = (s: string) => setSelectedSkills(prev => { const n = new Set(prev); if (n.has(s)) n.delete(s); else n.add(s); return n; });
  const clearFilters = () => { setSearch(''); setSelectedType(null); setSelectedSkills(new Set()); };

  return (
    <section className="pt-16 pb-24 px-4 bg-white">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Projects</h1>
          <div className="w-24 h-1 bg-accent mt-2" />
        </div>
      </div>

      {/* Filters */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative w-full md:max-w-xl">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search projects..." className="w-full rounded-full border border-gray-200 bg-gray-50 px-10 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white" />
          </div>
          <div className="md:ml-auto">
            <button onClick={clearFilters} className="text-sm text-gray-600 hover:text-gray-900 underline underline-offset-4">Clear</button>
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wide text-gray-500 mb-2">Type</div>
          <div role="radiogroup" aria-label="Project Type" className="flex items-center gap-2 flex-wrap">
            {typeOptions.map(t => {
              const active = selectedType === t;
              return (
                <button key={t} role="radio" aria-checked={active} onClick={() => setSelectedType(active ? null : t)} className={`${'whitespace-nowrap rounded-full border px-3 py-1.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent'} ${active ? 'bg-accent text-white border-transparent' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'}`}>{t}</button>
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
                <button key={s} aria-pressed={active} onClick={() => toggleSkill(s)} className={`${'whitespace-nowrap rounded-full border px-3 py-1.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent'} ${active ? 'bg-accent text-white border-transparent' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'}`}>{s}</button>
              );
            })}
          </div>
        </div>
        {(selectedType || selectedSkills.size > 0) && (
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {selectedType && (
              <button onClick={() => setSelectedType(null)} className="flex items-center gap-2 rounded-full bg-gray-100 text-gray-800 px-3 py-1 text-sm">{selectedType}<span aria-hidden>✕</span></button>
            )}
            {Array.from(selectedSkills).map(s => (
              <button key={s} onClick={() => toggleSkill(s)} className="flex items-center gap-2 rounded-full bg-gray-100 text-gray-800 px-3 py-1 text-sm">{s}<span aria-hidden>✕</span></button>
            ))}
          </div>
        )}
      </div>

      {/* Grid */}
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map(p => (
          <div key={p.id} className="relative group rounded-lg overflow-hidden shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow">
            <img src={p.imageUrl} alt={p.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-base font-bold text-gray-900">{p.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{p.subtitle}</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {p.skills.slice(0, 4).map(skill => (<span key={skill} className="text-[11px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">{skill}</span>))}
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-sm text-gray-600">No projects match your filters.</div>
        )}
      </div>
    </section>
  );
};

export default Projects;
