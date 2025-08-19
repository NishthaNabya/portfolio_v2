import { motion } from 'framer-motion';
import { SiPython, SiPostgresql, SiAmazon, SiGooglecloud, SiDocker, SiGit, SiFigma, SiReact, SiTypescript, SiTailwindcss } from 'react-icons/si';

interface SkillItem {
  icon?: string; // emoji for core skills
  name: string;
}

const coreSkills: SkillItem[] = [
  { icon: '🧬', name: 'Data Modeling' },
  { icon: '🧮', name: 'SQL' },
  { icon: '🧠', name: 'Machine Learning' },
  { icon: '🧪', name: 'A/B Testing' },
  { icon: '🛠️', name: 'Data Engineering' },
  { icon: '📊', name: 'Dashboarding / BI' },
  { icon: '📈', name: 'Analytics' },
  { icon: '🧭', name: 'Product Thinking' },
];

const techStack = [
  { Comp: SiPython, name: 'Python' },
  { Comp: SiPostgresql, name: 'PostgreSQL' },
  { Comp: SiReact, name: 'React' },
  { Comp: SiTypescript, name: 'TypeScript' },
  { Comp: SiTailwindcss, name: 'Tailwind CSS' },
  { Comp: SiAmazon, name: 'AWS' },
  { Comp: SiGooglecloud, name: 'GCP' },
  { Comp: SiDocker, name: 'Docker' },
  { Comp: SiGit, name: 'Git' },
  { Comp: SiFigma, name: 'Figma' },
];

const EmojiCard = ({ icon, name }: SkillItem) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.35 }}
    whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}
    className="rounded-xl border border-gray-200 bg-white p-4 flex items-center gap-3"
  >
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-50 ring-1 ring-gray-200 text-lg" aria-hidden>
      {icon}
    </span>
    <span className="text-sm font-medium text-gray-900">{name}</span>
  </motion.div>
);

const BrandCard = ({ Comp, name }: { Comp: React.ComponentType<{ className?: string }>; name: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.35 }}
    whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}
    className="rounded-xl border border-gray-200 bg-white p-4 flex items-center gap-3"
  >
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-50 ring-1 ring-gray-200 text-lg" aria-hidden>
      <Comp className="h-5 w-5" />
    </span>
    <span className="text-sm font-medium text-gray-900">{name}</span>
  </motion.div>
);

const SkillsStack = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Skills & Tech</h2>
          <div className="w-24 h-1 bg-accent mt-2" />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-sm font-semibold text-gray-700">Core Skills</h3>
        <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {coreSkills.map((s) => (
            <EmojiCard key={s.name} icon={s.icon!} name={s.name} />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-sm font-semibold text-gray-700">Tech Stack</h3>
        <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {techStack.map(({ Comp, name }) => (
            <BrandCard key={name} Comp={Comp as any} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsStack;
