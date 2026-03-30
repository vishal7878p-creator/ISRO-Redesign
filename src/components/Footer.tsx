import { Rocket, Twitter, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#020205] pt-20 pb-10 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Rocket className="w-8 h-8 text-orange-500" />
              <span className="font-display font-bold text-2xl tracking-wider">ISRO</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Indian Space Research Organisation<br />
              Department of Space, Government of India<br />
              Antariksh Bhavan, New BEL Road<br />
              Bengaluru 560 094, India
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">About ISRO</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Missions</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Spacecraft</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Launchers</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Applications</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Tenders</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Right to Information</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Media & PR</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white">Related Sites</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Department of Space</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">IN-SPACe</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">NSIL</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">IIRS</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">VSSC</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Indian Space Research Organisation. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Hyperlinking Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
