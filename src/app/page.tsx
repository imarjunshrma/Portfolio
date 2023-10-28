import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import HeroSection from '@/components/HeroSection';


export default function Home() {

  return (
    <div className='relative'>
      <Header />
      {/* banner section */}
      <HeroSection />
      {/* about-me */}
      <About />
      {/* services section */}
      <Services />
      {/* contact-section */}
      <Contact />
      <Footer />
    </div>
  )
}
