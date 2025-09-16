const ProfileIDCard = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 h-fit">
      {/* Card Header */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2 h-2 bg-accent rounded-full"></div>
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">ID Card</span>
      </div>

      {/* Profile Photo */}
      <div className="flex justify-center mb-6">
        <div className="w-48 h-48 bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
          <img 
            src="/profile-headshot.png" 
            alt="Nishtha Nabya Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Personal Info */}
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-1">Nishtha Nabya</h3>
        <p className="text-sm text-gray-600 font-medium mb-3">Data Engineer</p>
        <div className="text-xs text-gray-500">
          <p>📍 Based in USA</p>
        </div>
      </div>

      {/* Skills/Tags */}
      <div className="flex flex-wrap gap-2 justify-center">
        <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-xs font-medium border border-gray-200">
          Machine Learning
        </span>
        <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-xs font-medium border border-gray-200">
          Analytics
        </span>
        <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-xs font-medium border border-gray-200">
          AI
        </span>
      </div>
    </div>
  );
};

export default ProfileIDCard;
