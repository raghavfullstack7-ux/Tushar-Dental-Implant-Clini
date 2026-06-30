import { ArrowRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Works() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content fetching
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    // Animate Header
    gsap.fromTo(
      ".works-header-anim",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        }
      }
    );

    if (!isLoading) {
      // Animate Images
      const cards = gsap.utils.toArray('.works-card-anim');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imagesRef.current,
            start: "top 75%",
          }
        }
      );
    }
  }, { scope: sectionRef, dependencies: [isLoading] });

  return (
    <section id="gallery" ref={sectionRef} className="py-16 md:py-24 bg-clinic-green-light rounded-[2rem] md:rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 mb-16 md:mb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Grid */}
        <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end">
          <div>
             <span className="works-header-anim flex items-center gap-4 text-sm font-medium text-gray-600 uppercase tracking-widest mb-6">
              (our works) <div className="w-12 h-[1px] bg-gray-400"></div>
            </span>
            <p className="works-header-anim text-gray-700 max-w-sm mb-10">
              Our team of skilled and experienced dental professionals strives to create a comfortable and welcoming environment for each patient, delivering exceptional results.
            </p>
            <a 
              href="#appointment" 
              className="works-header-anim inline-flex items-center gap-3 bg-clinic-dark text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors group"
            >
              Book Appointment 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="works-header-anim mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-clinic-green-light object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" alt="Patient" />
                <img className="w-10 h-10 rounded-full border-2 border-clinic-green-light object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" alt="Patient" />
                <img className="w-10 h-10 rounded-full border-2 border-clinic-green-light object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64" alt="Patient" />
              </div>
              <span className="font-medium text-sm text-clinic-dark">10K+ happy<br />member</span>
            </div>
          </div>
          
          <div>
            <h2 className="works-header-anim text-4xl md:text-5xl lg:text-6xl font-semibold text-clinic-dark leading-tight">
              Services We Provide<br />Are Listed Below
            </h2>
          </div>
        </div>

        {/* Images Grid */}
        <div ref={imagesRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {isLoading ? (
            Array.from({ length: 2 }).map((_, index) => (
              <div key={`works-skeleton-${index}`} className="group cursor-pointer">
                <div className="rounded-3xl overflow-hidden h-[400px] mb-6 bg-gray-200 animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded-md w-1/2 mb-3 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded-md w-3/4 animate-pulse"></div>
              </div>
            ))
          ) : (
            <>
              <div className="works-card-anim group cursor-pointer">
                <div className="rounded-3xl overflow-hidden h-[400px] mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop" 
                    alt="Teeth Straightening" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold text-clinic-dark mb-2">Teeth Straightening</h3>
                <p className="text-gray-600 text-sm">Improve your smile with cleaning.</p>
              </div>

              <div className="works-card-anim group cursor-pointer">
                <div className="rounded-3xl overflow-hidden h-[400px] mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop" 
                    alt="Dental Implant" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold text-clinic-dark mb-2">Dental Implant</h3>
                <p className="text-gray-600 text-sm">Improve your smile with cleaning.</p>
              </div>
            </>
          )}
        </div>

      </div>
    </section>
  );
}
