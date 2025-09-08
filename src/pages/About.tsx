import { PhotographyGrid, CurrentProjectsCard, ProfileIDCard } from '../components';

const About: React.FC = () => {
  return (
    <section className="pt-16 pb-24">
      {/* Header with Image */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
        <div className="w-24 h-1 bg-accent mb-6" />
        
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Text Content */}
          <div className="lg:col-span-2 text-gray-700 space-y-4">
            <p className="text-lg leading-relaxed">
              Hi, I'm Nishtha — endlessly curious, happiest when turning messy questions into simple, 
              human-centered answers. I love connecting dots between business, technology, and design 
              to create things that feel both thoughtful and useful.
            </p>
            <p className="text-base leading-relaxed">
              When I'm not analyzing or building, I'm probably hunting light with my camera, getting lost 
              in a great book, or documenting ideas through video journals. I'm a lifelong student of 
              people and patterns — and I love making sense of both.
            </p>
          </div>
          
          {/* Profile ID Card */}
          <div className="lg:col-span-1">
            <ProfileIDCard />
          </div>
        </div>
      </div>

      {/* Lorem Ipsum Section */}
      <div className="mb-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Lorem Ipsum */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Lorem Ipsum</h3>
            <div className="w-16 h-[3px] bg-accent mb-6" />
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>

          {/* Right Column - Current Thoughts */}
          <div>
            <CurrentProjectsCard />
          </div>
        </div>
      </div>

      {/* Photography Section */}
      <div>
        <PhotographyGrid />
      </div>
    </section>
  );
};

export default About;
