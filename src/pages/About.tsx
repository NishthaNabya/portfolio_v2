import { PhotographyGrid, CurrentProjectsCard, ProfileIDCard } from '../components';

const About: React.FC = () => {
  return (
    <section className="pt-8 pb-24 px-4">
      {/* Header with Image */}
      <div className="mb-12">
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

      {/* Consectetur Adipiscing Section */}
      <div className="mb-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Content */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Consectetur Adipiscing</h3>
            <div className="w-16 h-[3px] bg-accent mb-6" />
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.
              </p>
              <p className="leading-relaxed">
                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
              </p>
              <p className="leading-relaxed">
                Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
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
