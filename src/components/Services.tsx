import { ArrowRight, Activity, Smile, Stethoscope, Play } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Cavity Protection',
    description: 'We offer advanced cavity protection and preventative care to keep your teeth healthy and strong for years to come.',
    icon: <Smile className="w-6 h-6 text-green-700" />,
    color: 'bg-clinic-green',
    link: '#',
  },
  {
    title: 'Root Canal Treatment',
    description: 'Our painless root canal procedures are designed to save your natural teeth and relieve you from severe dental pain instantly.',
    icon: <Activity className="w-6 h-6 text-purple-700" />,
    color: 'bg-clinic-purple-light',
    link: '#',
  },
  {
    title: 'Oral Surgery',
    description: 'From wisdom teeth removal to dental implants, our skilled surgeons provide safe and comfortable surgical treatments.',
    icon: <Stethoscope className="w-6 h-6 text-blue-700" />,
    color: 'bg-clinic-blue-light',
    link: '#',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content fetching
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    // Header anim
    gsap.fromTo(
      ".services-header-anim",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
        }
      }
    );

    if (!isLoading) {
      // Cards anim
      const cards = gsap.utils.toArray('.service-card-anim');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%",
          }
        }
      );
    }
  }, { scope: sectionRef, dependencies: [isLoading] });

  return (
    <section id="services" ref={sectionRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-20 gap-8">
          <h2 className="services-header-anim text-4xl md:text-5xl font-semibold text-clinic-dark max-w-sm leading-tight">
            Services We Provide<br />Are Listed Below
          </h2>
          <div className="services-header-anim max-w-xs">
            <p className="text-gray-600 mb-6 text-sm">
              Discover a wide range of top-tier dental services tailored to meet the unique needs of your smile.
            </p>
            <a 
              href="#appointment" 
              className="inline-flex items-center gap-3 bg-clinic-dark text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors group"
            >
              Book Appointment 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Services Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          
          {/* Vertical Text Divider */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-4 z-10">
            <div className="w-[1px] h-20 bg-gray-300"></div>
            <span className="text-xs font-medium text-gray-500 uppercase tracking-widest -rotate-90 origin-center whitespace-nowrap py-10">
              our services
            </span>
            <div className="w-[1px] h-20 bg-gray-300"></div>
          </div>

          {isLoading ? (
            // Skeleton Loaders
            Array.from({ length: 3 }).map((_, index) => (
              <div
                key={`skeleton-${index}`}
                className="bg-gray-100 rounded-3xl p-10 flex flex-col justify-between h-[320px] animate-pulse"
              >
                <div className="w-12 h-12 rounded-full bg-gray-200 mb-8"></div>
                <div>
                  <div className="h-6 bg-gray-200 rounded-md w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded-md w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded-md w-5/6 mb-6"></div>
                  <div className="h-4 bg-gray-200 rounded-md w-1/4"></div>
                </div>
              </div>
            ))
          ) : (
            services.map((service, index) => (
              <div
                key={service.title}
                className={`service-card-anim ${service.color} rounded-3xl p-10 flex flex-col justify-between h-[320px] group relative overflow-hidden`}
              >
                <div className="absolute top-8 right-8 text-black/10 group-hover:rotate-90 transition-transform duration-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </div>
                
                <div className="bg-white/50 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm mb-8">
                  {service.icon}
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-clinic-dark mb-4">{service.title}</h3>
                  <p className="text-gray-700 text-sm mb-6 max-w-sm">
                    {service.description}
                  </p>
                  <a href={service.link} className="inline-flex items-center gap-2 text-sm font-semibold text-clinic-dark hover:gap-3 transition-all border-b border-black pb-1">
                    Read More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))
          )}

          {/* Video Card */}
          {isLoading ? (
             <div className="bg-gray-100 rounded-3xl h-[320px] animate-pulse"></div>
          ) : (
            <div
              className="service-card-anim rounded-3xl overflow-hidden h-[320px] relative group cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop" 
                alt="Dental procedure video" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50">
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
