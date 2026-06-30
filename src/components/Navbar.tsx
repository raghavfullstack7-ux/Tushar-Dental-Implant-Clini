import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: '/contact' },
  ];

  const isSolid = !isHomePage || scrolled || mobileMenuOpen;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200 py-4 shadow-sm' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className={`text-xl md:text-2xl font-bold tracking-tight z-10 flex-shrink-0 transition-colors ${isSolid ? 'text-clinic-dark' : 'text-white'}`}>
           Tushar Dental
        </Link>

        {/* Center Pill Nav - Desktop */}
        <div className={`hidden lg:flex items-center space-x-1 backdrop-blur-md rounded-full px-2 py-2 transition-colors ${isSolid ? 'bg-gray-100/80 border border-gray-200' : 'bg-white/10 border border-white/20'}`}>
           {navLinks.map((link) => {
             const isActive = location.pathname === link.href;
             return (
              <Link
                key={link.name}
                to={link.href}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? (isSolid ? 'bg-clinic-dark text-white' : 'bg-white text-black')
                    : (isSolid ? 'text-gray-600 hover:bg-gray-200' : 'text-white hover:bg-white/20')
                }`}
              >
                {link.name}
              </Link>
             );
           })}
         </div>

        {/* CTA Button */}
        <Link
          to="/contact"
          className={`hidden md:flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors z-10 ${
            isSolid ? 'bg-clinic-dark text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-100'
          }`}
        >
          <Phone className="w-4 h-4" />
          <span>Call Now</span>
        </Link>
        
        {/* Mobile menu button */}
        <button
          className={`lg:hidden p-2 rounded-md z-10 ${isSolid ? 'text-clinic-dark' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-1 shadow-lg overflow-hidden absolute top-full left-0 right-0"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium ${
                    isActive ? 'bg-clinic-green-light text-clinic-dark' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 w-full px-6 py-3 bg-clinic-dark text-white rounded-xl font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
