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
    company: 'Tech Innovation Corp',
    position: 'Senior Business Analyst',
    location: 'Minneapolis, MN',
    period: 'Jan 2023 - Present',
    duration: '1 year 11 months',
    type: 'full-time',
    description: 'Leading cross-functional analytics initiatives and driving data-informed decision making across product and business teams.',
    achievements: [
      'Designed and implemented analytics framework serving 50K+ users daily',
      'Reduced customer churn by 25% through predictive modeling and targeted interventions',
      'Led stakeholder alignment sessions resulting in 40% faster project delivery',
      'Built automated reporting dashboards saving 20 hours/week across teams'
    ],
    technologies: ['Python', 'SQL', 'Tableau', 'R', 'AWS', 'Google Analytics'],
    companyUrl: 'https://techinnovationcorp.com',
    logo: 'TI',
    companyColor: '#3B82F6'
  },
  {
    id: '2',
    company: 'Digital Solutions Ltd',
    position: 'Data Analyst',
    location: 'Remote',
    period: 'Jun 2021 - Dec 2022',
    duration: '1 year 7 months',
    type: 'full-time',
    description: 'Transformed raw data into actionable insights for business strategy and product development decisions.',
    achievements: [
      'Analyzed user behavior patterns leading to 30% increase in engagement',
      'Created comprehensive KPI tracking system for executive leadership',
      'Collaborated with product teams to A/B test 15+ feature releases',
      'Developed customer segmentation model improving marketing ROI by 35%'
    ],
    technologies: ['SQL', 'Python', 'Power BI', 'Excel', 'Google Cloud', 'Looker'],
    companyUrl: 'https://digitalsolutions.com',
    logo: 'DS',
    companyColor: '#10B981'
  },
  {
    id: '3',
    company: 'StartupXYZ',
    position: 'Business Analytics Intern',
    location: 'New York, NY',
    period: 'Jan 2021 - May 2021',
    duration: '5 months',
    type: 'internship',
    description: 'Supported data-driven decision making in a fast-paced startup environment while learning agile methodologies.',
    achievements: [
      'Built customer journey analytics tracking 10+ touchpoints',
      'Presented weekly insights to C-suite leadership team',
      'Automated manual reporting processes reducing effort by 60%',
      'Contributed to product roadmap through user research and data analysis'
    ],
    technologies: ['Excel', 'SQL', 'Tableau', 'Python', 'Google Analytics', 'Mixpanel'],
    companyUrl: 'https://startupxyz.com',
    logo: 'XYZ',
    companyColor: '#8B5CF6'
  },
  {
    id: '4',
    company: 'DataTech Solutions',
    position: 'Junior Data Analyst',
    period: 'Mar 2020 - Aug 2020',
    duration: '6 months',
    type: 'internship',
    description: 'Gained foundational experience in data analysis and business intelligence while supporting senior analysts.',
    achievements: [
      'Processed and cleaned datasets with 95% accuracy',
      'Created 10+ automated reports for daily operations',
      'Supported A/B testing for 3 major product features',
      'Learned advanced Excel and SQL fundamentals'
    ],
    technologies: ['Excel', 'SQL', 'Python', 'Tableau', 'Power BI'],
    logo: 'DT',
    companyColor: '#06B6D4'
  },
  {
    id: '5',
    company: 'University Research Lab',
    position: 'Research Assistant',
    period: 'Sep 2019 - Feb 2020',
    duration: '6 months',
    type: 'contract',
    description: 'Supported academic research projects focused on data analysis and statistical modeling.',
    achievements: [
      'Analyzed survey data from 1000+ respondents',
      'Contributed to 2 published research papers',
      'Developed statistical models using R and Python',
      'Presented findings to faculty and graduate students'
    ],
    technologies: ['R', 'Python', 'SPSS', 'Excel', 'LaTeX'],
    logo: '🎓',
    companyColor: '#7C3AED'
  },
  {
    id: '6',
    company: 'Freelance Consulting',
    position: 'Analytics Consultant',
    period: 'Jun 2019 - Aug 2019',
    duration: '3 months',
    type: 'freelance',
    description: 'Provided analytics consulting for small businesses to optimize operations.',
    achievements: [
      'Delivered insights for 3 small businesses',
      'Improved operational efficiency by 30% average',
      'Created custom Excel dashboards',
      'Built client relationships and repeat business'
    ],
    technologies: ['Excel', 'Google Sheets', 'Power BI', 'SQL'],
    logo: '💼',
    companyColor: '#F59E0B'
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
    <section className="pt-16 pb-8">
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
