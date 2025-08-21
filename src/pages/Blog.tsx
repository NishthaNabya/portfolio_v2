import React from 'react';
import { motion } from 'framer-motion';

interface LeadershipRole {
  id: string;
  title: string;
  organization: string;
  period: string;
  duration: string;
  description: string;
  impact: string[];
  type: 'academic' | 'professional' | 'community' | 'volunteer';
  logo: string;
  companyColor: string;
}

const leadershipRoles: LeadershipRole[] = [
  {
    id: '1',
    title: 'Student Body President',
    organization: 'University of Minnesota',
    period: 'Aug 2023 - May 2024',
    duration: '9 months',
    type: 'academic',
    description: 'Led student government initiatives, represented 45,000+ students to university administration, and drove policy changes that enhanced campus life.',
    impact: ['45,000 students represented', '12 policy changes implemented', '85% approval rating'],
    logo: '🎓',
    companyColor: '#3B82F6'
  },
  {
    id: '2',
    title: 'Analytics Team Lead',
    organization: 'Data Science Club',
    period: 'Sep 2022 - May 2023',
    duration: '8 months',
    type: 'academic',
    description: 'Managed cross-functional teams and drove data-driven decision making across club operations while mentoring new members.',
    impact: ['200% membership growth', '15 workshops organized', '5 industry partnerships'],
    logo: '📊',
    companyColor: '#10B981'
  },
  {
    id: '3',
    title: 'Project Director',
    organization: 'Tech for Good Initiative',
    period: 'Jan 2021 - Dec 2022',
    duration: '2 years',
    type: 'community',
    description: 'Coordinated volunteer teams to deliver technology solutions for local nonprofit organizations, managing budgets and timelines.',
    impact: ['8 nonprofits served', '50+ volunteers managed', '$25K value delivered'],
    logo: '🤝',
    companyColor: '#8B5CF6'
  },
  {
    id: '4',
    title: 'Peer Mentor',
    organization: 'Women in Data',
    period: 'Sep 2021 - Present',
    duration: '2 years 4 months',
    type: 'volunteer',
    description: 'Mentoring underrepresented students in data science and analytics career development through one-on-one coaching.',
    impact: ['25 students mentored', '90% job placement rate', '3 scholarship recipients'],
    logo: '🌟',
    companyColor: '#F59E0B'
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case 'academic': return 'bg-blue-50 text-blue-700 border-blue-200';
    case 'professional': return 'bg-green-50 text-green-700 border-green-200';
    case 'community': return 'bg-purple-50 text-purple-700 border-purple-200';
    case 'volunteer': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
    default: return 'bg-gray-50 text-gray-700 border-gray-200';
  }
};

const Leadership: React.FC = () => {
  return (
    <section className="pt-16 pb-8">
      <div className="mb-12">
      <h1 className="text-4xl font-bold text-gray-900">Leadership</h1>
        <div className="w-24 h-1 bg-accent mt-2 mb-6" />
        <p className="text-gray-600 max-w-2xl">
          Leading with purpose, driving change through collaboration, and empowering others to achieve their potential across academic and professional environments.
        </p>
      </div>

      {/* Leadership Philosophy */}
      <div className="mb-16 bg-gray-50 rounded-lg p-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Philosophy</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            "Great leadership isn't about having all the answers—it's about asking the right questions, 
            empowering others to find solutions, and creating an environment where everyone can contribute 
            their best work toward a shared vision."
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="px-3 py-1 bg-white rounded-full text-gray-700 font-medium border border-gray-200">Collaborative</span>
            <span className="px-3 py-1 bg-white rounded-full text-gray-700 font-medium border border-gray-200">Data-Driven</span>
            <span className="px-3 py-1 bg-white rounded-full text-gray-700 font-medium border border-gray-200">Inclusive</span>
            <span className="px-3 py-1 bg-white rounded-full text-gray-700 font-medium border border-gray-200">Growth-Oriented</span>
          </div>
        </div>
      </div>

      {/* Leadership Roles */}
      <div className="space-y-8">
        {leadershipRoles.map((role) => (
          <motion.div
            key={role.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3 }}
            className="group"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-8 pb-8 border-b border-gray-200 last:border-b-0">
              
              {/* Left Column - Logo, Period & Type */}
              <div className="md:w-56 flex-shrink-0">
                {/* Organization Logo */}
                <div className="flex items-start gap-4 mb-6">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-sm"
                    style={{ backgroundColor: role.companyColor }}
                  >
                    {role.logo}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-900 whitespace-nowrap">{role.period}</div>
                    <div className="text-xs text-gray-500 mt-1">{role.duration}</div>
                  </div>
                </div>
                <div className={`inline-block px-3 py-1 rounded text-xs font-medium ${getTypeColor(role.type)}`}>
                  {role.type.charAt(0).toUpperCase() + role.type.slice(1)}
                </div>
              </div>

              {/* Right Column - Main Content */}
              <div className="flex-1">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-accent transition-colors mb-2">
                    {role.title}
                  </h3>
                  <div className="text-base font-semibold text-accent">
                    {role.organization}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">{role.description}</p>

                {/* Impact Metrics */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Impact</h4>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {role.impact.map((metric, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                        <div className="text-sm font-bold text-gray-900">{metric.split(' ')[0]}</div>
                        <div className="text-xs text-gray-600">{metric.split(' ').slice(1).join(' ')}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mt-12 pt-12 border-t border-gray-200"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-start gap-4 flex-1">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Want to collaborate on something meaningful?</h3>
              <p className="text-gray-600 leading-relaxed">
                I'm passionate about projects that create positive impact and drive meaningful change in communities.
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
              Let's Connect
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Leadership;
