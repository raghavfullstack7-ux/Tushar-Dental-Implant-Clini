import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".hero-anim",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.2,
        ease: "power3.out",
      }
    );
  }, { scope: heroRef });

  return (
    <section id="home" ref={heroRef} className="relative h-screen min-h-[600px] w-full bg-clinic-dark overflow-hidden rounded-b-[3rem] md:rounded-b-[4rem]">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-24 md:pt-32 lg:pt-40">
        <div className="max-w-3xl">
          <h1 className="hero-anim text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tight leading-[1.1]">
            Exceptional<br />
            Dental Care
          </h1>
          
          <p className="hero-anim mt-6 text-lg md:text-xl text-gray-200 max-w-lg font-light leading-relaxed">
            Experience world-class dentistry with our team of specialists. We provide comprehensive treatments tailored to your unique smile.
          </p>

          <div className="hero-anim mt-10">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors group"
            >
              Book Appointment 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
