import { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  imageUrl: string;
}

const LatestProjects = () => {
  const navigate = useNavigate();
  
  const projects: ProjectItem[] = useMemo(() => [
    { id: 'portfolio-website', title: 'Portfolio Website', subtitle: 'Modern, responsive portfolio with cutting-edge web technologies.', type: 'Personal project', imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80' },
    { id: 'nlp-transformer', title: 'NLP Model', subtitle: 'RoBERTA-based sentiment analysis for business insights.', type: 'Personal project', imageUrl: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80' },
    { id: 'minneanalytics', title: 'MinneAnalytics', subtitle: 'Serendipity Award (Top 6%) - RoBERTa-based sentiment analysis.', type: 'Hackathon', imageUrl: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80' },
    { id: 'develop-for-good', title: 'Develop for Good', subtitle: 'Framer-based website redesign for nonprofit.', type: 'Volunteer', imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80' },
    { id: 'aurora-center', title: 'The Aurora Center', subtitle: 'Supporting survivors of sexual violence through advocacy.', type: 'Volunteer', imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80' },
  ], []);

  return (
    <section className="pt-16 px-4 bg-white">
      <div className="flex justify-between items-center mb-6">
        <div className="flex-col">
          <h2 className="text-3xl font-bold text-gray-900">Latest Projects</h2>
          <div className="w-24 h-1 bg-accent mt-2"></div>
        </div>
        <Link to="/projects" className="text-accent hover:underline">View all</Link>
      </div>
      <div className="grid md:grid-cols-5 gap-4">
        {projects.map(p => (
          <div 
            key={p.id} 
            onClick={() => navigate(`/projects/${p.id}`)}
            className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <img src={p.imageUrl} alt={p.title} className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-3">
              <h3 className="text-lg font-bold text-white drop-shadow-lg">{p.title}</h3>
              <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm text-white rounded text-xs font-medium w-fit drop-shadow-lg">{p.type}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestProjects;
