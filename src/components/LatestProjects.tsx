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
    { id: 'trailtype', title: 'TrailType', subtitle: 'Modern design inspired by the great outdoors.', type: 'Personal project', imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e' },
    { id: 'spark', title: 'The Spark Sessions', subtitle: 'A podcast for creators chasing meaningful work.', type: 'Volunteer', imageUrl: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618' },
    { id: 'wild', title: 'Into the Wild', subtitle: 'A raw journey through nature extremes.', type: 'Personal project', imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4' },
    { id: 'urban', title: 'Urban Canvas', subtitle: 'Exploring the intersection of art and city life.', type: 'Research', imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df' },
    { id: 'echoes', title: 'Echoes of Silence', subtitle: 'A study in minimalist soundscapes.', type: 'Case competition', imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f' },
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
              <p className="text-gray-100 text-xs drop-shadow-md mb-2">{p.subtitle}</p>
              <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm text-white rounded text-xs font-medium w-fit drop-shadow-lg">{p.type}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestProjects;
