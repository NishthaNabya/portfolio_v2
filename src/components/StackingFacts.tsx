import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export interface StackingFactItem {
  icon?: string;
  label: string;
  value?: string;
  note?: string;
}

interface StackingFactsProps {
  items: StackingFactItem[];
}

const StackingFacts = ({ items }: StackingFactsProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  // Trigger earlier so stacking begins as the section comes into view
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start 80%', 'end 20%'] });

  // Generous scroll room so each card can pin without drifting
  const minH = Math.max(items.length * 120, 200); // vh

  return (
    <div ref={containerRef} className="relative" style={{ minHeight: `${minH}vh` }}>
      {items.map((item, idx) => {
        const seg = 1 / items.length;
        const start = idx * seg;
        const end = (idx + 1) * seg;
        // Only fade sequence; no vertical transform so cards do not slide down
        const opacity = useTransform(scrollYProgress, [start, end], [0.35, 1]);
        const zIndex = 50 - idx;

        return (
          <motion.div key={idx} style={{ opacity, zIndex }} className="sticky top-24">
            <motion.div
              whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.08)' }}
              transition={{ type: 'spring', stiffness: 250, damping: 20 }}
              className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6 max-w-md shadow-sm"
            >
              <div className="flex items-start gap-3">
                {item.icon && (
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-50 ring-1 ring-gray-200 text-lg" aria-hidden>
                    {item.icon}
                  </span>
                )}
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wide text-gray-500">{item.label}</div>
                  {item.value && <div className="text-base font-semibold text-gray-900 truncate">{item.value}</div>}
                  {item.note && <div className="text-xs text-gray-600 mt-1">{item.note}</div>}
                </div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default StackingFacts;
