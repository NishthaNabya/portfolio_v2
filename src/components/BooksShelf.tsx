import { motion } from 'framer-motion';

interface BookItem {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  status: 'Reading' | 'Completed' | 'Want to Read';
}

const books: BookItem[] = [
  { id: 'almanack', title: 'The Almanack of Naval Ravikant', author: 'Eric Jorgenson', coverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&auto=format&fit=crop', status: 'Completed' },
  { id: 'atomic', title: 'Atomic Habits', author: 'James Clear', coverUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=400&auto=format&fit=crop', status: 'Reading' },
  { id: 'range', title: 'Range', author: 'David Epstein', coverUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=400&auto=format&fit=crop', status: 'Want to Read' },
  { id: 'design', title: 'The Design of Everyday Things', author: 'Don Norman', coverUrl: 'https://images.unsplash.com/photo-1455885666463-9def0df56d07?q=80&w=400&auto=format&fit=crop', status: 'Completed' },
  { id: 'influence', title: 'Influence', author: 'Robert Cialdini', coverUrl: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=400&auto=format&fit=crop', status: 'Reading' },
  { id: 'deepwork', title: 'Deep Work', author: 'Cal Newport', coverUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=400&auto=format&fit=crop', status: 'Want to Read' },
];

const statusClass = (s: BookItem['status']) => {
  switch (s) {
    case 'Reading':
      return 'bg-accent/10 text-accent border-accent/20';
    case 'Completed':
      return 'bg-green-100 text-green-700 border-green-200';
    case 'Want to Read':
      return 'bg-gray-100 text-gray-700 border-gray-200';
  }
};

const BooksShelf = () => {
  return (
    <section className="pt-12">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-900">Bookshelf</h2>
        <div className="w-16 h-[3px] bg-accent mt-2" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((b, idx) => (
          <motion.div
            key={b.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: idx * 0.05 }}
            whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}
            className="rounded-xl border border-gray-200 bg-white overflow-hidden"
          >
            <div className="aspect-[3/4] w-full bg-gray-100">
              <img src={b.coverUrl} alt={`${b.title} cover`} className="h-full w-full object-cover" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-base font-semibold text-gray-900 truncate">{b.title}</div>
                  <div className="text-sm text-gray-600 truncate">{b.author}</div>
                </div>
                <span className={`shrink-0 rounded-full border px-2.5 py-1 text-xs font-medium ${statusClass(b.status)}`}>{b.status}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BooksShelf;













