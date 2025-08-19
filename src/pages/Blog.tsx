import React from 'react';
import LatestPosts from '../components/LatestPosts';

const Leadership: React.FC = () => {
  return (
    <section className="pt-16 pb-24">
      <h1 className="text-4xl font-bold text-gray-900">Leadership</h1>
      <div className="w-24 h-1 bg-accent mt-2 mb-8" />
      <LatestPosts />
    </section>
  );
};

export default Leadership;
