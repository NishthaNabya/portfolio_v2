const Hero = () => {
  return (
    <section className="text-left pt-4 sm:pt-6 md:pt-8 px-0 sm:px-4 bg-white">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[100px] leading-none font-semibold text-[#BE3D2A]">Nishtha Nabya</h1>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-2 gap-2 sm:gap-0">
        <h2 className="text-base sm:text-lg font-bold text-gray-700">Computer Science and Management Information Systems</h2>
        <p className="text-gray-600 text-sm sm:text-base">
          <span role="img" aria-label="map pin">📍</span> Minneapolis, MN
        </p>
      </div>
      <div className="max-w-2xl mt-6 sm:mt-8 md:mt-10 text-left space-y-4 text-sm sm:text-base text-gray-800">
        <p>
          Hey there! I'm Nishtha, endlessly curious, always asking "how can this be better?" I thrive on untangling messy problems and decoding what data is really saying. My path hasn't been linear; it's been a series of "ooh, what's over there?" moments that sharpened my ability to see challenges from multiple angles.
        </p>
        <p>
          Being an international student has shaped how I look at the world; always curious and open to new ideas. When I'm not deep in analytics, you can find me chasing light behind a camera, lost in a book, or sharing my thoughts through video diaries. Whether it's crafting visual stories or exploring the reasons behind human behavior, I bring creativity and critical thinking to every project. I'd be thrilled to bring that energy to yours. What's got you thinking lately?
        </p>
      </div>
    </section>
  );
};

export default Hero;
