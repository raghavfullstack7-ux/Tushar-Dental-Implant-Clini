import { ArrowRight, CheckCircle2, ShieldCheck, HeartPulse } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const section = sectionRef.current;
    
    // Animate the title and description
    gsap.fromTo(
      ".about-text-anim",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        }
      }
    );

    // Animate the images
    const images = gsap.utils.toArray('.about-img-anim');
    gsap.fromTo(
      images,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imagesRef.current,
          start: "top 75%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col">
            <span className="about-text-anim text-sm font-medium text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-4">
              <div className="w-8 h-[1px] bg-gray-300"></div>
              (about us)
            </span>
            <h2 className="about-text-anim text-4xl md:text-5xl lg:text-6xl font-semibold text-clinic-dark leading-tight mb-6">
              Transforming Smiles<br />with Precision & Care
            </h2>
            <p className="about-text-anim text-gray-600 mb-10 text-lg leading-relaxed max-w-lg">
              At Tushar Dental, we believe that a healthy smile is the foundation of overall well-being. Our state-of-the-art facility combines advanced dental technology with compassionate care to deliver exceptional results.
            </p>

            <div className="about-text-anim flex flex-col gap-6 mb-12">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-clinic-green-light flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-7 h-7 text-clinic-dark" />
                </div>
                <div>
                  <h4 className="font-semibold text-clinic-dark text-lg mb-1">Advanced Dental Technology</h4>
                  <p className="text-sm text-gray-500">Utilizing the latest tools for precise and quick diagnostics.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-clinic-green-light flex items-center justify-center flex-shrink-0">
                   <CheckCircle2 className="w-7 h-7 text-clinic-dark" />
                </div>
                <div>
                  <h4 className="font-semibold text-clinic-dark text-lg mb-1">Expert Team of Specialists</h4>
                  <p className="text-sm text-gray-500">Highly qualified professionals dedicated to your smile.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-clinic-green-light flex items-center justify-center flex-shrink-0">
                  <HeartPulse className="w-7 h-7 text-clinic-dark" />
                </div>
                <div>
                  <h4 className="font-semibold text-clinic-dark text-lg mb-1">Patient-Centered Comfort</h4>
                  <p className="text-sm text-gray-500">A relaxing environment designed for anxiety-free treatments.</p>
                </div>
              </div>
            </div>

            <div>
              <Link 
                to="/about" 
                className="about-text-anim inline-flex items-center gap-3 bg-clinic-dark text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors group w-max"
              >
                Discover More 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Content - Images Bento Grid */}
          <div ref={imagesRef} className="flex flex-col md:grid md:grid-cols-2 gap-4 h-auto md:h-[600px] lg:h-[750px] mt-12 lg:mt-0">
            {/* Main Large Image */}
            <div className="about-img-anim rounded-[2rem] overflow-hidden relative h-[300px] sm:h-[400px] md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop" 
                alt="Dental checkup" 
                className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            {/* Right Column Grid */}
            <div className="flex flex-col md:grid md:grid-rows-12 gap-4 h-auto md:h-full">
              {/* Top Right */}
              <div className="about-img-anim md:row-span-7 rounded-[2rem] overflow-hidden relative h-[250px] sm:h-[300px] md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop" 
                  alt="Dental tools" 
                  className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Bottom Right Split */}
              <div className="md:row-span-5 grid grid-cols-2 gap-4 h-[200px] md:h-auto">
                <div className="about-img-anim rounded-[2rem] overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
                    alt="Clinic interior" 
                    className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="about-img-anim rounded-[2rem] bg-[#F2EFEA] p-4 flex flex-col justify-center items-center text-center">
                  <h3 className="text-4xl lg:text-5xl font-semibold text-clinic-dark mb-2">15+</h3>
                  <p className="text-gray-600 font-medium text-sm">Years of<br />Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
