import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

/* Mini Ashoka Chakra for watermark */
function ChakraWatermark() {
  const spokes = 24;
  const cx = 100, cy = 100, r = 90, ir = 15;
  return (
    <svg viewBox="0 0 200 200" className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 opacity-[0.06] pointer-events-none" aria-hidden="true">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="white" strokeWidth="3" />
      <circle cx={cx} cy={cy} r={ir} fill="none" stroke="white" strokeWidth="2.5" />
      {Array.from({ length: spokes }).map((_, i) => {
        const angle = (i * 360) / spokes - 90;
        const rad = (angle * Math.PI) / 180;
        return (
          <line key={i} x1={cx + ir * Math.cos(rad)} y1={cy + ir * Math.sin(rad)}
                x2={cx + r * Math.cos(rad)} y2={cy + r * Math.sin(rad)}
                stroke="white" strokeWidth="1.5" />
        );
      })}
    </svg>
  );
}

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section id="cta" className="relative bg-saffron overflow-hidden">
      <ChakraWatermark />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Ready to be an informed voter?
          </h2>
          <p className="mt-4 text-saffron-light text-base sm:text-lg max-w-xl mx-auto">
            Join millions of Indians who deserve to understand their own democracy.
          </p>
          <motion.button
            onClick={() => navigate('/chat')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 mt-8 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-saffron rounded-full
                       font-bold text-base sm:text-lg shadow-xl shadow-black/10
                       hover:bg-saffron-light transition-colors duration-200 cursor-pointer"
          >
            Start Learning Now
            <span>→</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
