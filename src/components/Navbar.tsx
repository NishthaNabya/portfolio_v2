import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white">
      <div className="flex items-center">
        <Link to="/" className="relative group text-accent hover:text-accent transition-colors" aria-label="Home">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9,22 9,12 15,12 15,22"/>
          </svg>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            Home
          </div>
        </Link>
        <div className="w-px h-6 bg-gray-300 mx-4"></div>
        <Link to="/about" className="text-gray-800 hover:text-accent mx-2 text-sm">About</Link>
        <Link to="/work" className="text-gray-800 hover:text-accent mx-2 text-sm">Work</Link>
        <Link to="/projects" className="text-gray-800 hover:text-accent mx-2 text-sm">Projects</Link>
      </div>
      <div className="flex items-center gap-2">
        <a 
          href="https://www.linkedin.com/in/nishtha-nabya" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative group p-2 text-gray-600 hover:text-accent border border-gray-200 hover:border-accent rounded-lg transition-all duration-200 hover:shadow-sm" 
          aria-label="LinkedIn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            LinkedIn
          </div>
        </a>
        <a 
          href="mailto:nishtha.nabya@gmail.com" 
          className="relative group p-2 text-gray-600 hover:text-accent border border-gray-200 hover:border-accent rounded-lg transition-all duration-200 hover:shadow-sm" 
          aria-label="Email"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            Email
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
