import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white rounded-t-[3rem] pt-24 pb-8 overflow-hidden mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          
          {/* Newsletter / Social */}
          <div className="lg:col-span-5">
            <h3 className="text-3xl font-semibold mb-8 max-w-sm">
              Offerings From Tushar News & Social
            </h3>
            
            <form className="relative border-b border-gray-600 pb-2 flex items-center mb-12">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="bg-transparent border-none outline-none w-full text-white placeholder:text-gray-500"
              />
              <button type="submit" className="text-white ml-4">
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Links 1 */}
          <div className="lg:col-span-2 lg:col-start-7 flex flex-col gap-4">
            <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link>
            <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link>
            <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Services</Link>
            <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors text-sm">Gallery</Link>
            <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Us</Link>
          </div>

          {/* Links 2 */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">Our Mission</Link>
            <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</Link>
            <Link to="/blogs" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</Link>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Press releases</a>
          </div>

          {/* Socials */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">Linkedin</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">Youtube</a>
          </div>
        </div>
      </div>

      {/* Large text */}
      <div className="w-full overflow-hidden flex justify-center -mb-4 md:-mb-12">
        <h1 className="text-[12vw] font-bold text-[#1F1F1F] tracking-tighter select-none whitespace-nowrap">
          Tushar Dental
        </h1>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 text-center">
         <p className="text-gray-500 text-xs">&copy; {new Date().getFullYear()} Tushar Dental & Implant Clinic. All rights reserved.</p>
      </div>
    </footer>
  );
}
