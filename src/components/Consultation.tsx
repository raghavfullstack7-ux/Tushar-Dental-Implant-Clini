import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { Link } from 'react-router-dom';

export default function Consultation() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Left Content Anim
    gsap.fromTo(
      ".consult-text-anim",
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftContentRef.current,
          start: "top 80%",
        }
      }
    );

    // Right Content Anim
    const rightCards = gsap.utils.toArray('.consult-card-anim');
    gsap.fromTo(
      rightCards,
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightContentRef.current,
          start: "top 75%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div ref={leftContentRef}>
            <span className="consult-text-anim text-sm font-medium text-orange-500 uppercase tracking-widest mb-6 block">
              (cost care)
            </span>
            <h2 className="consult-text-anim text-4xl md:text-5xl lg:text-6xl font-semibold text-clinic-dark leading-tight mb-8">
              Expert Consultations<br />Tailored for You
            </h2>
            <p className="consult-text-anim text-gray-600 mb-10 max-w-md">
              Our specialists carefully evaluate your dental health to provide actionable insights and comprehensive treatment plans.
            </p>
          </div>

          {/* Right Content */}
          <div ref={rightContentRef} className="grid grid-cols-2 gap-6 relative">
            <div className="consult-card-anim rounded-3xl overflow-hidden h-[300px] col-span-2 md:col-span-1">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop" 
                alt="Patient consultation" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="consult-card-anim col-span-2 md:col-span-1 flex flex-col justify-center gap-6">
              <p className="text-gray-600 text-sm">
                Take control of your dental health with a comprehensive assessment unlike any other. We use the latest innovations, including digital X-rays, intraoral cameras, and 3D imaging, to ensure accurate diagnosis and personalized care.
              </p>
              <div>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-6 py-4 rounded-2xl text-sm font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors group"
                >
                  Book Appointment 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="consult-card-anim bg-white rounded-3xl p-8 flex flex-col justify-center col-span-2 md:col-span-1 border border-gray-100 shadow-sm">
              <h3 className="text-4xl font-extrabold text-slate-900 mb-2">98%</h3>
              <p className="text-slate-500 text-sm">Client satisfaction with<br />our service</p>
            </div>

            <div className="consult-card-anim rounded-3xl overflow-hidden h-[200px] col-span-2 md:col-span-1 relative">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop" 
                alt="Dental tool" 
                className="w-full h-full object-cover"
              />
              {/* Overlapping small image */}
              <div className="absolute -right-4 -bottom-4 w-32 h-32 rounded-3xl overflow-hidden border-4 border-clinic-bg hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop" 
                  alt="Smile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
