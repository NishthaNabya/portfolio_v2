import { motion } from 'framer-motion';

interface TravelTicketProps {
  visitedCount: number;
}

const continents = [
  { name: 'Asia', count: 3 },
  { name: 'Europe', count: 3 },
  { name: 'Africa', count: 1 },
  { name: 'South America', count: 1 },
  { name: 'North America', count: 0 },
  { name: 'Oceania', count: 0 }
];

const TravelTicket = ({ visitedCount }: TravelTicketProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-2xl border border-gray-200 bg-white overflow-hidden"
    >
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-wide text-gray-500">Travel Passport</div>
            <div className="mt-1 text-2xl font-extrabold text-gray-900">
              {visitedCount}
              <span className="ml-2 text-base font-semibold text-gray-700">destinations</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <div className="mt-4 text-sm text-gray-600">
          Exploring the world one destination at a time, capturing moments through photography and curiosity.
        </div>
      </div>

      {/* Travel Stats Grid */}
      <div className="p-6">
        <div className="grid grid-cols-2 gap-6">
          {/* Countries Visited */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="text-lg font-bold text-gray-900">{visitedCount}</div>
            <div className="text-xs text-gray-500">Countries</div>
          </div>

          {/* Continents Explored */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
              </svg>
            </div>
            <div className="text-lg font-bold text-gray-900">{continents.filter(c => c.count > 0).length}</div>
            <div className="text-xs text-gray-500">Continents</div>
          </div>
        </div>
      </div>

      {/* Continent Breakdown */}
      <div className="px-6 pb-6">
        <div className="text-sm font-semibold text-gray-900 mb-4">Continental Distribution</div>
        <div className="space-y-3">
          {continents.map((continent) => (
            <div key={continent.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${continent.count > 0 ? 'bg-accent' : 'bg-gray-300'}`} />
                <span className="text-sm text-gray-700">{continent.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-900">{continent.count}</span>
                <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-accent rounded-full transition-all duration-500"
                    style={{ width: `${(continent.count / Math.max(...continents.map(c => c.count))) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            <span className="text-xs text-gray-500">Next destination: Planning...</span>
          </div>
          <span className="text-xs font-medium text-gray-700">Always ready for adventure</span>
        </div>
      </div>
    </motion.div>
  );
};

export default TravelTicket;




