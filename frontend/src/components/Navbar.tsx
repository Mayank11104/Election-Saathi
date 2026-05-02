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
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-saffron/10 flex items-center justify-center group-hover:bg-saffron/20 transition-colors">
              <Vote className="w-5 h-5 text-saffron" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-saffron font-[var(--font-heading)]">
              Election Saathi
            </span>
          </a>

          {/* CTA Button */}
          <motion.button
            onClick={() => navigate('/chat')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2 sm:px-5 sm:py-2.5 bg-saffron text-white rounded-full text-sm font-semibold
                       hover:bg-saffron-hover transition-colors duration-200 shadow-sm hover:shadow-md
                       flex items-center gap-1.5 cursor-pointer"
          >
            Start Learning
            <span className="text-base">→</span>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
