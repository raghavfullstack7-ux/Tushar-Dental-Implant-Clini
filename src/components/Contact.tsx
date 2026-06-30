import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

gsap.registerPlugin(ScrollTrigger);

import { toast } from 'sonner';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".contact-header-anim",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        }
      }
    );

    gsap.fromTo(
      ".contact-content-left",
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-content-left",
          start: "top 80%",
        }
      }
    );

    gsap.fromTo(
      ".contact-content-right",
      { opacity: 0, x: 30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-content-right",
          start: "top 80%",
        }
      }
    );
  }, { scope: sectionRef });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      // Simulate API call
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate 90% success rate
          if (Math.random() > 0.1) {
            resolve('Success');
          } else {
            reject(new Error('Network error'));
          }
        }, 1500);
      });
      
      console.log('Form submitted:', data);
      toast.success('Appointment Request Sent!', {
        description: 'We will get back to you shortly to confirm your slot.',
      });
      reset();
    } catch (error) {
      toast.error('Submission Failed', {
        description: 'There was an error sending your request. Please try again.',
      });
    }
  };

  const whatsappNumber = "1234567890"; // Replace with actual number
  const whatsappMessage = encodeURIComponent("Hello, I would like to book an appointment.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contact" ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10 md:mb-16">
          <h2 className="contact-header-anim text-4xl md:text-5xl font-semibold text-clinic-dark mb-4">
            Get In Touch
          </h2>
          <p className="contact-header-anim text-gray-600 max-w-2xl mx-auto">
            Ready to schedule your visit or have a question? Contact us today. We're here to help you achieve your best smile.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info & Map */}
          <div className="contact-content-left flex flex-col gap-8">
            <div className="bg-clinic-bg rounded-3xl p-8 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-clinic-green-light flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-clinic-dark" />
                </div>
                <div>
                  <h4 className="font-semibold text-clinic-dark mb-1">Our Location</h4>
                  <p className="text-gray-600 text-sm">123 Smile Avenue, Dental District<br />Cityville, ST 12345</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-clinic-blue-light flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-clinic-dark" />
                </div>
                <div>
                  <h4 className="font-semibold text-clinic-dark mb-1">Phone & WhatsApp</h4>
                  <p className="text-gray-600 text-sm">+1 (234) 567-890</p>
                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-600 text-sm font-medium mt-2 hover:underline"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-clinic-purple-light flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-clinic-dark" />
                </div>
                <div>
                  <h4 className="font-semibold text-clinic-dark mb-1">Email Us</h4>
                  <p className="text-gray-600 text-sm">info@tushardental.com</p>
                </div>
              </div>
            </div>

            {/* Map iframe */}
            <div className="rounded-3xl overflow-hidden h-[300px] bg-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1684351654826!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="contact-content-right">
            <div className="bg-clinic-bg rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-semibold text-clinic-dark mb-6">Send an Inquiry</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      {...register('name')}
                      type="text" 
                      id="name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-clinic-dark focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input 
                        {...register('email')}
                        type="email" 
                        id="email"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-clinic-dark focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input 
                        {...register('phone')}
                        type="tel" 
                        id="phone"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-clinic-dark focus:border-transparent transition-all"
                        placeholder="+1 (234) 567-890"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      {...register('message')}
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-clinic-dark focus:border-transparent transition-all resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-clinic-dark text-white py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed mt-2 flex justify-center items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Inquiry'
                    )}
                  </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
