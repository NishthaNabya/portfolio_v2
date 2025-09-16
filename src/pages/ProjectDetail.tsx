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
      id: 'portfolio-website',
      title: 'Portfolio Website',
      subtitle: 'Modern, responsive portfolio with cutting-edge web technologies and smooth animations.',
      year: 2025,
      imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d',
      type: 'Personal project',
      description: 'A modern, responsive portfolio website built with cutting-edge web technologies featuring smooth animations, dark mode support, and optimized performance. This project showcases advanced front-end development skills and modern design principles.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Vite', 'React Router'],
      challenges: 'The main challenge was creating a portfolio that stands out while maintaining excellent performance and accessibility. Balancing visual appeal with fast loading times and ensuring smooth animations across different devices required careful optimization.',
      solution: 'Implemented a modern tech stack with React and Tailwind CSS for rapid development, Framer Motion for smooth animations, and Vite for optimized builds. Used responsive design principles and performance optimization techniques to ensure fast loading and smooth user experience across all devices.',
      outcome: 'Successfully created a professional portfolio website that effectively showcases projects and skills with excellent performance metrics. The site features smooth animations, responsive design, and optimized loading times that enhance user engagement.',
      links: {
        github: 'https://github.com/username/portfolio',
        live: 'https://portfolio.example.com'
      }
    },
    {
      id: 'nlp-transformer',
      title: 'NLP Transformer Model',
      subtitle: 'Sentiment analysis application using RoBERTA-based transformer for business insights.',
      year: 2024,
      imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c',
      type: 'Personal project',
      description: 'Developed a sophisticated sentiment analysis application leveraging a RoBERTA-based transformer model to classify text data with high accuracy for business insights. This project demonstrates advanced natural language processing capabilities and machine learning implementation.',
      technologies: ['Python', 'NLP', 'RoBERTA', 'Transformers', 'PyTorch', 'Pandas', 'Scikit-learn'],
      challenges: 'The primary challenge was fine-tuning the RoBERTA model for domain-specific sentiment analysis while maintaining high accuracy across diverse text inputs. Optimizing model performance and handling large-scale text processing required careful architecture design.',
      solution: 'Implemented a RoBERTA-based transformer model with custom fine-tuning for sentiment classification. Used advanced preprocessing techniques, data augmentation, and model optimization to achieve high accuracy. Built a scalable pipeline for processing large volumes of text data.',
      outcome: 'Successfully developed a high-accuracy sentiment analysis model that provides valuable business insights from text data. The model demonstrates strong performance across various text types and can be integrated into business intelligence workflows.',
      links: {
        github: 'https://github.com/username/nlp-transformer'
      }
    },
    {
      id: 'minneanalytics',
      title: 'MinneAnalytics',
      subtitle: 'Serendipity Award (Top 6%) - RoBERTa-based sentiment risk feature with Random Forest ensemble.',
      year: 2024,
      imageUrl: '/Users/nishh/Desktop/portfolio_v2/Gemini_Generated_Image_bzjx0lbzjx0lbzjx.png',
      type: 'Hackathon',
      description: 'Participated in the MinneAnalytics hackathon with 70+ teams, securing a prestigious Serendipity Award by ranking in the top 6%. The project focused on developing advanced machine learning solutions combining natural language processing with ensemble methods to create robust predictive models.',
      technologies: ['Machine Learning', 'NLP', 'RoBERTa', 'Random Forest', 'Python', 'Data Analysis'],
      challenges: 'The primary challenge was developing a sentiment analysis model that could accurately assess risk factors while competing against 70+ highly skilled teams. Integrating advanced NLP techniques with traditional machine learning approaches required careful feature engineering and model optimization.',
      solution: 'I engineered a sophisticated RoBERTa-based sentiment risk feature that captured nuanced emotional indicators in text data. This was then integrated into a Random Forest ensemble model, combining the power of transformer-based NLP with robust tree-based learning. The solution also incorporated an empathy-driven approach to ensure human-centered decision making.',
      outcome: 'Successfully outperformed 94% of competing teams, earning recognition with the Serendipity Award. The model demonstrated superior performance in risk assessment tasks and showcased the effective integration of cutting-edge NLP techniques with traditional machine learning approaches.',
      links: {}
    },
    {
      id: 'china-bridge',
      title: 'China Bridge Challenge',
      subtitle: 'International participant demonstrating cross-cultural communication and Chinese language proficiency.',
      year: 2024,
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
      type: 'Case competition',
      description: 'Participated in the prestigious China Bridge Challenge, an international competition that tests cross-cultural communication skills and Chinese language proficiency. This competition brings together global participants to demonstrate their understanding of Chinese culture, language, and international business practices.',
      technologies: ['Cross-Cultural Communication', 'Language Skills', 'International Business', 'Cultural Analysis'],
      challenges: 'The main challenge was effectively communicating complex ideas in Chinese while demonstrating deep cultural understanding in a highly competitive international setting. Participants needed to showcase not just language skills but also cultural sensitivity and business acumen.',
      solution: 'Leveraged comprehensive preparation in Chinese language and cultural studies to effectively communicate and present in the competition setting. Focused on demonstrating authentic cross-cultural understanding while maintaining professional communication standards throughout the competition.',
      outcome: 'Successfully represented as an international participant, demonstrating strong Chinese language proficiency and cross-cultural communication skills on a global stage. The experience enhanced international perspective and validated language learning achievements.',
      links: {}
    },
    {
      id: 'mckinsey-case',
      title: 'McKinsey Case Competition',
      subtitle: 'Finalist applying strategic consulting frameworks to solve complex business challenges.',
      year: 2024,
      imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43',
      type: 'Case competition',
      description: 'Participated as a finalist in McKinsey\'s prestigious case competition, applying strategic consulting frameworks to solve complex business challenges. The competition involved analyzing real-world business scenarios and presenting solutions to industry professionals and McKinsey consultants.',
      technologies: ['Strategy', 'Consulting', 'Business Analysis', 'Strategic Frameworks', 'Presentation Skills'],
      challenges: 'The challenge involved analyzing complex business scenarios under time pressure while competing with top university teams. Required synthesizing large amounts of information, identifying key issues, and developing actionable recommendations that could withstand scrutiny from experienced consultants.',
      solution: 'Applied structured consulting methodologies including problem decomposition, hypothesis-driven analysis, and data-driven insights to tackle the business case. Utilized strategic frameworks to organize thinking and developed compelling presentations that clearly communicated recommendations to industry professionals.',
      outcome: 'Achieved finalist status in the highly competitive McKinsey case competition, demonstrating strong analytical thinking and strategic problem-solving capabilities. The experience provided valuable exposure to consulting methodologies and validation of business analysis skills.',
      links: {}
    },
    {
      id: 'develop-for-good',
      title: 'Website Redesign - Develop for Good',
      subtitle: 'Framer-based website redesign for nonprofit organization supporting social impact.',
      year: 2024,
      imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd',
      type: 'Volunteer',
      description: 'Volunteered with Develop for Good to redesign their website using Framer, focusing on improving user experience and visual appeal for a nonprofit organization dedicated to connecting skilled volunteers with social impact projects. The redesign aimed to better communicate their mission and increase volunteer engagement.',
      technologies: ['Framer', 'UI/UX Design', 'Web Design', 'Nonprofit Sector', 'User Experience'],
      challenges: 'The main challenge was understanding the unique needs of a nonprofit organization while creating a design that would effectively communicate their mission and encourage volunteer sign-ups. Balancing visual appeal with clear calls-to-action required careful consideration of user journey and nonprofit best practices.',
      solution: 'Utilized Framer\'s advanced design and prototyping capabilities to create an engaging, user-friendly website. Focused on clear messaging, intuitive navigation, and compelling visuals that highlight the impact of volunteer work. Implemented responsive design principles to ensure accessibility across all devices.',
      outcome: 'Successfully delivered a modern, engaging website that better represents Develop for Good\'s mission and improves the volunteer onboarding experience. The redesign contributes to the organization\'s ability to attract and retain volunteers for social impact projects.',
      links: {}
    },
    {
      id: 'aurora-center',
      title: 'The Aurora Center for Advocacy',
      subtitle: 'Supporting advocacy efforts for survivors of sexual violence through volunteer work.',
      year: 2024,
      imageUrl: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca',
      type: 'Volunteer',
      description: 'Volunteered with The Aurora Center for Advocacy, supporting their mission to provide advocacy services for survivors of sexual violence. Contributed to various initiatives aimed at supporting survivors, raising awareness, and promoting prevention education within the community.',
      technologies: ['Advocacy', 'Community Outreach', 'Support Services', 'Social Justice', 'Communication'],
      challenges: 'Working in the sensitive area of sexual violence advocacy requires careful attention to trauma-informed practices and maintaining confidentiality while effectively supporting survivors and promoting awareness initiatives.',
      solution: 'Applied trauma-informed approaches in all interactions and activities. Focused on creating safe, supportive environments for survivors while contributing to educational and awareness initiatives. Maintained strict confidentiality and followed all organizational protocols.',
      outcome: 'Made meaningful contributions to The Aurora Center\'s advocacy efforts, helping to support survivors and promote awareness within the community. Gained valuable experience in social justice work and trauma-informed practices.',
      links: {}
    },
    {
      id: 'nami-volunteer',
      title: 'NAMI Volunteering',
      subtitle: 'Mental health advocacy and support services with National Alliance on Mental Illness.',
      year: 2024,
      imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56',
      type: 'Volunteer',
      description: 'Volunteered with the National Alliance on Mental Illness (NAMI), contributing to mental health advocacy and support services. Participated in various programs aimed at reducing stigma, providing education, and supporting individuals and families affected by mental health conditions.',
      technologies: ['Mental Health Advocacy', 'Community Education', 'Support Groups', 'Public Speaking', 'Program Coordination'],
      challenges: 'Mental health advocacy requires sensitivity, knowledge of mental health issues, and the ability to communicate effectively with diverse audiences while addressing stigma and misconceptions about mental illness.',
      solution: 'Participated in NAMI training programs to develop understanding of mental health conditions and effective advocacy strategies. Contributed to educational programs, support group facilitation, and community outreach efforts focused on reducing stigma and promoting mental health awareness.',
      outcome: 'Successfully contributed to NAMI\'s mission of improving the lives of individuals and families affected by mental illness. Helped promote mental health awareness and reduce stigma through various volunteer activities and community engagement initiatives.',
      links: {}
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
    <section className="pt-8 pb-24 px-4">
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
