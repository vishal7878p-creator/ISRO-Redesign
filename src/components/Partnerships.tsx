import { motion } from 'motion/react';

const partners = [
  { name: "NASA", role: "NISAR Mission Partner" },
  { name: "ESA", role: "Deep Space Tracking" },
  { name: "JAXA", role: "LUPEX Mission" },
  { name: "CNES", role: "TRISHNA Mission" },
  { name: "ROSCOSMOS", role: "Gaganyaan Training" },
  { name: "NSIL", role: "Commercial Arm" }
];

export default function Partnerships() {
  return (
    <section className="py-24 relative z-10 bg-[#0a0a14]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Global <span className="text-gradient">Collaborations</span></h2>
          <p className="text-gray-400 text-lg">Working together with international space agencies and industry leaders to advance humanity's presence in space.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors cursor-pointer border border-white/5"
            >
              <div className="text-xl font-bold font-display text-white mb-2">{partner.name}</div>
              <div className="text-xs text-gray-400">{partner.role}</div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-8 py-4 rounded-full glass-panel text-white font-medium hover:bg-white/10 transition-all cursor-pointer">
            Collaborate With Us
          </button>
        </div>
      </div>
    </section>
  );
}
