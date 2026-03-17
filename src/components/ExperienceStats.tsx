import { useNavigate } from 'react-router-dom';

const yearGroups = [
  {
    year: '2025',
    entries: [
      {
        company: 'SmartPal AI Inc',
        role: 'Software Engineering Intern',
        description: 'Building AI-powered tools and data pipelines to support research initiatives, contributing to LLM integrations and feature development for a startup product.',
      },
      {
        company: 'Elire LLC',
        role: 'Cloud Intern',
        description: 'Configuring and implementing Microsoft Dynamics 365 solutions for enterprise clients, supporting ERP module setup and functional design across cloud environments.',
      },
    ],
  },
  {
    year: '2024',
    entries: [
      {
        company: 'Academic Support Resource',
        role: 'Application & Workflow Developer',
        description: 'Developed internal applications and automated administrative workflows to improve operational efficiency across academic support departments.',
      },
      {
        company: 'Sparkling and Sake',
        role: 'Data Analyst Intern',
        description: 'Analyzed sales and inventory data to surface business insights, supporting decision-making for a boutique beverage brand through dashboards and reports.',
      },
    ],
  },
  {
    year: '2023',
    entries: [
      {
        company: 'Carlson School of Management',
        role: 'Teaching Assistant',
        description: 'Supported undergraduate instruction in business and analytics courses, holding office hours and guiding students through coursework and applied projects.',
      },
    ],
  },
];

const ExperienceStats = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-12 pb-16">
      <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-10">Where I've worked.</h2>

      <div className="space-y-10">
        {yearGroups.map((g) => (
          <div key={g.year} className="grid grid-cols-[3.5rem_1fr] sm:grid-cols-[6rem_1fr] gap-x-4 sm:gap-x-10 items-start">
            <span className="font-serif text-3xl sm:text-5xl text-gray-200 leading-none tabular-nums select-none">
              {g.year}
            </span>
            <div className="divide-y divide-gray-100">
              {g.entries.map((e) => (
                <div
                  key={e.company}
                  onClick={() => navigate('/work')}
                  className="group cursor-pointer py-4 first:pt-1"
                >
                  <span className="text-xs font-medium text-gray-400 tracking-wide">{e.company}</span>
                  <p className="text-sm font-medium text-gray-600 group-hover:text-[#BE3D2A] transition-colors mt-0.5 mb-1.5">
                    {e.role}
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed">{e.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceStats;
