import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Missions from './components/Missions';
import LiveData from './components/LiveData';
import Careers from './components/Careers';
import News from './components/News';
import Partnerships from './components/Partnerships';
import Gallery from './components/Gallery';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#05050a] text-white selection:bg-cyan-500/30 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Missions />
        <LiveData />
        <Careers />
        <News />
        <Partnerships />
        <Gallery />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
