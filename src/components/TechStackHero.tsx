const TechStackHero = () => {
  // Core tech stack with updated and improved icons
  const coreStack = [
    { 
      name: 'Python', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
          <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.26-.02.2-.01h13.17l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25c-.2 0-.37.09-.5.27-.14.18-.21.42-.21.71 0 .3.07.54.21.72.13.18.3.27.5.27.2 0 .37-.09.5-.27.14-.18.21-.42.21-.71 0-.3-.07-.54-.21-.72-.13-.18-.3-.27-.5-.27zm-7.5-13.5c.2 0 .37-.09.5-.27.14-.18.21-.42.21-.71 0-.3-.07-.54-.21-.72-.13-.18-.3-.27-.5-.27-.2 0-.37.09-.5.27-.14.18-.21.42-.21.71 0 .3.07.54.21.72.13.18.3.27.5.27z" fill="#3776AB"/>
          <path d="M9.75 23.82l-.9-.2-.73-.26-.59-.3-.45-.32-.34-.34-.25-.34-.16-.33-.1-.3-.04-.26-.02-.2.01-.13V15.5l.05-.63.13-.55.21-.46.26-.38.3-.31.33-.25.35-.19.35-.14.33-.1.3-.07.26-.04.21-.02h5.48l.69-.05.59-.14.5-.22.41-.27.33-.32.27-.35.2-.36.15-.37.1-.35.07-.32.04-.27.02-.21v-3.06h1.83l.21.03.28.07.32.12.35.18.36.26.36.36.35.46.32.59.28.73.21.88.14 1.05.05 1.23-.06 1.22-.16 1.04-.24.87-.32.71-.36.57-.4.44-.42.33-.42.24-.4.16-.36.1-.32.05-.26.02-.2.01H9.75l-.69.05-.59.14-.5.21-.41.28-.33.32-.27.35-.2.36-.15.36-.1.35-.07.32-.04.28-.02.21v1.93H7.91l-.14-.01zm6.47-14.25c.2 0 .37-.09.5-.27.14-.18.21-.42.21-.71 0-.3-.07-.54-.21-.72-.13-.18-.3-.27-.5-.27-.2 0-.37.09-.5.27-.14.18-.21.42-.21.71 0 .3.07.54.21.72.13.18.3.27.5.27zm7.5 13.5c-.2 0-.37.09-.5.27-.14.18-.21.42-.21.71 0 .3.07.54.21.72.13.18.3.27.5.27.2 0 .37-.09.5-.27.14-.18.21-.42.21-.71 0-.3-.07-.54-.21-.72-.13-.18-.3-.27-.5-.27z" fill="#FFD43B"/>
        </svg>
      )
    },
    { 
      name: 'SQL', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#336791">
          <rect x="3" y="4" width="18" height="3" rx="1"/>
          <rect x="3" y="8" width="18" height="2" rx="0.5"/>
          <rect x="3" y="11" width="18" height="2" rx="0.5"/>
          <rect x="3" y="14" width="18" height="2" rx="0.5"/>
          <rect x="3" y="17" width="18" height="3" rx="1"/>
          <circle cx="6" cy="9" r="0.5" fill="white"/>
          <circle cx="6" cy="12" r="0.5" fill="white"/>
          <circle cx="6" cy="15" r="0.5" fill="white"/>
        </svg>
      )
    },
    { 
      name: 'RStudio', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#75AADB">
          <circle cx="12" cy="12" r="10" fill="#75AADB"/>
          <text x="12" y="16" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">R</text>
        </svg>
      )
    },
    { 
      name: 'AWS', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#FF9900">
          <rect x="2" y="4" width="20" height="3" rx="1" fill="#FF9900"/>
          <rect x="2" y="8" width="20" height="3" rx="1" fill="#FF9900"/>
          <rect x="2" y="12" width="20" height="3" rx="1" fill="#FF9900"/>
          <rect x="2" y="16" width="20" height="3" rx="1" fill="#FF9900"/>
          <text x="12" y="13" textAnchor="middle" fontSize="6" fill="white" fontWeight="bold">AWS</text>
        </svg>
      )
    },
    { 
      name: 'Oracle Cloud', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#F80000">
          <circle cx="12" cy="12" r="10" fill="#F80000"/>
          <circle cx="12" cy="12" r="7" fill="white"/>
          <text x="12" y="15" textAnchor="middle" fontSize="8" fill="#F80000" fontWeight="bold">O</text>
        </svg>
      )
    },
    { 
      name: 'Git', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#F05032">
          <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
        </svg>
      )
    },
    { 
      name: 'Power BI', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#F2C811">
          <path d="M2.5 7.5h3v9h-3v-9zM6.5 4.5h3v15h-3v-15zM10.5 1.5h3v21h-3v-21zM14.5 7.5h3v9h-3v-9zM18.5 10.5h3v3h-3v-3z"/>
        </svg>
      )
    },
    { 
      name: 'Snowflake', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#29B5E8">
          <circle cx="12" cy="12" r="10" fill="#29B5E8"/>
          <path d="M12 6v12M6 12h12M8.5 8.5l7 7M15.5 8.5l-7 7" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="2" fill="white"/>
        </svg>
      )
    }
  ];

  return (
    <section className="pt-8 sm:pt-12 md:pt-16 px-0 sm:px-4 bg-white">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Current Tech Stack</h2>
          <div className="w-24 h-1 bg-accent mt-2" />
        </div>
      </div>
      
      <div className="mt-6 sm:mt-8 border-l-2 border-[#BE3D2A] pl-3 sm:pl-6">
        <p className="text-gray-600 mb-4 sm:mb-6 max-w-2xl text-sm sm:text-base">
          The tools and technologies I'm currently working with to build meaningful solutions and bring ideas to life.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4">
          {coreStack.map((tech) => (
            <div 
              key={tech.name}
              className="flex items-center gap-2 sm:gap-3 px-2 sm:px-4 py-2 sm:py-3 rounded-lg bg-white border border-gray-200"
            >
              <div className="flex-shrink-0">
                {tech.icon}
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-700 truncate">
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
