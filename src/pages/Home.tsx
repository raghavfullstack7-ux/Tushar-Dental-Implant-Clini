import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Works from '../components/Works';
import Consultation from '../components/Consultation';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Insights from '../components/Insights';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Works />
      <Consultation />
      <Testimonials />
      <FAQ />
      <Insights />
      <Contact />
    </>
  );
}
