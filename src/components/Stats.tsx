import { motion } from 'motion/react';

const stats = [
  { value: "124", label: "Spacecraft Missions" },
  { value: "96", label: "Launch Missions" },
  { value: "432", label: "Foreign Satellites" },
  { value: "50+", label: "Years of Excellence" }
];

export default function Stats() {
  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02] relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold font-display text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
