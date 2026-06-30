import { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "How often should I visit the dentist?",
    answer: "It is generally recommended to visit the dentist every six months for a routine checkup and cleaning. However, depending on your oral health needs, your dentist might suggest more frequent visits."
  },
  {
    question: "What should I do in a dental emergency?",
    answer: "If you experience a dental emergency, such as a knocked-out tooth, severe toothache, or a broken tooth, contact our clinic immediately. We offer emergency dental services to address urgent issues promptly."
  },
  {
    question: "Do you offer treatments for sensitive teeth?",
    answer: "Yes, we provide various treatments for sensitive teeth. During your consultation, our dentist will evaluate the cause of your sensitivity and recommend appropriate solutions, such as desensitizing toothpaste, fluoride treatments, or dental bonding."
  },
  {
    question: "How can I improve the whiteness of my teeth?",
    answer: "We offer professional teeth whitening treatments that are safe and effective. Unlike over-the-counter products, our professional whitening can significantly brighten your smile in just one visit or through custom take-home kits."
  },
  {
    question: "Are dental X-rays safe?",
    answer: "Yes, dental X-rays are safe. We use advanced digital X-ray technology, which significantly reduces radiation exposure compared to traditional X-rays. They are essential for diagnosing issues that aren't visible during a regular exam."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo('.faq-header-anim', 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo('.faq-item-anim',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="faq-header-anim inline-block py-1 px-3 rounded-full bg-clinic-green-light text-clinic-dark text-sm font-medium mb-4">
            (FAQ)
          </span>
          <h2 className="faq-header-anim text-3xl md:text-5xl font-semibold text-clinic-dark mb-6">
            Frequently Asked Questions
          </h2>
          <p className="faq-header-anim text-gray-600 max-w-2xl mx-auto text-lg">
            Find answers to common questions about our dental services, treatments, and patient care.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="faq-item-anim bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-medium text-clinic-dark pr-8">{faq.question}</span>
                  <div className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
