import { ProfileIDCard } from '../components';

const About = () => {
  return (
    <section className="pt-10 pb-16">

      {/* Header */}
      <div className="mb-12">
        <p className="text-xs font-medium tracking-widest text-[#BE3D2A] uppercase mb-2">Get to know me</p>
        <h1 className="font-serif text-3xl sm:text-4xl text-gray-900">About.</h1>
      </div>

      {/* Bio + ID Card */}
      <div className="grid lg:grid-cols-[1fr_260px] gap-8 lg:gap-16 mb-2">
        <div className="space-y-5 text-gray-600 text-sm sm:text-base leading-relaxed">
          <p>
            I'm an international student at the University of Minnesota's Carlson School of Management, studying Computer Science and Information Systems. Beyond the classes, I like building things: tools, systems, pipelines, anything that turns a messy problem into something that actually works.
          </p>
          <p>
            I've spent time across cloud consulting, AI research, and software development, which has given me a decent feel for where engineering and data intersect. I'm drawn to problems that sit at that boundary, where you need to write real code and think about the data at the same time.
          </p>
          <p>
            This portfolio is part showcase, part record of what I've been learning. If something here resonates, I'd love to connect.
          </p>
        </div>

        <div className="flex justify-center lg:block mt-6 lg:mt-0">
          <div className="w-64 lg:w-full">
            <ProfileIDCard />
          </div>
        </div>
      </div>

      {/* Beyond the code */}
      <div className="pt-4">
        <p className="text-xs font-medium tracking-widest text-[#BE3D2A] uppercase mb-2">Life outside code</p>
        <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 mb-6">Beyond the terminal.</h2>

        <div className="grid sm:grid-cols-2 gap-8 text-sm sm:text-base text-gray-600 leading-relaxed">
          <div className="space-y-4">
            <p>
              I pick up hobbies and actually stick with them. Dancing, painting, and baking keep me creative. Paddleboarding, swimming, and hiking take care of the rest when the weather cooperates.
            </p>
            <p>
              Traveling is a big part of who I am. I've been lucky enough to visit close to 27 countries, and every trip has changed how I think about people and problems. When I have time off, I save up and go somewhere new.
            </p>
          </div>
          <div className="space-y-4">
            <p>
              I'm also getting more serious about photography, specifically documentary and street work. It started as a hobby and has grown into something I'm building freelance work around.
            </p>
            <p>
              You can follow along on{' '}
              <a
                href="https://www.instagram.com/unscripted_lenss/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#BE3D2A] hover:underline underline-offset-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
                Instagram
              </a>.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
