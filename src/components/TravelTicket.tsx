import { motion } from 'framer-motion';

interface TravelTicketProps {
  visitedCount: number;
  totalDots?: number; // grid density (default 132 = 11 x 12)
}

const TravelTicket = ({ visitedCount, totalDots = 132 }: TravelTicketProps) => {
  const dots = Array.from({ length: totalDots }, (_, i) => i < visitedCount);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-2xl border border-gray-200 bg-white p-5 md:p-6 overflow-hidden"
      aria-label={`Visited ${visitedCount} countries`}
    >
      {/* Perforations */}
      <div className="absolute -left-3 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-white border border-gray-200" />
      <div className="absolute -right-3 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-white border border-gray-200" />

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Left info */}
        <div>
          <div className="text-xs uppercase tracking-wide text-gray-500">Travel log</div>
          <div className="mt-1 text-2xl font-extrabold text-gray-900">
            {visitedCount}
            <span className="ml-2 text-base font-semibold text-gray-700">countries</span>
          </div>
          <div className="mt-2 text-sm text-gray-600">A snapshot of places I’ve explored so far.</div>
          <div className="mt-4 flex items-center gap-2 text-xs text-gray-600">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            <span>visited</span>
            <span className="inline-block h-2 w-2 rounded-full bg-gray-300 ml-3" />
            <span>not yet</span>
          </div>
        </div>

        {/* Dot “map” */}
        <div className="flex-1">
          <div
            className="grid gap-1.5"
            style={{ gridTemplateColumns: 'repeat(12, minmax(0, 1fr))' }}
            role="img"
            aria-label="World map representation"
          >
            {dots.map((isVisited, idx) => (
              <motion.span
                key={idx}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 0.005 * idx }}
                className={`block h-2.5 w-2.5 rounded-full ${isVisited ? 'bg-accent' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tear line */}
      <div className="mt-6 h-px w-full bg-[repeating-linear-gradient(90deg,_#e5e7eb,_#e5e7eb_8px,_transparent_8px,_transparent_16px)]" />
      <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
        <span>Boarding: Curiosity</span>
        <span className="font-medium text-gray-700">NN • TRVL • 2025</span>
      </div>
    </motion.div>
  );
};

export default TravelTicket;




