import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white">
      <div className="flex items-center">
        <Link to="/" className="text-accent hover:text-accent transition-colors" aria-label="Home">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9,22 9,12 15,12 15,22"/>
          </svg>
        </Link>
        <div className="w-px h-6 bg-gray-300 mx-4"></div>
        <Link to="/about" className="text-gray-800 hover:text-accent mx-2 text-sm">About</Link>
        <Link to="/work" className="text-gray-800 hover:text-accent mx-2 text-sm">Work</Link>
        <Link to="/projects" className="text-gray-800 hover:text-accent mx-2 text-sm">Projects</Link>
      </div>
      <div className="flex items-center">
        <a href="#linkedin" className="text-gray-800 hover:text-accent mx-2" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
        <a href="mailto:hello@example.com" className="text-gray-800 hover:text-accent mx-2" aria-label="Email">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
