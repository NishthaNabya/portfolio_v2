import React from 'react';

interface WorkExperience {
  id: string;
  company: string;
  position: string;
  period: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: 'full-time' | 'internship' | 'freelance' | 'contract';
  companyUrl?: string;
  logo: string;
  companyColor: string;
}

const workExperiences: WorkExperience[] = [
  {
    id: '1',
    company: 'Elire LLC',
    position: 'Functional Cloud Consulting Intern',
    location: 'Minneapolis, Minnesota',
    period: 'June 2025 - Present',
    duration: '6+ months',
    type: 'internship',
    description: 'Acting as a liaison managing multiple client projects simultaneously, delivering streamlined solutions and automation tools to enhance operational efficiency.',
    achievements: [
      'Managed 3 client projects simultaneously, delivering streamlined reporting dashboard that cut weekly reporting time from ~16 to 9 hours',
      'Designed centralized scorecard to track health and status of 12+ Oracle Cloud environments, providing leadership with real-time visibility',
      'Built Excel-based automation tools using VBA macros to streamline manual tracking and reporting of client-facing testing phases',
      'Created Environment Patch Management Dashboard using Oracle VB Studio with Redwood, saving ~4 hours per release cycle',
      'Spearheaded AI subcommittee, conducting 12 interviews with cross-functional leaders to prioritize 6 high-impact automation pilots projected to cut manual workload for ≈2 FTEs',
      'Authored NIST-aligned AI governance playbook, securing Compliance & IT Security approval and reducing policy development time by 50%'
    ],
    technologies: ['Oracle Cloud', 'VBA', 'Excel', 'Oracle VB Studio', 'Redwood', 'AI Governance', 'NIST Framework'],
    logo: 'EL',
    companyColor: '#3B82F6'
  },
  {
    id: '2',
    company: 'SmartPal AI Inc',
    position: 'Research Assistant',
    location: 'Minneapolis, Minnesota',
    period: 'February 2025 - Present',
    duration: '10+ months',
    type: 'contract',
    description: 'Working on GenAI chatbot for Canvas LMS, focusing on cost optimization, data infrastructure, and business development through research presentations.',
    achievements: [
      'Automated weekly cost reports for GenAI chatbot by consolidating spend data across OpenAI, Pinecone, and AWS, cutting manual prep time from 5 to 1 hour per week (-80%)',
      'Designed unified data storage solution (AWS S3, Google Cloud Storage, and local servers) speeding up data processing by 60%',
      'Doubled team capacity for analytics projects through improved data infrastructure',
      'Pitched AI research at industry conferences, generating 5+ qualified leads for product trials in colleges/high schools across 3 states'
    ],
    technologies: ['AWS S3', 'Python', 'SQL', 'Machine Learning', 'AI', 'RAG', 'OpenAI', 'Pinecone', 'Google Cloud'],
    logo: 'SP',
    companyColor: '#10B981'
  },
  {
    id: '3',
    company: 'Academic Support Resource',
    position: 'Application and Workflow Development Assistant',
    location: 'Minneapolis, Minnesota',
    period: 'April 2024 - Present',
    duration: '1 year 8+ months',
    type: 'contract',
    description: 'Part-time role developing JavaScript automation scripts and facilitating cross-functional workshops to optimize workflows and reduce manual effort.',
    achievements: [
      'Developed JavaScript automation scripts for active form submissions, reducing manual data-processing effort from 12 to 5 hours per week (-58%)',
      'Facilitated multiple cross-functional workshops with IT, QA, and Operations to develop end-to-end process documentation',
      'Cut average project rework rate, saving ~30 hours per project through improved documentation',
      'Implemented end-to-end form data pipelines with automated compliance and IT-governance checks, eliminating 5 hrs/week of manual reviews',
      'Ensured regulatory adherence before ingestion into PeopleSoft ERP through automated validation'
    ],
    technologies: ['JavaScript', 'PeopleSoft ERP', 'Process Documentation', 'Compliance Automation', 'Data Pipelines'],
    logo: 'AS',
    companyColor: '#8B5CF6'
  },
  {
    id: '4',
    company: 'Sparkling and Sake',
    position: 'Business Analyst Intern',
    location: 'New Delhi, India',
    period: 'May 2024 - August 2024',
    duration: '4 months',
    type: 'internship',
    description: 'Conducted SQL-driven analysis on production operations and distribution partnerships to optimize throughput and market expansion.',
    achievements: [
      'Conducted SQL-driven bottleneck analysis on 10-step production line, identifying 3 critical constraints',
      'Implemented targeted process improvements increasing throughput from 1,000 to 1,160 units/hour (≈ +15%)',
      'Unlocked capacity for an extra 150 cases/day through production optimization',
      'Evaluated 60 distribution partners, prioritized 10 candidates to expand 20% market reach and boost shipments by 1,400 cases/month',
      'Created SQL playbook for incoming interns, cutting onboarding time by 50% (from 2 weeks to 1 week)',
      'Enabled new team members to independently deliver their first dashboards two weeks faster'
    ],
    technologies: ['SQL', 'Production Analysis', 'Process Optimization', 'Distribution Strategy', 'Dashboard Development'],
    logo: 'SS',
    companyColor: '#06B6D4'
  },
  {
    id: '5',
    company: 'Carlson School of Management',
    position: 'Teaching Assistant for Problem-Solving Course',
    location: 'Minneapolis, Minnesota',
    period: 'June 2023 - Present',
    duration: '1 year 6+ months',
    type: 'contract',
    description: 'Part-time role mentoring students and junior TAs on learning outcomes, career strategy, and campus engagement while leveraging data analytics to improve student performance.',
    achievements: [
      'Mentored 180+ students and 3 junior TAs on class learning outcomes, career strategy and campus engagement through 1:1 sessions',
      'Achieved perfect 5/5 satisfaction rating across 300+ feedback surveys over two years',
      'Leveraged Canvas analytics in 350+ assignments to deliver targeted feedback',
      'Boosted average student scores from 84% to 96% through data-driven feedback approach',
      'Demonstrated consistent excellence in student support and educational impact over multiple academic years'
    ],
    technologies: ['Canvas LMS', 'Educational Analytics', 'Student Mentoring', 'Performance Analysis', 'Feedback Systems'],
    logo: 'CS',
    companyColor: '#7C3AED'
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case 'full-time': return 'bg-green-50 text-green-700 border-green-200';
    case 'internship': return 'bg-blue-50 text-blue-700 border-blue-200';
    case 'freelance': return 'bg-purple-50 text-purple-700 border-purple-200';
    case 'contract': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
    default: return 'bg-gray-50 text-gray-700 border-gray-200';
  }
};

const Work: React.FC = () => {
  return (
    <section className="pt-8 pb-8 px-4">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Work Experience</h1>
        <div className="w-24 h-1 bg-accent mt-2 mb-6" />
        <p className="text-gray-600 max-w-2xl">
          A journey through my professional growth, key achievements, and the impact I've made across different organizations and projects.
        </p>
      </div>

      {/* Experience Listings */}
      <div className="space-y-8">
        {workExperiences.map((experience) => (
          <div
            key={experience.id}
            className="group"
          >
            {/* Main Content Row */}
            <div className="flex flex-col md:flex-row md:items-start gap-8 pb-8 border-b border-gray-200 last:border-b-0">
              
              {/* Left Column - Logo, Period & Type */}
              <div className="md:w-56 flex-shrink-0">
                {/* Company Logo */}
                <div className="flex items-start gap-4 mb-6">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-sm"
                    style={{ backgroundColor: experience.companyColor }}
                  >
                    {experience.logo}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-900 whitespace-nowrap">{experience.period}</div>
                    <div className="text-xs text-gray-500 mt-1">{experience.duration}</div>
                  </div>
                </div>
                <div className={`inline-block px-3 py-1 rounded text-xs font-medium ${getTypeColor(experience.type)}`}>
                  {experience.type.charAt(0).toUpperCase() + experience.type.slice(1)}
                </div>
              </div>

              {/* Right Column - Main Content */}
              <div className="flex-1">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-accent transition-colors mb-2">
                    {experience.position}
                  </h3>
                  <div className="text-base font-semibold text-accent">
                    {experience.company}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-4 leading-relaxed">{experience.description}</p>

                {/* Technologies */}
                <div>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-accent hover:text-white transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 pt-12 border-t border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-start gap-4 flex-1">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Interested in working together?</h3>
              <p className="text-gray-600 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, or just connecting with fellow professionals.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <a 
              href="mailto:hello@example.com" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-white rounded-lg font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
