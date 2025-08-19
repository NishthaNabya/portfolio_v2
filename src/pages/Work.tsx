import React from 'react';
import LatestProjects from '../components/LatestProjects';

const Work: React.FC = () => {
  return (
    <section className="pt-16 pb-24">
      <h1 className="text-4xl font-bold text-gray-900">Work</h1>
      <div className="w-24 h-1 bg-accent mt-2 mb-8" />
      <LatestProjects />
    </section>
  );
};

export default Work;
