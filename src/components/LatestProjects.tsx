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
    { id: 'mckinsey-case', title: 'McKinsey & Co', subtitle: 'Finalist applying strategic consulting frameworks to solve complex business challenges.', type: 'Case competition', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3rehHW0MaOSxIWvCJCTVZKW6MQVH3Eu3kvg&s' },
    { id: 'develop-for-good', title: 'Develop for Good', subtitle: 'Framer-based website redesign for nonprofit.', type: 'Volunteer', imageUrl: 'https://cdn.prod.website-files.com/62d7c8cb6f11a35f47072653/63b62174218127933ef2efb1_KHOU-FAST_FORWARD-08504%20(2)%20(1)-p-2000.jpg' },
    { id: 'minneanalytics', title: 'MinneAnalytics', subtitle: 'Serendipity Award (Top 6%) - RoBERTa-based sentiment analysis.', type: 'Hackathon', imageUrl: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80' },
    { id: 'aurora-center', title: 'The Aurora Center', subtitle: 'Supporting survivors of sexual violence through advocacy.', type: 'Volunteer', imageUrl: 'https://aurora.umn.edu/sites/aurora.umn.edu/files/2021-10/aurora-volunteers-01.jpg' },
    { id: 'china-bridge', title: 'China Bridge', subtitle: 'International participant demonstrating cross-cultural communication and Chinese language proficiency.', type: 'Case competition', imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80' },
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
