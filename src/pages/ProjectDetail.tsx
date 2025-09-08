import { useParams, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';

interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  year: number;
  imageUrl: string;
  type: string;
  description: string;
  technologies: string[];
  challenges: string;
  solution: string;
  outcome: string;
  links?: {
    github?: string;
    live?: string;
    demo?: string;
  };
  gallery?: string[];
}

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Extended project data with detailed information
  const projectsData: ProjectDetail[] = useMemo(() => [
    {
      id: 'trailtype',
      title: 'TrailType',
      subtitle: 'Modern design inspired by the great outdoors.',
      year: 2025,
      imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
      type: 'Personal project',
      description: 'TrailType is a modern typography and design system inspired by the natural world. This project explores how outdoor aesthetics can be translated into digital design principles, creating a cohesive visual language that brings the tranquility and beauty of nature to digital interfaces.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Adobe Creative Suite'],
      challenges: 'The main challenge was creating a design system that felt authentic to outdoor experiences while remaining functional and accessible in digital contexts. Balancing natural, organic elements with the structured requirements of user interface design required careful consideration.',
      solution: 'I developed a comprehensive design system that incorporates earth tones, organic shapes, and typography inspired by trail signage and outdoor equipment. The system includes components that scale across different devices while maintaining the natural aesthetic.',
      outcome: 'The project resulted in a complete design system with over 50 reusable components, comprehensive documentation, and a demo application showcasing the system in action. The work has been featured in design communities and serves as a template for nature-inspired digital design.',
      links: {
        github: 'https://github.com/username/trailtype',
        live: 'https://trailtype.design',
        demo: 'https://demo.trailtype.design'
      },
      gallery: [
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e'
      ]
    },
    {
      id: 'spark',
      title: 'The Spark Sessions',
      subtitle: 'A podcast for creators chasing meaningful work.',
      year: 2024,
      imageUrl: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618',
      type: 'Volunteer',
      description: 'The Spark Sessions is a podcast series designed to inspire and guide creators who are pursuing meaningful work. Through intimate conversations with entrepreneurs, artists, and innovators, the show explores the intersection of passion and purpose in creative careers.',
      technologies: ['Audio Production', 'Podcast Hosting', 'Social Media Marketing', 'Content Strategy'],
      challenges: 'Building an audience from scratch and maintaining consistent quality while coordinating with busy creative professionals presented significant logistical and creative challenges.',
      solution: 'I developed a streamlined production process that respects guests\' time while ensuring high-quality output. This included pre-interview research, efficient recording setups, and a content distribution strategy across multiple platforms.',
      outcome: 'The podcast has reached over 10,000 downloads across 25 episodes, featuring guests from major creative companies and independent studios. The show has built a community of creative professionals and continues to grow monthly.',
      links: {
        live: 'https://sparksessions.podcast.com'
      }
    },
    {
      id: 'wild',
      title: 'Into the Wild',
      subtitle: 'A raw journey through nature extremes.',
      year: 2023,
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
      type: 'Personal project',
      description: 'Into the Wild is a multimedia documentation project capturing extreme natural environments and the stories of people who work and live in these challenging conditions. The project combines photography, video, and written narratives to create immersive storytelling experiences.',
      technologies: ['Photography', 'Video Production', 'Web Development', 'Storytelling', 'Geographic Information Systems'],
      challenges: 'Working in extreme weather conditions while maintaining equipment functionality and ensuring personal safety. Additionally, building trust with subjects in remote locations required cultural sensitivity and patience.',
      solution: 'I developed specialized equipment protocols for harsh environments and established partnerships with local guides and communities. The technical approach included weather-sealed equipment and backup systems for data preservation.',
      outcome: 'The project produced a traveling exhibition that has been displayed in 8 cities, a companion website with interactive maps, and a published photo book. The work has raised awareness about climate change impacts in remote regions.',
      gallery: [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
        'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
        'https://images.unsplash.com/photo-1518837695005-2083093ee35b'
      ]
    },
    {
      id: 'urban',
      title: 'Urban Canvas',
      subtitle: 'Exploring the intersection of art and city life.',
      year: 2022,
      imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df',
      type: 'Research',
      description: 'Urban Canvas is a research project investigating how street art and public installations influence community identity and social cohesion in urban environments. The study combines quantitative analysis with ethnographic research methods.',
      technologies: ['Data Analysis', 'Survey Design', 'Geographic Mapping', 'Statistical Analysis', 'Community Engagement'],
      challenges: 'Measuring the subjective impact of art on community well-being required developing new methodological approaches that could capture both quantitative and qualitative data effectively.',
      solution: 'I created a mixed-methods research framework combining community surveys, interview protocols, and spatial analysis of art installations. This approach provided both statistical validation and rich narrative insights.',
      outcome: 'The research has been published in two peer-reviewed journals and presented at three academic conferences. The findings have influenced public art policy in two major cities and contributed to urban planning best practices.',
      links: {
        github: 'https://github.com/username/urban-canvas-research'
      }
    },
    {
      id: 'echoes',
      title: 'Echoes of Silence',
      subtitle: 'A study in minimalist soundscapes.',
      year: 2021,
      imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f',
      type: 'Case competition',
      description: 'Echoes of Silence was developed for a national design competition focused on creating therapeutic audio experiences. The project explores how minimalist sound design can be used to reduce anxiety and promote mindfulness in urban environments.',
      technologies: ['Audio Engineering', 'Sound Design', 'User Experience Research', 'Mobile App Development', 'Behavioral Analysis'],
      challenges: 'Creating universally calming audio experiences while accounting for individual differences in sound perception and cultural associations with different types of sounds.',
      solution: 'I developed an adaptive audio system that personalizes soundscapes based on user feedback and biometric data. The system learns individual preferences while maintaining therapeutic effectiveness.',
      outcome: 'The project won first place in the national competition and has been licensed by a meditation app company. The research contributed to understanding how personalized audio can enhance mental health interventions.',
      links: {
        demo: 'https://echoes-silence-demo.com'
      }
    }
  ], []);

  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <section className="pt-16 pb-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <button 
            onClick={() => navigate('/projects')}
            className="px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
          >
            Back to Projects
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-16 pb-24">
      {/* Header Section */}
      <div className="mb-12">
        {/* Back Button and Project Type on same line */}
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={() => navigate('/projects')}
            className="flex items-center gap-2 text-gray-600 hover:text-accent transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </button>
          
          <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
            {project.type}
          </span>
        </div>
        
        <h1 className="text-4xl font-bold text-accent mb-4">{project.title}</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl">{project.subtitle}</p>
      </div>

      {/* Main Image */}
      <div className="mb-12">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Description */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
            <div className="w-16 h-[3px] bg-accent mb-4" />
            <p className="text-gray-700 leading-relaxed">{project.description}</p>
          </div>

          {/* Challenge */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Challenge</h2>
            <div className="w-16 h-[3px] bg-accent mb-4" />
            <p className="text-gray-700 leading-relaxed">{project.challenges}</p>
          </div>

          {/* Solution */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Solution</h2>
            <div className="w-16 h-[3px] bg-accent mb-4" />
            <p className="text-gray-700 leading-relaxed">{project.solution}</p>
          </div>

          {/* Outcome */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Outcome</h2>
            <div className="w-16 h-[3px] bg-accent mb-4" />
            <p className="text-gray-700 leading-relaxed">{project.outcome}</p>
          </div>

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Gallery</h2>
              <div className="w-16 h-[3px] bg-accent mb-6" />
              <div className="grid sm:grid-cols-2 gap-4">
                {project.gallery.map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`${project.title} gallery ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Technologies */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {project.links && (project.links.github || project.links.demo) && (
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Links</h3>
              <div className="space-y-3">
                {project.links.github && (
                  <a 
                    href={project.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-accent transition-colors font-medium"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                )}
                {project.links.demo && (
                  <a 
                    href={project.links.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-accent transition-colors font-medium"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Demo
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Project Details */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Project Details</h3>
            <div className="space-y-3">
              <div>
                <span className="text-sm font-medium text-gray-500">Type</span>
                <p className="text-gray-900">{project.type}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ProjectDetail;
