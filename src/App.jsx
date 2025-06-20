import { useState } from "react";
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Workflow from './components/Workflow';
import Price from './components/Price';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`${dark ? "bg-neutral-900 text-white" : "bg-white text-black"} min-h-screen transition-colors duration-300`}>
      <Navbar onToggleTheme={() => setDark(!dark)} isDark={dark} />
      <div className="max-w-7xl mx-auto pt-10 px-2">
        <HeroSection />
      </div>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <FeatureSection />
        <Workflow />
        <Price />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}

export default App;
