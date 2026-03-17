const tools = [
  {
    name: 'Python',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.26-.02.2-.01h13.17l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01z" fill="#3776AB"/>
        <path d="M9.75 23.82l-.9-.2-.73-.26-.59-.3-.45-.32-.34-.34-.25-.34-.16-.33-.1-.3-.04-.26-.02-.2.01-.13V15.5l.05-.63.13-.55.21-.46.26-.38.3-.31.33-.25.35-.19.35-.14.33-.1.3-.07.26-.04.21-.02h5.48l.69-.05.59-.14.5-.22.41-.27.33-.32.27-.35.2-.36.15-.37.1-.35.07-.32.04-.27.02-.21v-3.06h1.83l.21.03.28.07.32.12.35.18.36.26.36.36.35.46.32.59.28.73.21.88.14 1.05.05 1.23-.06 1.22-.16 1.04-.24.87-.32.71-.36.57-.4.44-.42.33-.42.24-.4.16-.36.1-.32.05-.26.02-.2.01H9.75z" fill="#FFD43B"/>
      </svg>
    ),
  },
  {
    name: 'SQL',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
        <ellipse cx="12" cy="6" rx="8" ry="3" fill="#336791"/>
        <path d="M4 6v4c0 1.657 3.582 3 8 3s8-1.343 8-3V6" fill="#336791"/>
        <path d="M4 10v4c0 1.657 3.582 3 8 3s8-1.343 8-3v-4" fill="#336791" opacity="0.8"/>
        <path d="M4 14v4c0 1.657 3.582 3 8 3s8-1.343 8-3v-4" fill="#336791" opacity="0.6"/>
      </svg>
    ),
  },
  {
    name: 'Go',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
        <rect x="2" y="9" width="20" height="6" rx="3" fill="#00ADD8"/>
        <circle cx="7" cy="12" r="2" fill="white"/>
        <circle cx="7" cy="12" r="1" fill="#00ADD8"/>
        <path d="M14 10h6v4h-6v-2h4v-2z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'R',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0">
        <circle cx="12" cy="12" r="10" fill="#276DC3"/>
        <text x="12" y="16.5" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold" fontFamily="serif">R</text>
      </svg>
    ),
  },
  {
    name: 'Apache Spark',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
        <path d="M12 2L8 8l5-1-4 6 5-2-3 7 5-4-2 6 3-5-1 6 3-6" stroke="#E25A1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
  {
    name: 'Snowflake',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
        <path d="M12 3v18M3 12h18M6.5 6.5l11 11M17.5 6.5l-11 11" stroke="#29B5E8" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="2" fill="#29B5E8"/>
      </svg>
    ),
  },
  {
    name: 'Postgres',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
        <ellipse cx="12" cy="5" rx="7" ry="2.5" fill="#336791"/>
        <path d="M5 5v9c0 1.38 3.134 2.5 7 2.5s7-1.12 7-2.5V5" fill="#336791"/>
        <path d="M19 10c1 .5 2 1.5 2 3s-1 3-2 3.5" stroke="#336791" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'dbt',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#FF694B"/>
        <text x="12" y="16" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold" fontFamily="monospace">dbt</text>
      </svg>
    ),
  },
  {
    name: 'AWS',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
        <path d="M6.5 14.5c-1.5.8-2.5 2-2.5 3.5 0 2.2 2.5 4 6 4s6-1.8 6-4c0-1.5-1-2.7-2.5-3.5" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4 9l3 2 2-5 2 8 2-5 2 3 2-7" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: 'Oracle Cloud',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0">
        <circle cx="12" cy="12" r="10" fill="#F80000"/>
        <circle cx="12" cy="12" r="6" fill="white"/>
        <text x="12" y="15.5" textAnchor="middle" fontSize="8" fill="#F80000" fontWeight="bold">O</text>
      </svg>
    ),
  },
  {
    name: 'React',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
        <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)"/>
      </svg>
    ),
  },
  {
    name: 'Node.js',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
        <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" fill="#339933"/>
        <text x="12" y="15" textAnchor="middle" fontSize="6" fill="white" fontWeight="bold">JS</text>
      </svg>
    ),
  },
  {
    name: 'Git',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="#F05032">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
      </svg>
    ),
  },
  {
    name: 'Power BI',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="#F2C811">
        <rect x="2.5" y="8" width="3" height="8" rx="0.5"/>
        <rect x="6.5" y="5" width="3" height="14" rx="0.5"/>
        <rect x="10.5" y="2" width="3" height="20" rx="0.5"/>
        <rect x="14.5" y="8" width="3" height="8" rx="0.5"/>
        <rect x="18.5" y="11" width="3" height="3" rx="0.5"/>
      </svg>
    ),
  },
];

const TechStackHero = () => {
  // Duplicate for seamless loop
  const doubled = [...tools, ...tools];

  return (
    <section className="pt-14 pb-12 bg-white border-t border-gray-100">
      {/* Header */}
      <div className="mb-8">
        <p className="text-xs font-medium tracking-widest text-[#BE3D2A] uppercase mb-2">Tools</p>
        <h2 className="font-serif text-2xl sm:text-3xl text-gray-900">Current Tech Stack</h2>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white to-transparent" />

        <div className="flex animate-marquee w-max gap-3">
          {doubled.map((tool, i) => (
            <div
              key={`${tool.name}-${i}`}
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full bg-white text-sm font-medium text-gray-700 whitespace-nowrap select-none"
            >
              {tool.icon}
              {tool.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackHero;
