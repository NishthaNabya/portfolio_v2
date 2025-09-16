import { motion } from 'framer-motion';

interface TicketFactProps {
  label: string;
  value: string;
  sideNote?: string;
}

const TicketFact = ({ label, value, sideNote }: TicketFactProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-2xl border border-gray-200 bg-white p-5 md:p-6"
    >
      <div className="absolute -left-3 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-white border border-gray-200" />
      <div className="absolute -right-3 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-white border border-gray-200" />
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-wide text-gray-500">{label}</div>
          <div className="text-lg font-bold text-gray-900">{value}</div>
        </div>
        {sideNote && <div className="text-xs text-gray-500">{sideNote}</div>}
      </div>
      <div className="mt-4 h-px w-full bg-[repeating-linear-gradient(90deg,_#e5e7eb,_#e5e7eb_8px,_transparent_8px,_transparent_16px)]" />
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-gray-600">Admit One</span>
        <span className="text-sm font-medium text-accent">NN-2025</span>
      </div>
    </motion.div>
  );
};

export default TicketFact;












