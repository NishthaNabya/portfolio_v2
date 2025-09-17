interface TabContent {
  id: string;
  label: string;
  emoji: string;
  content: {
    description: string;
    highlights: string[];
    currentFocus?: string;
  };
}

const HobbyTabs = () => {
  // const [activeTab] = useState('reading');

  const tabs: TabContent[] = [
    {
      id: 'reading',
      label: 'Reading',
      emoji: '📚',
      content: {
        description: 'Drawn to books that challenge perspectives and deepen understanding of human behavior, design principles, and complex systems.',
        highlights: [
          'Behavioral psychology & economics',
          'Design methodology & theory',
          'Systems thinking & complexity',
          'Cultural anthropology'
        ],
        currentFocus: 'Currently reading "Thinking in Systems" by Donella Meadows and exploring pattern languages.'
      }
    }
  ];

  // const activeContent = tabs.find(tab => tab.id === activeTab)?.content;

  const readingContent = tabs[0].content;

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">📚</span>
          <h3 className="text-2xl font-bold text-gray-900">Reading</h3>
        </div>
        <div className="w-16 h-[3px] bg-accent" />
      </div>

      {/* Content */}
      <div className="space-y-6">
        {/* Description */}
        <p className="text-gray-700 leading-relaxed text-lg">
          {readingContent.description}
        </p>

        {/* Highlights */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
            Key Areas
          </h4>
          <div className="grid sm:grid-cols-2 gap-2">
            {readingContent.highlights.map((highlight, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 text-gray-600"
              >
                <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                <span className="text-sm">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Current Focus */}
        {readingContent.currentFocus && (
          <div className="p-4 bg-accent/5 border border-accent/10 rounded-lg">
            <h4 className="text-sm font-semibold text-accent mb-2 uppercase tracking-wide">
              Current Focus
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              {readingContent.currentFocus}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HobbyTabs;
