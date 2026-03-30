import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

const newsItems = [
  {
    date: "Oct 21, 2023",
    category: "Mission Update",
    title: "Gaganyaan TV-D1 Mission Successfully Accomplished",
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop"
  },
  {
    date: "Sep 02, 2023",
    category: "Launch",
    title: "Aditya-L1 Successfully Launched by PSLV-C57",
    image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2070&auto=format&fit=crop"
  },
  {
    date: "Aug 23, 2023",
    category: "Achievement",
    title: "Chandrayaan-3 Successfully Lands on Lunar South Pole",
    image: "https://images.unsplash.com/photo-1614732414444-098e5f112289?q=80&w=1974&auto=format&fit=crop"
  }
];

export default function News() {
  return (
    <section id="news" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Latest <span className="text-gradient">Updates</span></h2>
            <p className="text-gray-400">Stay informed with the latest news, launches, and discoveries.</p>
          </div>
          <button className="hidden md:block px-6 py-3 rounded-full glass-panel text-white font-medium hover:bg-white/10 transition-all cursor-pointer">
            Read All News
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-xs font-medium border border-white/10">
                  {item.category}
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                <Calendar className="w-4 h-4" />
                {item.date}
              </div>
              <h3 className="text-xl font-bold font-display group-hover:text-cyan-400 transition-colors line-clamp-2">
                {item.title}
              </h3>
            </motion.article>
          ))}
        </div>
        
        <button className="mt-8 w-full md:hidden px-6 py-3 rounded-full glass-panel text-white font-medium hover:bg-white/10 transition-all cursor-pointer">
          Read All News
        </button>
      </div>
    </section>
  );
}
