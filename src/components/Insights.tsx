import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const insights = [
  {
    date: "July 9, 2025",
    title: "The Importance of Regular Dental Checkups",
    excerpt: "Discover why bi-annual visits to your dentist are crucial for maintaining optimal oral health and preventing future complications.",
    bgImage: false,
  },
  {
    date: "June 24, 2025",
    title: "Choosing the Right Toothbrush",
    excerpt: "Manual or electric? Soft or medium bristles? We break down the options to help you choose the best tool for your smile.",
    bgImage: true,
  },
  {
    date: "May 15, 2025",
    title: "Understanding Teeth Whitening",
    excerpt: "Explore the different methods of teeth whitening available today, from in-office treatments to at-home kits, and find what's right for you.",
    bgImage: false,
  }
];

export default function Insights() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header anim
    gsap.fromTo(
      ".insights-header-anim",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );

    // Cards anim
    const cards = gsap.utils.toArray('.insights-card-anim');
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
    <section ref={sectionRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="insights-header-anim text-4xl md:text-5xl font-semibold text-clinic-dark mb-16">
          Latest Insights
        </h2>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((item, index) => (
            <div
              key={index}
              className={`insights-card-anim rounded-3xl p-8 flex flex-col h-[400px] justify-between relative overflow-hidden ${
                item.bgImage ? '' : 'bg-[#F2EFEA]'
              }`}
            >
              {item.bgImage && (
                <>
                  <div 
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-clinic-dark/90 z-0" />
                </>
              )}
              
              <div className="relative z-10 flex justify-center">
                <span className={`text-xs font-medium px-4 py-1.5 rounded-full border ${
                  item.bgImage ? 'border-white/30 text-white bg-black/20 backdrop-blur-sm' : 'border-gray-300 text-gray-600'
                }`}>
                  {item.date}
                </span>
              </div>
              
              <div className="relative z-10 text-center flex flex-col items-center flex-grow justify-center mt-8">
                <h3 className={`text-2xl font-bold mb-6 max-w-[200px] ${
                  item.bgImage ? 'text-white' : 'text-slate-800'
                }`}>
                  {item.title}
                </h3>
              </div>

              <div className="relative z-10">
                <p className={`text-sm text-center ${
                  item.bgImage ? 'text-gray-200' : 'text-slate-500'
                }`}>
                  {item.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
