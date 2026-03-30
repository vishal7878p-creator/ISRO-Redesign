import { motion } from 'motion/react';
import { Target, Eye, Rocket } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Pioneering the <span className="text-gradient">Final Frontier</span></h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              The Indian Space Research Organisation (ISRO) is the space agency of India. Our vision is to harness space technology for national development, while pursuing space science research and planetary exploration.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center shrink-0 text-cyan-400">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                  <p className="text-gray-400">Design and develop launch vehicles, satellites, and related technologies for providing access to space.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center shrink-0 text-orange-500">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                  <p className="text-gray-400">Harness space technology for national development, while pursuing space science research and planetary exploration.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden relative glass-panel p-2">
              <img 
                src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1974&auto=format&fit=crop" 
                alt="Satellite in space" 
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05050a] via-transparent to-transparent"></div>
            </div>
            
            {/* Floating badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass-panel p-6 rounded-2xl shadow-2xl backdrop-blur-xl border border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                  <Rocket className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">1969</div>
                  <div className="text-sm text-gray-400">Year Established</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
