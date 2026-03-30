import { motion } from 'motion/react';
import { Activity, Globe, Radio, Satellite } from 'lucide-react';

export default function LiveData() {
  return (
    <section className="py-24 relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.05)_0%,transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-cyan-400 text-sm font-medium mb-6"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            LIVE TELEMETRY
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-display mb-4"
          >
            Mission Control <span className="text-gradient">Dashboard</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Active Satellites */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-3xl border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Satellite className="w-24 h-24" />
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                <Satellite className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-lg">Active Satellites</h3>
            </div>
            <div className="text-5xl font-display font-bold mb-2">54</div>
            <p className="text-gray-400 text-sm">Currently operational in various orbits providing communication, navigation, and earth observation.</p>
          </motion.div>

          {/* Deep Space Network */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-panel p-8 rounded-3xl border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Radio className="w-24 h-24" />
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-orange-500/20 text-orange-500">
                <Radio className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-lg">IDSN Status</h3>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-1">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Byalalu DSN-32</span>
                  <span className="text-green-400">Tracking</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-[85%]"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Byalalu DSN-18</span>
                  <span className="text-cyan-400">Standby</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-500 w-[30%]"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Next Launch */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-8 rounded-3xl border border-white/5 relative overflow-hidden bg-gradient-to-br from-white/5 to-transparent"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-white/10 text-white">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-lg">Next Launch (T-Minus)</h3>
            </div>
            <div className="grid grid-cols-4 gap-2 text-center mb-6">
              <div className="glass-panel rounded-lg py-3">
                <div className="text-2xl font-display font-bold text-orange-400">14</div>
                <div className="text-[10px] text-gray-400 uppercase">Days</div>
              </div>
              <div className="glass-panel rounded-lg py-3">
                <div className="text-2xl font-display font-bold">08</div>
                <div className="text-[10px] text-gray-400 uppercase">Hrs</div>
              </div>
              <div className="glass-panel rounded-lg py-3">
                <div className="text-2xl font-display font-bold">45</div>
                <div className="text-[10px] text-gray-400 uppercase">Min</div>
              </div>
              <div className="glass-panel rounded-lg py-3">
                <div className="text-2xl font-display font-bold">22</div>
                <div className="text-[10px] text-gray-400 uppercase">Sec</div>
              </div>
            </div>
            <div className="text-sm">
              <span className="text-gray-400">Mission:</span> <span className="font-medium">GSLV-F14 / INSAT-3DS</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
