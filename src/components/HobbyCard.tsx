import { motion } from 'framer-motion';

interface HobbyCardProps {
  title: string;
  description: string;
  emoji?: string;
}

const HobbyCard = ({ title, description, emoji }: HobbyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}
      className="rounded-xl border border-gray-200 p-5 bg-white"
    >
      <div className="flex items-center gap-3">
        {emoji && <span className="text-2xl" aria-hidden>{emoji}</span>}
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-gray-700">{description}</p>
    </motion.div>
  );
};

export default HobbyCard;



