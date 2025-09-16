const Hero = () => {
  return (
    <section className="text-left pt-8 px-4 bg-white">
      <h1 className="text-[100px] leading-none font-semibold text-[#BE3D2A]">Nishtha Nabya</h1>
      <div className="flex justify-between items-center mt-2">
        <h2 className="text-lg font-bold text-gray-700">Business Analytics, Computer Science, Information Systems</h2>
        <p className="text-gray-600">
          <span role="img" aria-label="map pin">📍</span> Minneapolis, MN
        </p>
      </div>
      <div className="max-w-2xl mt-10 text-left space-y-4 text-gray-800">
        <p>
          Hey there! I'm Nishtha — endlessly curious, always asking “how can this be better?” I thrive on untangling messy problems and decoding what data is really saying. My path hasn’t been linear; it's been a series of “ooh, what’s over there?” moments that sharpened my ability to see challenges from multiple angles.
        </p>
        <p>
          Being an international student has shaped how I look at the world; always curious and open to new ideas. When I’m not deep in analytics, you can find me chasing light behind a camera, lost in a book, or sharing my thoughts through video diaries. Whether it’s crafting visual stories or exploring the reasons behind human behavior, I bring creativity and critical thinking to every project. I’d be thrilled to bring that energy to yours. What’s got you thinking lately?
        </p>
      </div>
    </section>
  );
};

export default Hero;
