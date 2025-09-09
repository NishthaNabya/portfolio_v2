import { PhotographyGrid, CurrentProjectsCard, ProfileIDCard } from '../components';

const About: React.FC = () => {
  return (
    <section className="pt-8 pb-24 px-4">
      {/* Main Content */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
        <div className="w-24 h-1 bg-accent mb-6" />
        
        <div className="grid lg:grid-cols-3 gap-12 items-start">
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
              <h3 className="text-2xl font-bold text-gray-900 mb-2">What I Bring to the Table</h3>
              <div className="w-16 h-[3px] bg-accent mb-6" />
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
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Sed Ut Perspiciatis</h3>
              <div className="w-16 h-[3px] bg-accent mb-6" />
              <div className="space-y-4">
                <p className="leading-relaxed">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <p className="leading-relaxed">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
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
