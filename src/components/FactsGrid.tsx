import { motion } from 'framer-motion';

export interface FactItem {
  icon?: string; // emoji or small icon
  label: string;
  value?: string;
  note?: string;
}

interface FactsGridProps {
  items: FactItem[];
}

const FactsGrid = ({ items }: FactsGridProps) => {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, delay: idx * 0.04 }}
          className="rounded-xl border border-gray-200 bg-white p-4"
        >
          <div className="flex items-start gap-3">
            {item.icon && (
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 ring-1 ring-gray-200 text-lg" aria-hidden>
                {item.icon}
              </span>
            )}
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-wide text-gray-500">{item.label}</div>
              {item.value && (
                <div className="text-base font-semibold text-gray-900 truncate">{item.value}</div>
              )}
              {item.note && (
                <div className="text-xs text-gray-600 mt-1">{item.note}</div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FactsGrid;







