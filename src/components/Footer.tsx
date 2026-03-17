const Footer = () => {
  return (
    <footer className="bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-10">

        {/* Top row — name + nav */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="font-serif text-lg text-white">Nishtha Nabya</p>
            <p className="text-sm text-gray-500 mt-1">Building systems that make data work.</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="/about"    className="text-sm text-gray-500 hover:text-white transition-colors">About</a>
<a href="/projects" className="text-sm text-gray-500 hover:text-white transition-colors">Projects</a>
            <a href="https://github.com/NishthaNabya" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/nishtha-nabya/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-white transition-colors">LinkedIn</a>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} Nishtha Nabya. All rights reserved.</p>
          <a href="mailto:nishtha.nabya@gmail.com" className="text-xs text-gray-600 hover:text-white transition-colors">
            nishtha.nabya@gmail.com
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
