import Silk from './Silk';

const ProfileIDCard = () => {
  return (
    <div className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100/80 border border-gray-200/60 rounded-lg p-6 h-fit shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 backdrop-blur-sm">
      {/* Silk Background */}
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        <Silk
          speed={5}
          scale={1}
          color="#BE3D2A"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      
      {/* Content - positioned above background */}
      <div className="relative z-10">
        {/* Card Header */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-white rounded-full shadow-sm"></div>
          <span className="text-xs font-medium text-white uppercase tracking-wide">ID Card</span>
        </div>

        {/* Profile Photo */}
        <div className="flex justify-center mb-4">
          <div className="relative w-48 h-48 bg-gradient-to-br from-white/30 via-gray-100/20 to-gray-200/30 rounded-lg flex items-center justify-center border-2 border-white/60 shadow-2xl overflow-hidden ring-1 ring-gray-300/40 backdrop-blur-sm">
            {/* Glass shine on photo frame */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-lg"></div>
            {/* Professional filler image with white background - replace with your actual photo */}
            <img 
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3" 
              alt="Nishtha Nabya Profile" 
              className="w-full h-full object-cover relative z-10"
            />
          </div>
        </div>

        {/* Personal Info */}
        <div className="text-center mb-4">
          <h3 className="text-lg font-bold text-white mb-1 drop-shadow-lg">Nishtha Nabya</h3>
          <p className="text-sm text-white font-medium mb-2 drop-shadow-md">Product Designer & Analyst</p>
          <div className="text-xs text-white/90">
            <p>📍 Based in San Francisco</p>
          </div>
        </div>

        {/* Skills/Tags */}
        <div className="flex flex-wrap gap-1 justify-center">
          <span className="relative px-2 py-1 bg-white/20 backdrop-blur-sm text-white rounded text-xs font-medium border border-white/30 shadow-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
            <span className="relative z-10">Design</span>
          </span>
          <span className="relative px-2 py-1 bg-white/20 backdrop-blur-sm text-white rounded text-xs font-medium border border-white/30 shadow-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
            <span className="relative z-10">Analytics</span>
          </span>
          <span className="relative px-2 py-1 bg-white/20 backdrop-blur-sm text-white rounded text-xs font-medium border border-white/30 shadow-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
            <span className="relative z-10">Strategy</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileIDCard;
