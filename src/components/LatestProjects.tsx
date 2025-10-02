import { Link, useNavigate } from 'react-router-dom';
import { getFeaturedProjects } from '../data/projects';

const LatestProjects = () => {
  const navigate = useNavigate();
  
  const projects = getFeaturedProjects();

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
