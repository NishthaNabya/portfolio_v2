// Shared project data source to ensure consistency across all components

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  year: number;
  imageUrl: string;
  type: string;
}

export interface ProjectDetail extends ProjectItem {
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

// Main project data with consistent images across all views
export const projectsData: ProjectDetail[] = [
  {
    id: 'chatTrackr',
    title: 'ChatTrackr',
    subtitle: 'Chrome extension with Postgres backend centralizing 50+ professional coffee chat records with automated networking workflows.',
    year: 2025,
    imageUrl: '/src/assets/photos/ChatTrackr.jpg',
    type: 'Personal project',
    description: 'ChatTrackr is a comprehensive networking management system built as a Chrome extension with a robust Postgres backend. The platform centralizes professional coffee chat records and automates networking workflows, significantly reducing manual effort while improving relationship management and follow-up efficiency.',
    technologies: ['Python', 'REST APIs', 'Postgres', 'Javascript', 'Node.js', 'Express', 'Chrome Extension', 'LLM Integration', 'SQL'],
    challenges: 'The main challenge was creating a seamless integration between a Chrome extension frontend and a robust backend system while handling complex relational data schemas. Additionally, implementing reliable ETL pipelines for networking data and integrating LLM capabilities for automated contact management required careful architecture design.',
    solution: 'Engineered a Chrome extension with a Postgres backend featuring relational schemas and ETL pipelines to centralize 50+ professional coffee chat records. Developed Node.js/Express REST APIs with LLM integration to automate contact search, follow-ups, and Gmail drafting. Implemented analytics workflows in Python and SQL to surface chat frequency, follow-up rates, and engagement history.',
    outcome: 'Successfully reduced manual networking effort by 70% and cut prep time per chat from ~20 minutes to less than 5 minutes. The system provides fast, reliable querying of networking data and automated workflows that significantly improve relationship management efficiency.',
    links: {}
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    subtitle: 'Modern, responsive portfolio with cutting-edge web technologies and smooth animations.',
    year: 2025,
    imageUrl: '/src/assets/photos/portfolio website.avif',
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
    id: 'InsightEdge',
    title: 'InsightEdge',
    subtitle: 'Sentiment analysis application using RoBERTA-based transformer for business insights.',
    year: 2025,
    imageUrl: '/src/assets/photos/InsightEdge.jpg',
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
    year: 2025,
    imageUrl: '/src/assets/photos/minneanalytics.jpg',
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
    title: 'China Bridge',
    subtitle: 'International participant demonstrating cross-cultural communication and Chinese language proficiency.',
    year: 2024,
    imageUrl: '/src/assets/photos/China bridge competition.webp',
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
    title: 'McKinsey & Co',
    subtitle: 'Finalist applying strategic consulting frameworks to solve complex business challenges.',
    year: 2025,
    imageUrl: '/src/assets/photos/Mckinsey.webp',
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
    title: 'Develop for Good',
    subtitle: 'Framer-based website redesign for nonprofit organization supporting social impact.',
    year: 2025,
    imageUrl: '/src/assets/photos/Develop for good.jpg',
    type: 'Team project',
    description: 'Volunteered with Develop for Good to redesign their website using Framer, focusing on improving user experience and visual appeal for a nonprofit organization dedicated to connecting skilled volunteers with social impact projects. The redesign aimed to better communicate their mission and increase volunteer engagement.',
    technologies: ['Framer', 'UI/UX Design', 'Web Design', 'Nonprofit Sector', 'User Experience'],
    challenges: 'The main challenge was understanding the unique needs of a nonprofit organization while creating a design that would effectively communicate their mission and encourage volunteer sign-ups. Balancing visual appeal with clear calls-to-action required careful consideration of user journey and nonprofit best practices.',
    solution: 'Utilized Framer\'s advanced design and prototyping capabilities to create an engaging, user-friendly website. Focused on clear messaging, intuitive navigation, and compelling visuals that highlight the impact of volunteer work. Implemented responsive design principles to ensure accessibility across all devices.',
    outcome: 'Successfully delivered a modern, engaging website that better represents Develop for Good\'s mission and improves the volunteer onboarding experience. The redesign contributes to the organization\'s ability to attract and retain volunteers for social impact projects.',
    links: {}
  },
  {
    id: 'aurora-center',
    title: 'The Aurora Center',
    subtitle: 'Supporting advocacy efforts for survivors of sexual violence through volunteer work.',
    year: 2024,
    imageUrl: '/src/assets/photos/aurora-volunteers-01.jpg',
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
    imageUrl: '/src/assets/photos/nami.jpg',
    type: 'Volunteer',
    description: 'Volunteered with the National Alliance on Mental Illness (NAMI), contributing to mental health advocacy and support services. Participated in various programs aimed at reducing stigma, providing education, and supporting individuals and families affected by mental health conditions.',
    technologies: ['Mental Health Advocacy', 'Community Education', 'Support Groups', 'Public Speaking', 'Program Coordination'],
    challenges: 'Mental health advocacy requires sensitivity, knowledge of mental health issues, and the ability to communicate effectively with diverse audiences while addressing stigma and misconceptions about mental illness.',
    solution: 'Participated in NAMI training programs to develop understanding of mental health conditions and effective advocacy strategies. Contributed to educational programs, support group facilitation, and community outreach efforts focused on reducing stigma and promoting mental health awareness.',
    outcome: 'Successfully contributed to NAMI\'s mission of improving the lives of individuals and families affected by mental illness. Helped promote mental health awareness and reduce stigma through various volunteer activities and community engagement initiatives.',
    links: {}
  }
];

// Helper function to get basic project items (for components that don't need full details)
export const getProjectItems = (): ProjectItem[] => {
  return projectsData.map(({ id, title, subtitle, year, imageUrl, type }) => ({
    id,
    title,
    subtitle,
    year,
    imageUrl,
    type
  }));
};

// Helper function to get project by ID
export const getProjectById = (id: string): ProjectDetail | undefined => {
  return projectsData.find(project => project.id === id);
};

// Helper function to get featured projects for hero section
export const getFeaturedProjects = (): ProjectItem[] => {
  // Return specific projects for the hero section in specified order
  const featuredIds = ['mckinsey-case', 'chatTrackr', 'develop-for-good', 'InsightEdge', 'china-bridge'];
  const allProjects = getProjectItems();
  return featuredIds.map(id => allProjects.find(project => project.id === id)).filter(Boolean) as ProjectItem[];
};

export const typeOptions = ['Hackathon', 'Team project', 'Personal project', 'Research', 'Case competition', 'Volunteer'];
