import { useMemo } from 'react';
import { Link } from 'react-router-dom';

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  year: number;
  imageUrl: string;
}

const LatestProjects = () => {
  const projects: ProjectItem[] = useMemo(() => [
    { id: 'trailtype', title: 'TrailType', subtitle: 'Modern design inspired by the great outdoors.', year: 2025, imageUrl: 'https://via.placeholder.com/400x300' },
    { id: 'spark', title: 'The Spark Sessions', subtitle: 'A podcast for creators chasing meaningful work.', year: 2024, imageUrl: 'https://via.placeholder.com/400x300' },
    { id: 'wild', title: 'Into the Wild', subtitle: 'A raw journey through nature’s extremes.', year: 2023, imageUrl: 'https://via.placeholder.com/400x300' },
    { id: 'urban', title: 'Urban Canvas', subtitle: 'Exploring the intersection of art and city life.', year: 2022, imageUrl: 'https://via.placeholder.com/400x300' },
    { id: 'echoes', title: 'Echoes of Silence', subtitle: 'A study in minimalist soundscapes.', year: 2021, imageUrl: 'https://via.placeholder.com/400x300' },
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
          <div key={p.id} className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-3">
              <p className="text-white text-sm font-semibold">{p.year}</p>
              <h3 className="text-lg font-bold text-white mt-1">{p.title}</h3>
              <p className="text-gray-300 text-xs">{p.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestProjects;
