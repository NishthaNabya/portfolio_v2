const TechStackHero = () => {
  // Core tech stack - curated selection
  const coreStack = [
    { name: 'Python', emoji: '🐍' },
    { name: 'SQL', emoji: '🗄️' },
    { name: 'R Studios', emoji: '📊' },
    { name: 'AWS', emoji: '☁️' },
    { name: 'Oracle Fusion Cloud', emoji: '🏢' },
    { name: 'Git', emoji: '🌿' },
    { name: 'Power BI', emoji: '📈' },
    { name: 'Machine Learning', emoji: '🤖' }
  ];

  return (
    <section className="pt-16 px-4 bg-white">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Current Tech Stack</h2>
          <div className="w-24 h-1 bg-accent mt-2" />
        </div>
      </div>
      
      <div className="mt-8 border-l-2 border-[#BE3D2A] pl-6">
        <p className="text-gray-600 mb-6 max-w-2xl">
          The tools and technologies I'm currently working with to build meaningful solutions and bring ideas to life.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {coreStack.map((tech) => (
            <div 
              key={tech.name}
              className="group flex items-center gap-3 px-4 py-3 rounded-lg bg-white border border-gray-200 hover:border-[#BE3D2A] hover:shadow-sm transition-all duration-200"
            >
              <span className="text-xl group-hover:scale-110 transition-transform" role="img" aria-hidden="true">
                {tech.emoji}
              </span>
              <span className="text-sm font-medium text-gray-700 group-hover:text-[#BE3D2A]">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackHero;
