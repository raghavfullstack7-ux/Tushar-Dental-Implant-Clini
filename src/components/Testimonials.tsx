import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    title: "Painless and Professional",
    content: "The best dental experience I've ever had. The staff is incredibly friendly, and the doctors took the time to explain every step of the procedure. Highly recommended!",
    name: "Sarah Jenkins",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=64&h=64"
  },
  {
    title: "Transformed My Smile",
    content: "After years of hiding my teeth, I finally have the confidence to smile again. The cosmetic dentistry services here are top-notch and truly life-changing.",
    name: "David Chen",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64"
  },
  {
    title: "Great with Kids",
    content: "My children used to dread going to the dentist, but the gentle and patient approach of the team here has completely changed their perspective. Thank you!",
    name: "Emily Rodriguez",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64"
  }
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header anim
    gsap.fromTo(
      ".testi-header-anim",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );

    // Cards anim
    const cards = gsap.utils.toArray('.testi-card-anim');
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 75%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-clinic-blue-light rounded-[2rem] md:rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 mb-16 md:mb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h2 className="testi-header-anim text-4xl md:text-5xl font-semibold text-clinic-dark mb-4">
              What Our Clients Say
            </h2>
            <p className="testi-header-anim text-gray-700 max-w-sm text-sm">
              Discover how our commitment to excellence and patient comfort has transformed the lives and smiles of our community.
            </p>
          </div>
          <div className="testi-header-anim flex gap-4">
            <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm">
              <ArrowLeft className="w-5 h-5 text-clinic-dark" />
            </button>
            <button className="w-12 h-12 rounded-full bg-clinic-dark flex items-center justify-center hover:bg-gray-800 transition-colors shadow-sm">
              <ArrowRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="testi-card-anim bg-white rounded-3xl p-8 flex flex-col h-full shadow-sm"
            >
              <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full mb-6 object-cover" />
              <h3 className="text-lg font-semibold text-clinic-dark mb-4">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-8 flex-grow">
                "{item.content}"
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-medium text-sm text-clinic-dark">{item.name}</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
