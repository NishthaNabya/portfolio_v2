import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative bg-white border-b border-gray-200/50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 flex items-center justify-between py-4">
      {/* Logo */}
      <a href="/" className="font-serif text-xl text-gray-900 tracking-tight hover:text-[#BE3D2A] transition-colors">
        Nishtha Nabya
      </a>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-6">
        <a
          href="/about"
          className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="4"/>
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
          </svg>
          About
        </a>
        <a
          href="https://github.com/NishthaNabya"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5C5.73.5.5 5.73.5 12.02c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.29-1.71-1.29-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.26 3.4.96.11-.76.41-1.26.75-1.55-2.55-.29-5.23-1.28-5.23-5.72 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.45.11-3.02 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.57.23 2.73.11 3.02.75.81 1.2 1.84 1.2 3.1 0 4.45-2.68 5.43-5.24 5.72.42.36.8 1.09.8 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56A10.53 10.53 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
          </svg>
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/nishtha-nabya/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
          LinkedIn
        </a>
        <a
          href="mailto:nishtha.nabya@gmail.com"
          className="px-4 py-1.5 text-sm font-medium text-white bg-[#BE3D2A] rounded-full hover:bg-[#a8341f] transition-colors"
        >
          Contact Me
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      </div>

      {/* Mobile dropdown — full width */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-50 md:hidden">
          <div className="flex flex-col px-6 py-5 space-y-1">
            <a href="/" onClick={() => setIsMenuOpen(false)}
              className="py-3 text-sm font-medium text-gray-700 hover:text-[#BE3D2A] border-b border-gray-100 transition-colors">
              Home
            </a>
            <a href="/about" onClick={() => setIsMenuOpen(false)}
              className="py-3 text-sm font-medium text-gray-700 hover:text-[#BE3D2A] border-b border-gray-100 transition-colors">
              About
            </a>
            <a href="/projects" onClick={() => setIsMenuOpen(false)}
              className="py-3 text-sm font-medium text-gray-700 hover:text-[#BE3D2A] border-b border-gray-100 transition-colors">
              Projects
            </a>
            <a href="https://github.com/NishthaNabya" target="_blank" rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="py-3 text-sm font-medium text-gray-700 hover:text-[#BE3D2A] border-b border-gray-100 transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/nishtha-nabya/" target="_blank" rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="py-3 text-sm font-medium text-gray-700 hover:text-[#BE3D2A] border-b border-gray-100 transition-colors">
              LinkedIn
            </a>
            <div className="pt-3">
              <a href="mailto:nishtha.nabya@gmail.com" onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center px-4 py-2.5 text-sm font-medium text-white bg-[#BE3D2A] rounded-full hover:bg-[#a8341f] transition-colors">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
