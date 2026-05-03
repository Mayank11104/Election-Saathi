import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Vote } from 'lucide-react';

export default function Navbar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[52px] lg:h-[60px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1.5 sm:gap-2 group">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-saffron/10 flex items-center justify-center group-hover:bg-saffron/20 transition-colors shrink-0">
              <Vote className="w-4 h-4 sm:w-5 sm:h-5 text-saffron" />
            </div>
            <span className="text-[15px] lg:text-[18px] font-bold text-saffron font-[var(--font-heading)] truncate">
              Election Saathi
            </span>
          </a>

          {/* CTA Button */}
          <motion.button
            onClick={() => navigate('/chat')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-3.5 py-1.5 sm:px-6 sm:py-2.5 bg-saffron text-white rounded-full text-xs sm:text-sm font-semibold
                       hover:bg-saffron-hover transition-colors duration-200 shadow-sm hover:shadow-md
                       flex items-center gap-1 sm:gap-1.5 cursor-pointer whitespace-nowrap shrink-0 ml-2"
          >
            <span className="hidden sm:inline">Start Learning</span>
            <span className="inline sm:hidden">Start</span>
            <span className="text-sm sm:text-base leading-none">→</span>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
