const LatestPosts = () => {
  const posts = [
    { date: "Jul 2025", title: "How I built my Framer template empire" },
    { date: "Jun 2025", title: "My journey from $0 to $10K MRR" },
    { date: "Jun 2025", title: "Is vibe coding here to stay?" },
    { date: "May 2025", title: "Don’t complain, create!" },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="flex justify-between items-center mb-8">
        <div className="flex-col">
          <h2 className="text-3xl font-bold text-gray-900">Latest Posts</h2>
          <div className="w-20 h-1 bg-accent mt-2"></div>
        </div>
        <a href="#all-posts" className="text-accent hover:underline">View all</a>
      </div>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-gray-600">{post.date}</span>
            <a href="#" className="text-lg text-gray-800 hover:underline">{post.title}</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestPosts;
