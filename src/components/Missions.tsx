import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const missions = [
  {
    title: "Chandrayaan-3",
    category: "Lunar Exploration",
    description: "Historic mission that successfully demonstrated safe and soft landing on the lunar south pole.",
    image: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?q=80&w=2070&auto=format&fit=crop",
    status: "Completed"
  },
  {
    title: "Gaganyaan",
    category: "Human Spaceflight",
    description: "India's maiden human spaceflight programme to demonstrate capability to send humans to LEO.",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop",
    status: "In Progress"
  },
  {
    title: "Aditya-L1",
    category: "Solar Observatory",
    description: "First Indian space-based observatory to study the Sun from a halo orbit around first Sun-Earth Lagrangian point.",
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2070&auto=format&fit=crop",
    status: "Active"
  },
  {
    title: "Mangalyaan",
    category: "Mars Orbiter Mission",
    description: "India's first interplanetary mission to planet Mars, making ISRO the fourth space agency to reach Mars.",
    image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2008&auto=format&fit=crop",
    status: "Completed"
  }
];

export default function Missions() {
  return (
    <section id="missions" className="py-24 relative z-10 bg-[#0a0a14]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Featured <span className="text-gradient">Missions</span></h2>
            <p className="text-gray-400 text-lg">Discover our landmark achievements and upcoming endeavors that push the boundaries of space exploration.</p>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="shrink-0 px-6 py-3 rounded-full glass-panel text-white font-medium hover:bg-white/10 transition-all flex items-center gap-2 cursor-pointer"
          >
            View All Missions
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass-panel border border-white/5 hover:border-white/20 transition-colors cursor-pointer"
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <img 
                  src={mission.image} 
                  alt={mission.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-[#0a0a14]/50 to-transparent opacity-80"></div>
                
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass-panel text-xs font-medium backdrop-blur-md">
                  <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                    mission.status === 'Active' ? 'bg-green-500' : 
                    mission.status === 'In Progress' ? 'bg-cyan-400' : 'bg-gray-400'
                  }`}></span>
                  {mission.status}
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="text-cyan-400 text-sm font-medium mb-2 uppercase tracking-wider">{mission.category}</div>
                <div className="flex justify-between items-end gap-4">
                  <div>
                    <h3 className="text-2xl font-bold font-display mb-2 group-hover:text-orange-400 transition-colors">{mission.title}</h3>
                    <p className="text-gray-400 text-sm line-clamp-2">{mission.description}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
