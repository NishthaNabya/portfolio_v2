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

export const projectsData: ProjectDetail[] = [
  {
    id: 'InsightEdge',
    title: 'InsightEdge',
    subtitle: 'Sentiment analysis application using RoBERTA-based transformer for business insights.',
    year: 2025,
    imageUrl: '/photos/InsightEdge.jpg',
    type: 'Software Engineering',
    description: 'Developed a sophisticated sentiment analysis application leveraging a RoBERTA-based transformer model to classify text data with high accuracy for business insights. This project demonstrates advanced natural language processing capabilities and machine learning implementation.',
    technologies: ['Python', 'Transformers', 'Pandas'],
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
    subtitle: 'Serendipity Award (Top 6%) — RoBERTa-based sentiment risk feature with Random Forest ensemble.',
    year: 2025,
    imageUrl: '/photos/minneanalytics.jpg',
    type: 'Hackathon',
    description: 'Participated in the MinneAnalytics hackathon with 70+ teams, securing a prestigious Serendipity Award by ranking in the top 6%. The project focused on developing advanced machine learning solutions combining natural language processing with ensemble methods to create robust predictive models.',
    technologies: ['Machine Learning', 'NLP', 'Random Forest'],
    challenges: 'The primary challenge was developing a sentiment analysis model that could accurately assess risk factors while competing against 70+ highly skilled teams. Integrating advanced NLP techniques with traditional machine learning approaches required careful feature engineering and model optimization.',
    solution: 'Engineered a sophisticated RoBERTa-based sentiment risk feature that captured nuanced emotional indicators in text data. This was then integrated into a Random Forest ensemble model, combining the power of transformer-based NLP with robust tree-based learning.',
    outcome: 'Successfully outperformed 94% of competing teams, earning recognition with the Serendipity Award.',
    links: {}
  },
  {
    id: 'mckinsey-case',
    title: 'McKinsey & Co',
    subtitle: 'Finalist applying strategic consulting frameworks to solve complex business challenges.',
    year: 2025,
    imageUrl: '/photos/Mckinsey.webp',
    type: 'Hackathon',
    description: 'Participated as a finalist in McKinsey\'s prestigious case competition, applying strategic consulting frameworks to solve complex business challenges.',
    technologies: ['Business Analysis', 'Strategic Frameworks'],
    challenges: 'Analyzing complex business scenarios under time pressure while competing with top university teams.',
    solution: 'Applied structured consulting methodologies including problem decomposition, hypothesis-driven analysis, and data-driven insights to tackle the business case.',
    outcome: 'Achieved finalist status in the highly competitive McKinsey case competition, demonstrating strong analytical thinking and strategic problem-solving capabilities.',
    links: {}
  },
  {
    id: 'develop-for-good',
    title: 'Develop for Good',
    subtitle: 'Framer-based website redesign for nonprofit organization supporting social impact.',
    year: 2025,
    imageUrl: '/photos/Develop for good.jpg',
    type: 'Software Engineering',
    description: 'Volunteered with Develop for Good to redesign their website using Framer, focusing on improving user experience and visual appeal for a nonprofit organization dedicated to connecting skilled volunteers with social impact projects.',
    technologies: ['Framer', 'Frontend', 'React'],
    challenges: 'Understanding the unique needs of a nonprofit organization while creating a design that would effectively communicate their mission and encourage volunteer sign-ups.',
    solution: 'Utilized Framer\'s advanced design and prototyping capabilities to create an engaging, user-friendly website with clear messaging and compelling visuals.',
    outcome: 'Successfully delivered a modern, engaging website that better represents Develop for Good\'s mission and improves the volunteer onboarding experience.',
    links: {}
  },
  {
    id: 'render-mcp',
    title: 'Render',
    subtitle: 'Added trigger_deploy tool to the official MCP server, enabling programmatic deploys via Claude and other AI agents. PR #14 open.',
    year: 2025,
    imageUrl: '',
    type: 'Open Source',
    description: 'Contributed to Render\'s official MCP (Model Context Protocol) server written in Go. Added the trigger_deploy tool, enabling AI agents like Claude to programmatically trigger deployments on Render\'s cloud platform. Render raised a $100M Series C.',
    technologies: ['Go', 'MCP', 'REST APIs', 'Cloud Infrastructure'],
    challenges: 'Understanding the MCP server architecture and Render\'s deployment API to implement a reliable trigger_deploy tool that fits the existing tooling patterns.',
    solution: 'Implemented the trigger_deploy tool in Go, integrating with Render\'s deployment REST API and following the project\'s existing conventions for tool definitions and error handling.',
    outcome: 'PR #14 open — adds programmatic deploy triggering to Render\'s MCP server, making it accessible to AI agents and automation workflows.',
    links: { github: 'https://github.com/render-oss/render-mcp-server/pull/14' }
  },
  {
    id: 'braintrust-autoevals',
    title: 'Braintrust',
    subtitle: 'Fixed a ContextPrecision scoring bug in the autoevals Python library used for LLM evaluation. PR #178 open.',
    year: 2025,
    imageUrl: '',
    type: 'Open Source',
    description: 'Contributed to Braintrust\'s autoevals library, a widely-used Python package for evaluating LLM outputs. Fixed a bug in the ContextPrecision scorer that produced incorrect precision scores under certain input conditions. Braintrust raised a $121M Series B.',
    technologies: ['Python', 'LLM Evaluation', 'NLP'],
    challenges: 'Reproducing and isolating the ContextPrecision bug across edge cases while ensuring the fix didn\'t break existing evaluation behavior.',
    solution: 'Identified the root cause in the precision calculation logic, implemented a fix, and added test coverage to prevent regressions.',
    outcome: 'PR #178 open — corrects ContextPrecision scoring in autoevals, improving reliability of LLM evaluation pipelines built on Braintrust.',
    links: { github: 'https://github.com/braintrustdata/autoevals/pull/178' }
  },
];

export const getProjectItems = (): ProjectItem[] => {
  return projectsData.map(({ id, title, subtitle, year, imageUrl, type }) => ({
    id, title, subtitle, year, imageUrl, type
  }));
};

export const getProjectById = (id: string): ProjectDetail | undefined => {
  return projectsData.find(project => project.id === id);
};

export const getFeaturedProjects = (): ProjectItem[] => {
  const featuredIds = ['render-mcp', 'develop-for-good', 'minneanalytics'];
  const allProjects = getProjectItems();
  return featuredIds.map(id => allProjects.find(p => p.id === id)).filter(Boolean) as ProjectItem[];
};

export const typeOptions = ['Data Engineering', 'Software Engineering', 'Hackathon', 'Open Source'];
