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
  achievements: string[];
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
    impact: ['45,000', '12', '85%'],
    achievements: ['students represented', 'policy changes implemented', 'approval rating'],
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
    impact: ['200%', '15', '5'],
    achievements: ['membership growth', 'workshops organized', 'industry partnerships'],
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
    impact: ['8', '50+', '$25K'],
    achievements: ['nonprofits served', 'volunteers managed', 'value delivered'],
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
    impact: ['25', '90%', '3'],
    achievements: ['students mentored', 'job placement rate', 'scholarship recipients'],
    logo: '🌟',
    companyColor: '#F59E0B'
  }
];

  // const getTypeColor = (type: string) => {
  //   switch (type) {
  //     case 'academic': return 'bg-blue-50 text-blue-700 border-blue-200';
  //     case 'professional': return 'bg-green-50 text-green-700 border-green-200';
  //     case 'community': return 'bg-purple-50 text-purple-700 border-purple-200';
  //     case 'volunteer': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
  //     default: return 'bg-gray-50 text-gray-700 border-gray-200';
  //   }
  // };

const Leadership: React.FC = () => {
  return (
    <section className="pt-16 pb-8">
      {/* Hero Section with Quote */}
      <motion.div 
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-20 text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Leadership</h1>
        <div className="w-24 h-1 bg-accent mx-auto mb-8" />
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-2xl font-medium text-gray-800 leading-relaxed mb-6">
            "Leadership is not about being in charge. It's about taking care of those in your charge and empowering them to achieve more than they thought possible."
          </blockquote>
          <div className="text-gray-600">— My Leadership Philosophy</div>
        </div>
      </motion.div>

      {/* Leadership Journey - Timeline Style */}
      <div className="mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-gray-900 mb-12 text-center"
        >
          Leadership Journey
        </motion.h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gray-200"></div>
          
          <div className="space-y-16">
            {leadershipRoles.map((role, index) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl shadow-lg"
                        style={{ backgroundColor: role.companyColor }}
                      >
                        {role.logo}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{role.title}</h3>
                        <div className="text-accent font-semibold">{role.organization}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">{role.description}</p>
                    
                    {/* Impact Grid */}
                    <div className="grid grid-cols-3 gap-3">
                      {role.impact.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-accent">{metric}</div>
                          <div className="text-xs text-gray-600 mt-1">{role.achievements[metricIndex]}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="relative z-10">
                  <div 
                    className="w-6 h-6 rounded-full border-4 border-white shadow-lg"
                    style={{ backgroundColor: role.companyColor }}
                  ></div>
                </div>
                
                {/* Date Badge */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pl-8' : 'pr-8'} flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className="bg-accent/10 rounded-full px-4 py-2">
                    <div className="text-sm font-semibold text-accent">{role.period}</div>
                    <div className="text-xs text-gray-600">{role.duration}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Principles - Different Layout */}
      <motion.div 
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-20"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-12 text-center">Leadership Principles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
              <div className="text-3xl">🎯</div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Vision-Driven</h3>
            <p className="text-gray-600 leading-relaxed">
              Create clear, inspiring visions that align teams and drive meaningful progress toward shared goals.
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
              <div className="text-3xl">🤝</div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">People-First</h3>
            <p className="text-gray-600 leading-relaxed">
              Build trust, foster growth, and create environments where every team member can thrive and contribute their best.
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
              <div className="text-3xl">📊</div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Data-Informed</h3>
            <p className="text-gray-600 leading-relaxed">
              Make decisions based on insights and evidence while staying adaptable to changing circumstances.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Call to Action - Different Style */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-center py-16 bg-gray-50 rounded-2xl"
      >
        <h3 className="text-3xl font-bold text-gray-900 mb-6">Let's Build Something Great Together</h3>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          I'm always looking for opportunities to lead meaningful projects and collaborate with passionate teams. 
          Ready to make an impact?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="mailto:hello@example.com" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-lg font-semibold transition-colors text-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Start a Conversation
          </a>
          <div className="text-gray-400">or</div>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 hover:border-accent hover:text-accent rounded-lg font-semibold transition-colors text-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.563M15 6.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            View My Work
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Leadership;
