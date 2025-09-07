import HobbyCard from '../components/HobbyCard';
import TravelTicket from '../components/TravelTicket';
import StackingFacts from '../components/StackingFacts';
import SpotifyEmbed from '../components/SpotifyEmbed';
import CircularGallery from '../components/CircularGallery';

const About: React.FC = () => {
  return (
    <section className="pt-16 pb-24">
      <h1 className="text-4xl font-bold text-gray-900">About</h1>
      <div className="w-24 h-1 bg-accent mt-2 mb-8" />

      {/* Intro */}
      <div className="max-w-2xl text-gray-800 space-y-4">
        <p className="text-base">Hi, I’m Nishtha — endlessly curious, happiest when turning messy questions into simple, human-centered answers. I love connecting dots between business, technology, and design to create things that feel both thoughtful and useful.</p>
        <p className="text-base">When I’m not analyzing or building, I’m probably hunting light with my camera, getting lost in a great book, or documenting ideas through video journals. I’m a lifelong student of people and patterns — and I love making sense of both.</p>
      </div>

      {/* Hobbies */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Hobbies & Interests</h2>
        <div className="w-16 h-[3px] bg-accent mt-2" />
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <HobbyCard title="Photography" emoji="📷" description="Chasing natural light, experimenting with composition, and telling stories through stills." />
          <HobbyCard title="Reading" emoji="📚" description="Non-fiction, behavioral science, and design — anything that sharpens thinking and empathy." />
          <HobbyCard title="Travel" emoji="🗺️" description="Slow travel, local cafés, and long walks. Best souvenirs: conversations and photos." />
          <HobbyCard title="Fitness" emoji="🧗‍♀️" description="Climbing, hiking, and movement. It keeps my mind clear and my ideas crisp." />
          <HobbyCard title="Making" emoji="🛠️" description="Building micro-projects to explore interfaces, data, and small helpful tools." />
          <HobbyCard title="Listening" emoji="🎧" description="Podcasts, jazz, lo-fi — soundtracks for deep work and curiosity." />
        </div>
      </div>

      {/* Photography Gallery */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Photography</h2>
        <div className="w-16 h-[3px] bg-accent mb-6" />
        <p className="text-gray-600 mb-8 max-w-2xl">
          A curated collection of my photography work — from landscapes to urban scenes, 
          each image captures a moment of beauty and storytelling through my lens.
        </p>
        <div style={{ height: '600px', position: 'relative' }}>
          <CircularGallery 
            items={[
              {
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
                text: 'Mountain Vista'
              },
              {
                image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
                text: 'Forest Path'
              },
              {
                image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3',
                text: 'Urban Lines'
              },
              {
                image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
                text: 'Minimal Space'
              },
              {
                image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
                text: 'Golden Hour'
              },
              {
                image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
                text: 'Lake Mirror'
              },
              {
                image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
                text: 'Sunset Peak'
              },
              {
                image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
                text: 'Ocean Waves'
              }
            ]}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollSpeed={2}
            scrollEase={0.02}
          />
        </div>
      </div>

      {/* Travel + Facts (stacking) */}
      <div className="mt-12 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-gray-900">Travel</h2>
          <div className="w-16 h-[3px] bg-accent mt-2" />
          <div className="mt-6">
            <TravelTicket visitedCount={34} />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Fun Facts</h2>
          <div className="w-16 h-[3px] bg-accent mt-2" />
          <div className="mt-6">
            <StackingFacts
              items={[
                { icon: '☕️', label: 'Creative Fuel', value: 'Coffee + Jazz' },
                { icon: '📷', label: 'Go-to Camera', value: 'Sony A7C II', note: '35mm / 85mm' },
                { icon: '🗒️', label: 'Most-used Tool', value: 'Notion', note: 'daily capture' },
                { icon: '🧩', label: 'Problem-Solving Style', value: 'First principles', note: 'clarity > speed' },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Spotify / Listening */}
      <div className="mt-12">
        <SpotifyEmbed />
      </div>
    </section>
  );
};

export default About;
