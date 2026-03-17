const ProfileIDCard = () => {
  return (
    <div className="border border-gray-200 rounded-xl p-6">
      {/* Small centered photo */}
      <div className="flex justify-center mb-5">
        <div className="w-48 h-48 rounded-xl overflow-hidden border border-gray-100">
          <img
            src="/profile-headshot.png"
            alt="Nishtha Nabya"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Info */}
      <div className="text-center">
        <p className="text-[10px] font-medium tracking-widest text-gray-400 uppercase mb-1">ID Card</p>
        <p className="font-serif text-lg text-gray-900">Nishtha Nabya</p>
      </div>
    </div>
  );
};

export default ProfileIDCard;
