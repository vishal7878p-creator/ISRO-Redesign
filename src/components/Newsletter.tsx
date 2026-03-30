import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 md:p-16 rounded-[2.5rem] border border-white/10 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-cyan-500/10"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Stay Updated with <span className="text-gradient">Space Innovations</span></h2>
            <p className="text-gray-400 mb-8">Subscribe to our newsletter to receive the latest mission updates, scientific discoveries, and educational opportunities directly in your inbox.</p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                required
              />
              <button 
                type="submit"
                className="px-8 py-4 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2 shrink-0 cursor-pointer"
              >
                Subscribe <Send className="w-4 h-4" />
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4">We respect your privacy. No spam, ever.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
