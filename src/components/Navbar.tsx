import { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-panel py-4' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Rocket className="w-8 h-8 text-orange-500" />
          <span className="font-display font-bold text-2xl tracking-wider">ISRO</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#missions" className="hover:text-white transition-colors">Missions</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#careers" className="hover:text-white transition-colors">Careers</a>
          <a href="#news" className="hover:text-white transition-colors">News</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="px-5 py-2.5 rounded-full text-sm font-medium border border-gray-700 hover:border-gray-500 transition-colors cursor-pointer">
            Partner Login
          </button>
          <button className="px-5 py-2.5 rounded-full text-sm font-medium bg-orange-500 text-white hover:bg-orange-600 transition-colors shadow-[0_0_15px_rgba(249,115,22,0.3)] cursor-pointer">
            Join ISRO
          </button>
        </div>

        <button className="md:hidden text-gray-300 cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </motion.nav>
  );
}
