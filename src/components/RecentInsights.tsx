const ImpactMetrics = () => {
  const metrics = [
    {
      id: 'jobs',
      number: '15+',
      label: 'Jobs in Colleges',
      description: 'Leadership roles across campus organizations',
      icon: '🎓',
      color: 'from-blue-50 to-blue-100'
    },
    {
      id: 'internships',
      number: '8',
      label: 'Internships',
      description: 'Diverse experiences across industries',
      icon: '💼',
      color: 'from-green-50 to-green-100'
    },
    {
      id: 'projects',
      number: '25+',
      label: 'Projects',
      description: 'Analytics and design thinking solutions',
      icon: '🚀',
      color: 'from-purple-50 to-purple-100'
    },
    {
      id: 'competitions',
      number: '12',
      label: 'Competitions',
      description: 'Data science and business case challenges',
      icon: '🏆',
      color: 'from-yellow-50 to-yellow-100'
    }
  ];

  return (
    <section className="pt-16 px-4 bg-white">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Impact Metrics</h2>
          <div className="w-24 h-1 bg-accent mt-2" />
        </div>
        <span className="text-accent text-sm font-medium">& counting...</span>
      </div>
      
      <div className="mt-8 border-l-2 border-[#BE3D2A] pl-6">
        <p className="text-gray-600 mb-6 max-w-2xl">
          Numbers that reflect my journey of curiosity, learning, and making meaningful impact across different domains.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <div 
              key={metric.id}
              className={`group relative p-6 rounded-xl bg-gradient-to-br ${metric.color} border border-gray-200 hover:border-[#BE3D2A] hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300`}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-sm mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl" role="img" aria-hidden="true">
                  {metric.icon}
                </span>
              </div>
              
              {/* Number */}
              <div className="mb-2">
                <span className="text-3xl font-bold text-gray-900 group-hover:text-[#BE3D2A] transition-colors">
                  {metric.number}
                </span>
              </div>
              
              {/* Label */}
              <h3 className="text-sm font-semibold text-gray-800 mb-2 leading-tight">
                {metric.label}
              </h3>
              
              {/* Description */}
              <p className="text-xs text-gray-600 leading-relaxed">
                {metric.description}
              </p>
              
              {/* Subtle accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#BE3D2A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
