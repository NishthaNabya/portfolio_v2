import { useParams, useNavigate } from 'react-router-dom';
import { getProjectById } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = getProjectById(id!);

  if (!project) {
    return (
      <section className="pt-8 pb-24 px-4">
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
    <section className="pt-4 sm:pt-6 md:pt-8 pb-12 sm:pb-16 md:pb-24 px-0 sm:px-4">
      {/* Header Section */}
      <div className="mb-8 sm:mb-10 md:mb-12">
        {/* Back Button and Project Type on same line */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
          <button 
            onClick={() => navigate('/projects')}
            className="flex items-center gap-2 text-gray-600 hover:text-accent transition-colors font-medium text-sm sm:text-base"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </button>
          
          <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-medium w-fit">
            {project.type}
          </span>
        </div>
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-3 sm:mb-4">{project.title}</h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl">{project.subtitle}</p>
      </div>

      {/* Main Image */}
      <div className="mb-8 sm:mb-10 md:mb-12">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Description */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Overview</h2>
            <div className="w-16 h-[3px] bg-accent mb-3 sm:mb-4" />
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{project.description}</p>
          </div>

          {/* Challenge */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Challenge</h2>
            <div className="w-16 h-[3px] bg-accent mb-3 sm:mb-4" />
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{project.challenges}</p>
          </div>

          {/* Solution */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Solution</h2>
            <div className="w-16 h-[3px] bg-accent mb-3 sm:mb-4" />
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{project.solution}</p>
          </div>

          {/* Outcome */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Outcome</h2>
            <div className="w-16 h-[3px] bg-accent mb-3 sm:mb-4" />
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{project.outcome}</p>
          </div>

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Gallery</h2>
              <div className="w-16 h-[3px] bg-accent mb-4 sm:mb-6" />
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
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
        <div className="space-y-6 sm:space-y-8">
          {/* Technologies */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {project.links && (project.links.github || project.links.demo) && (
            <div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Links</h3>
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
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Project Details</h3>
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
