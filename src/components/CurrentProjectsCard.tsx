interface Thought {
  text: string;
  date: string;
  category: string;
}

const CurrentProjectsCard = () => {
  const thoughts: Thought[] = [
    {
      text: "The best design solutions often emerge from constraints, not unlimited possibilities. Working within boundaries forces creative thinking.",
      date: "2 days ago",
      category: "Design Philosophy"
    },
    {
      text: "Every photograph is a conversation between light, time, and emotion. The technical aspects are just the vocabulary.",
      date: "1 week ago",
      category: "Photography"
    },
    {
      text: "Data tells stories, but it's our job as analysts to make sure we're listening to the right narrative and not just the loudest one.",
      date: "3 days ago",
      category: "Data Science"
    }
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 h-fit">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Current Thoughts</h3>
        <div className="w-12 h-[2px] bg-accent" />
      </div>

      {/* Thoughts Content */}
      <div className="space-y-4">
        {thoughts.map((thought, index) => (
          <div 
            key={index}
            className="p-4 bg-gray-50 rounded-lg border border-gray-100"
          >
            <blockquote className="text-gray-700 text-sm leading-relaxed mb-3 italic">
              "{thought.text}"
            </blockquote>
            
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-gray-500 bg-gray-200 px-2 py-1 rounded">
                {thought.category}
              </span>
              <span className="text-xs text-gray-500">
                {thought.date}
              </span>
            </div>
          </div>
        ))}
        
        <div className="pt-2 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            Capturing ideas as they come
          </p>
        </div>
      </div>

    </div>
  );
};

export default CurrentProjectsCard;
