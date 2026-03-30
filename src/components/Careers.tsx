import { motion } from 'motion/react';
import { GraduationCap, FlaskConical, Wrench, ArrowRight } from 'lucide-react';

const opportunities = [
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Students & Academia",
    description: "Internships, research fellowships, and educational programs to nurture the next generation of space scientists.",
    color: "from-blue-500/20 to-cyan-500/20",
    textColor: "text-cyan-400"
  },
  {
    icon: <FlaskConical className="w-6 h-6" />,
    title: "Scientists & Researchers",
    description: "Join our core research teams working on planetary science, astrophysics, and advanced space technologies.",
    color: "from-orange-500/20 to-red-500/20",
    textColor: "text-orange-400"
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Engineers & Technicians",
    description: "Build the hardware and software that powers our launch vehicles, satellites, and ground stations.",
    color: "from-purple-500/20 to-pink-500/20",
    textColor: "text-purple-400"
  }
];

export default function Careers() {
  return (
    <section id="careers" className="py-24 relative z-10 bg-[#0a0a14]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-display mb-6"
          >
            Shape the Future of <span className="text-gradient">Space</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Join a team of visionaries, innovators, and explorers dedicated to pushing the boundaries of human knowledge and technological capability.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {opportunities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all group cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center ${item.textColor} mb-6`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">{item.description}</p>
              <div className={`flex items-center gap-2 text-sm font-medium ${item.textColor} group-hover:gap-3 transition-all`}>
                Explore Opportunities <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
