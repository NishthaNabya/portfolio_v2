import React from 'react';

interface LeadershipRole {
  id: string;
  title: string;
  organization: string;
  period: string;
  impact: string;
  description: string;
  icon: string;
  color: string;
  metrics: string[];
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  year: string;
}

const leadershipRoles: LeadershipRole[] = [
  {
    id: '1',
    title: 'Student Body President',
    organization: 'University of Minnesota',
    period: '2023 - 2024',
    impact: '45K+ students',
    description: 'Led student government initiatives and represented student interests to university administration.',
    icon: '🎓',
    color: '#3B82F6',
    metrics: ['45,000 students served', '12 policy changes', '85% approval rating']
  },
  {
    id: '2',
    title: 'Team Lead',
    organization: 'Analytics Club',
    period: '2022 - 2023',
    impact: '200+ members',
    description: 'Managed cross-functional teams and drove data-driven decision making across club operations.',
    icon: '📊',
    color: '#10B981',
    metrics: ['200% membership growth', '15 workshops organized', '5 industry partnerships']
  },
  {
    id: '3',
    title: 'Project Manager',
    organization: 'Tech for Good Initiative',
    period: '2021 - 2022',
    impact: '8 nonprofits',
    description: 'Coordinated volunteer teams to deliver technology solutions for local nonprofit organizations.',
    icon: '🤝',
    color: '#8B5CF6',
    metrics: ['8 nonprofits helped', '50+ volunteers managed', '$25K value delivered']
  },
  {
    id: '4',
    title: 'Mentor',
    organization: 'Women in Data',
    period: '2021 - Present',
    impact: '25+ mentees',
    description: 'Mentoring underrepresented students in data science and analytics career development.',
    icon: '🌟',
    color: '#F59E0B',
    metrics: ['25 students mentored', '90% job placement rate', '3 scholarship recipients']
  }
];

const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Outstanding Leadership Award',
    description: 'Recognized for exceptional leadership in student government',
    icon: '🏆',
    year: '2024'
  },
  {
    id: '2',
    title: 'Innovation in Analytics',
    description: 'Led breakthrough project in predictive modeling',
    icon: '💡',
    year: '2023'
  },
  {
    id: '3',
    title: 'Community Impact Champion',
    description: 'Volunteer work benefiting 1000+ community members',
    icon: '❤️',
    year: '2023'
  },
  {
    id: '4',
    title: 'Dean\'s List',
    description: 'Academic excellence for 6 consecutive semesters',
    icon: '📚',
    year: '2022-2024'
  }
];

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

      {/* Leadership Philosophy - Moved to Top */}
      <div className="mb-16 bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg p-8 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="text-4xl mb-4">💭</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Philosophy</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            "Great leadership isn't about having all the answers—it's about asking the right questions, 
            empowering others to find solutions, and creating an environment where everyone can contribute 
            their best work toward a shared vision."
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-3 py-1 bg-white rounded-full text-gray-700 font-medium">Collaborative</span>
            <span className="px-3 py-1 bg-white rounded-full text-gray-700 font-medium">Data-Driven</span>
            <span className="px-3 py-1 bg-white rounded-full text-gray-700 font-medium">Inclusive</span>
            <span className="px-3 py-1 bg-white rounded-full text-gray-700 font-medium">Growth-Oriented</span>
          </div>
        </div>
      </div>

      {/* Leadership Impact Timeline */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Leadership Journey</h2>
        <div className="space-y-8">
          {leadershipRoles.map((role, index) => (
            <div key={role.id} className="flex gap-6">
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl border-4 border-white shadow-lg"
                  style={{ backgroundColor: role.color }}
                >
                  <span className="filter brightness-0 invert">{role.icon}</span>
                </div>
                {index < leadershipRoles.length - 1 && (
                  <div className="w-1 h-12 bg-gray-200 mt-4" />
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1 pb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{role.title}</h3>
                      <p className="text-accent font-semibold text-lg">{role.organization}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">{role.period}</div>
                      <div className="text-xs text-gray-500">Impact: {role.impact}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">{role.description}</p>
                  
                  <div className="grid sm:grid-cols-3 gap-4">
                    {role.metrics.map((metric, metricIndex) => (
                      <div 
                        key={metricIndex} 
                        className="text-center p-3 rounded-lg"
                        style={{ backgroundColor: `${role.color}10` }}
                      >
                        <div className="text-sm font-bold text-gray-900">{metric.split(' ')[0]}</div>
                        <div className="text-xs text-gray-600">{metric.split(' ').slice(1).join(' ')}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Recognition & Achievements</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-3xl mb-3">{achievement.icon}</div>
              <div className="text-xs font-medium text-accent mb-1">{achievement.year}</div>
              <h3 className="text-sm font-bold text-gray-900 mb-2">{achievement.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
};

export default Leadership;
