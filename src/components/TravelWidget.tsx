import { useState } from 'react';

interface Country {
  name: string;
  code: string;
  year: number;
  highlight: string;
  emoji: string;
}

const TravelWidget = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const countries: Country[] = [
    { name: 'Japan', code: 'JP', year: 2024, highlight: 'Cherry blossoms in Kyoto', emoji: '🌸' },
    { name: 'Iceland', code: 'IS', year: 2023, highlight: 'Northern lights and hot springs', emoji: '🌋' },
    { name: 'Morocco', code: 'MA', year: 2023, highlight: 'Sahara desert expedition', emoji: '🏜️' },
    { name: 'New Zealand', code: 'NZ', year: 2022, highlight: 'Milford Sound kayaking', emoji: '🏔️' },
    { name: 'Peru', code: 'PE', year: 2022, highlight: 'Machu Picchu sunrise trek', emoji: '🦙' },
    { name: 'Norway', code: 'NO', year: 2021, highlight: 'Lofoten Islands photography', emoji: '🏔️' },
    { name: 'India', code: 'IN', year: 2021, highlight: 'Rajasthan cultural immersion', emoji: '🕌' },
    { name: 'Portugal', code: 'PT', year: 2020, highlight: 'Coastal villages and cuisine', emoji: '🌊' }
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Recent Travels</h3>
        <div className="w-16 h-[3px] bg-accent mb-4" />
        <p className="text-gray-600">
          {countries.length} countries explored • Each journey a story worth telling
        </p>
      </div>

      {/* Country Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {countries.map((country, index) => (
          <button
            key={country.code}
            onClick={() => setSelectedCountry(selectedCountry?.code === country.code ? null : country)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedCountry(selectedCountry?.code === country.code ? null : country);
              }
            }}
            className={`
              group p-4 bg-white border border-gray-200 rounded-lg text-left transition-all duration-200
              hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5
              focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent
              ${selectedCountry?.code === country.code ? 'ring-2 ring-accent/50 border-accent bg-accent/5' : ''}
            `}
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            <div className="flex items-start justify-between mb-2">
              <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                {country.emoji}
              </span>
              <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {country.year}
              </span>
            </div>
            
            <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-accent transition-colors">
              {country.name}
            </h4>
            
            <p className="text-xs text-gray-600 leading-relaxed">
              {country.highlight}
            </p>
            
            {/* Expand indicator */}
            <div className={`
              mt-2 flex justify-center transition-all duration-200
              ${selectedCountry?.code === country.code ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}
            `}>
              <div className="w-4 h-0.5 bg-accent rounded-full" />
            </div>
          </button>
        ))}
      </div>

      {/* Selected Country Details */}
      {selectedCountry && (
        <div className="p-6 bg-accent/5 border border-accent/20 rounded-lg animate-in slide-in-from-top duration-300">
          <div className="flex items-start gap-4">
            <span className="text-4xl">{selectedCountry.emoji}</span>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h4 className="text-xl font-bold text-gray-900">{selectedCountry.name}</h4>
                <span className="text-sm font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                  {selectedCountry.year}
                </span>
              </div>
              <p className="text-gray-700 mb-4">{selectedCountry.highlight}</p>
              
              {/* Mock additional details - you can expand this */}
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                  Photography
                </span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                  Cultural Experience
                </span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                  Adventure
                </span>
              </div>
            </div>
            
            <button
              onClick={() => setSelectedCountry(null)}
              className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close details"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Travel Stats */}
      <div className="mt-6 grid grid-cols-3 gap-4 text-center">
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="text-2xl font-bold text-accent">{countries.length}</div>
          <div className="text-xs text-gray-600 uppercase tracking-wide">Countries</div>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="text-2xl font-bold text-accent">4</div>
          <div className="text-xs text-gray-600 uppercase tracking-wide">Continents</div>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="text-2xl font-bold text-accent">2024</div>
          <div className="text-xs text-gray-600 uppercase tracking-wide">Latest Trip</div>
        </div>
      </div>
    </div>
  );
};

export default TravelWidget;
