import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const typeOptions = ['Hackathon','Personal project','Research','Case competition','Volunteer'];


interface ProjectItem { id: string; title: string; subtitle: string; year: number; imageUrl: string; type: string; }

const Projects = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const navigate = useNavigate();


  const projects: ProjectItem[] = useMemo(() => [
    { 
      id: 'portfolio-website', 
      title: 'Portfolio Website', 
      subtitle: 'Modern, responsive portfolio with cutting-edge web technologies and smooth animations.', 
      year: 2025, 
      imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d', 
      type: 'Personal project'
    },
    { 
      id: 'nlp-transformer', 
      title: 'NLP Transformer Model', 
      subtitle: 'Sentiment analysis application using RoBERTA-based transformer for business insights.', 
      year: 2025, 
      imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c', 
      type: 'Personal project'
    },
    { 
      id: 'minneanalytics', 
      title: 'MinneAnalytics', 
      subtitle: 'Serendipity Award (Top 6%) - RoBERTa-based sentiment risk feature with Random Forest ensemble.', 
      year: 2025, 
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71', 
      type: 'Hackathon'
    },
    { 
      id: 'china-bridge', 
      title: 'China Bridge Challenge', 
      subtitle: 'International participant demonstrating cross-cultural communication and Chinese language proficiency.', 
      year: 2024, 
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4', 
      type: 'Case competition'
    },
    { 
      id: 'mckinsey-case', 
      title: 'McKinsey Case Competition', 
      subtitle: 'Finalist applying strategic consulting frameworks to solve complex business challenges.', 
      year: 2025, 
      imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43', 
      type: 'Case competition'
    },
    { 
      id: 'develop-for-good', 
      title: 'Website Redesign - Develop for Good', 
      subtitle: 'Framer-based website redesign for nonprofit organization supporting social impact.', 
      year: 2025, 
      imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd', 
      type: 'Volunteer'
    },
    { 
      id: 'aurora-center', 
      title: 'The Aurora Center for Advocacy', 
      subtitle: 'Supporting advocacy efforts for survivors of sexual violence through volunteer work.', 
      year: 2024, 
      imageUrl: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca', 
      type: 'Volunteer'
    },
    { 
      id: 'nami-volunteer', 
      title: 'NAMI Volunteering', 
      subtitle: 'Mental health advocacy and support services with National Alliance on Mental Illness.', 
      year: 2024, 
      imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56', 
      type: 'Volunteer'
    }
  ], []);

  const filtered = useMemo(() => {
    return projects.filter(p => {
      const matchType = !selectedType || p.type === selectedType;
      return matchType;
    });
  }, [projects, selectedType]);

  const clearFilters = () => { setSelectedType(null); };

  return (
    <section className="pt-8 pb-8 px-4">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Projects</h1>
        <div className="w-24 h-1 bg-accent mt-2 mb-6" />
        <p className="text-gray-600 max-w-2xl">
          A collection of projects showcasing my skills in data analytics, machine learning, and business intelligence across various domains and challenges.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8">
        {/* Filter Categories */}
        <div className="space-y-4">
          {/* Clear Filters Button - Inline */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Filter Projects</h2>
            {selectedType && (
              <button 
                onClick={clearFilters} 
                className="text-sm text-gray-600 hover:text-accent transition-colors font-medium"
              >
                Clear filter
              </button>
            )}
          </div>
          {/* Type Filter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Project Type</h3>
            <div role="radiogroup" aria-label="Project Type" className="flex flex-wrap gap-2">
              {typeOptions.map(t => {
                const active = selectedType === t;
                return (
                  <button 
                    key={t} 
                    role="radio" 
                    aria-checked={active} 
                    onClick={() => setSelectedType(active ? null : t)} 
                    className={`px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 border-2 focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                      active 
                        ? 'bg-accent/10 text-accent shadow-sm' 
                        : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm'
                    }`}
                    style={active ? { borderColor: '#BE3D2A' } : {}}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </div>



          {/* Active Filters Display */}
          {selectedType && (
            <div className="pt-2 border-t border-gray-200">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <span className="font-medium">Active filter:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium">
                  {selectedType}
                  <button 
                    onClick={() => setSelectedType(null)} 
                    className="hover:text-accent/80 ml-1"
                    aria-label={`Remove ${selectedType} filter`}
                  >
                    ×
                  </button>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-sm text-gray-600">
          {filtered.length === projects.length 
            ? `Showing all ${filtered.length} projects` 
            : `Showing ${filtered.length} of ${projects.length} projects`
          }
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <div
            key={project.id}
            onClick={() => navigate(`/projects/${project.id}`)}
            className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300 cursor-pointer"
          >
            <div className="relative overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute top-3 right-3">
                <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-700 rounded text-xs font-medium">
                  {project.year}
                </span>
              </div>
              {/* Click indicator overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                {project.subtitle}
              </p>
              <div className="flex items-center justify-between">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                  {project.type}
                </span>
                <div className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.563M15 6.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No projects found</h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your filters or search terms to find what you're looking for.
          </p>
          <button 
            onClick={clearFilters}
            className="px-4 py-2 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
          >
            Clear filter
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
