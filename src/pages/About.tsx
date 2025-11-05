import { PhotographyGrid, CurrentProjectsCard, ProfileIDCard } from '../components';

const About: React.FC = () => {
  return (
    <section className="pt-4 sm:pt-6 md:pt-8 pb-12 sm:pb-16 md:pb-24 px-0 sm:px-4">
      {/* Main Content */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">About Me</h1>
        <div className="w-24 h-1 bg-accent mb-4 sm:mb-6" />
        
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left Column - All Text Content */}
          <div className="lg:col-span-2 text-gray-700 space-y-8">
            {/* Intro Paragraphs */}
            <div className="space-y-4">
              <p className="leading-relaxed">
                I'm an international student at the University of Minnesota's Carlson School of Management, where I double-majored studying Business Analytics, Computer Science, and Information Systems. But beyond the classes, I'm someone who enjoys solving problems with tech, building practical solutions, and always thinking about what the next fix or improvement could be.
              </p>
              <p className="leading-relaxed">
                This portfolio is a showcase of my projects, experiences, and learnings. It's to document my journey, and to share it with you.
              </p>
            </div>

            {/* What I Bring to the Table Section */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">What I bring to the table</h3>
              <div className="w-16 h-[3px] bg-accent mb-4 sm:mb-6" />
              <div className="space-y-4">
                <p className="leading-relaxed">
                  I bring more than technical skills, I bring a mindset that constantly seeks to uncover smarter, more efficient ways to solve problems. Rather than just working with data, I enjoy transforming it into clear, meaningful insights that guide better decisions and drive tangible results. My approach is both analytical and creative, allowing me to design solutions that are practical yet innovative.
                </p>
                <p className="leading-relaxed">
                  I thrive when working in fast-paced, ever-changing environments where teamwork fuels innovation. I'm naturally curious, always eager to learn from different perspectives and ready to adapt when new challenges arise. My experience spans from cutting-edge AI research to hands-on cloud consulting, giving me a flexible skill set that bridges the gap between technology and real-world business goals.
                </p>
                <p className="leading-relaxed">
                  Above all, I bring energy and a growth mindset to any team, ready to contribute ideas, embrace feedback, and help move projects forward. If you're looking for someone who can balance technical depth with strategic thinking and teamwork, I'm eager to bring that perspective and drive to your organization.
                </p>
              </div>
            </div>

            {/* Sed Ut Perspiciatis Section */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Many things I love to do</h3>
              <div className="w-16 h-[3px] bg-accent mb-4 sm:mb-6" />
              <div className="space-y-4">
                <p className="leading-relaxed">
                  I’m all about trying different hobbies that inspire me and keep me growing. From dancing and painting to baking tasty treats, I love mixing creativity with fun. Staying active is a big part of my life too, with paddleboarding, swimming, and hiking regularly on my list.
                </p>
                <p className="leading-relaxed">
                  Traveling is another passion. I've been lucky enough to visit almost 27 countries and feel extremely grateful to have this as part of my life. Whenever I get a break, I save up and set out to explore new places, try new things, and soak in different cultures.
                </p>
                <p className="leading-relaxed">
                  I'm also passionate about photography and am building my freelance work around telling stories through images. It's a cool way to share how I see the world. All these hobbies blend together to make life more interesting. You can see some of my photos down below and follow my page here{' '}
                  <a 
                    href="https://www.instagram.com/unscripted_lenss/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-accent hover:text-accent/80 font-medium transition-colors duration-200 underline decoration-1 underline-offset-2"
                  >
                    Instagram
                  </a>!
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column - ID Card and Current Thoughts */}
          <div className="lg:col-span-1 space-y-8">
            <ProfileIDCard />
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
