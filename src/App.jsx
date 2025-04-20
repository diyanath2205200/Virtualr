import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Workflow  from './components/Workflow';
import Price from './components/Price';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection></HeroSection>
      <FeatureSection></FeatureSection>
      <Workflow></Workflow>
      <Price></Price>
      <Testimonials></Testimonials>
      <Footer></Footer>
      </div>
    </>
  )
}

export default App
