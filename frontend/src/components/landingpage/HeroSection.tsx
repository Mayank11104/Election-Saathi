import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

/* ── Ashoka Chakra SVG ── */
function AshokaChakra({ className = '' }: { className?: string }) {
  const spokes = 24;
  const cx = 100;
  const cy = 100;
  const outerR = 90;
  const innerR = 15;

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Ashoka Chakra"
    >
      <circle cx={cx} cy={cy} r={outerR} fill="none" stroke="#0D47A1" strokeWidth="3" />
      <circle cx={cx} cy={cy} r={innerR} fill="none" stroke="#0D47A1" strokeWidth="2.5" />
      {Array.from({ length: spokes }).map((_, i) => {
        const angle = (i * 360) / spokes - 90;
        const rad = (angle * Math.PI) / 180;
        const x2 = cx + outerR * Math.cos(rad);
        const y2 = cy + outerR * Math.sin(rad);
        const x1 = cx + innerR * Math.cos(rad);
        const y1 = cy + innerR * Math.sin(rad);
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#0D47A1" strokeWidth="1.5" strokeLinecap="round" />
        );
      })}
      {Array.from({ length: spokes }).map((_, i) => {
        const angle1 = (i * 360) / spokes - 90;
        const angle2 = ((i + 1) * 360) / spokes - 90;
        const midAngle = (angle1 + angle2) / 2;
        const rad1 = (angle1 * Math.PI) / 180;
        const rad2 = (angle2 * Math.PI) / 180;
        const midRad = (midAngle * Math.PI) / 180;
        const petalR = outerR * 0.55;
        const bulgeR = outerR * 0.7;
        const sx = cx + petalR * Math.cos(rad1);
        const sy = cy + petalR * Math.sin(rad1);
        const ex = cx + petalR * Math.cos(rad2);
        const ey = cy + petalR * Math.sin(rad2);
        const cpx = cx + bulgeR * Math.cos(midRad);
        const cpy = cy + bulgeR * Math.sin(midRad);
        return (
          <path key={`petal-${i}`}
            d={`M ${sx} ${sy} Q ${cpx} ${cpy} ${ex} ${ey}`}
            fill="none" stroke="#0D47A1" strokeWidth="1" opacity={0.5} />
        );
      })}
    </svg>
  );
}

/* ── Floating Particles ── */
function FloatingParticles() {
  const particles = [
    { color: '#FF9933', size: 6, x: '10%', y: '20%', delay: 0 },
    { color: '#FFFFFF', size: 8, x: '85%', y: '15%', delay: 1.5 },
    { color: '#138808', size: 5, x: '75%', y: '70%', delay: 3 },
    { color: '#FF9933', size: 4, x: '20%', y: '75%', delay: 2 },
    { color: '#FFFFFF', size: 7, x: '50%', y: '10%', delay: 4 },
    { color: '#138808', size: 5, x: '90%', y: '50%', delay: 1 },
    { color: '#FF9933', size: 6, x: '5%', y: '50%', delay: 3.5 },
    { color: '#0D47A1', size: 4, x: '60%', y: '80%', delay: 2.5 },
    { color: '#138808', size: 3, x: '35%', y: '90%', delay: 5 },
    { color: '#FF9933', size: 5, x: '45%', y: '30%', delay: 0.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p, i) => (
        <div
          key={i}
          className={i % 3 === 0 ? 'animate-float' : i % 3 === 1 ? 'animate-float-delayed' : 'animate-float-slow'}
          style={{
            position: 'absolute', left: p.x, top: p.y,
            width: p.size, height: p.size, borderRadius: '50%',
            backgroundColor: p.color, opacity: 0.35,
            animationDelay: `${p.delay}s`,
            boxShadow: p.color !== '#FFFFFF' ? `0 0 ${p.size * 2}px ${p.color}40` : undefined,
          }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
      <FloatingParticles />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left — Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative z-10 text-center lg:text-left pt-10 sm:pt-0"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary leading-tight tracking-tight">
              Your Personal Guide to{' '}
              <span className="text-deep-blue">Indian Democracy</span>
            </h1>

            <p className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-saffron font-[var(--font-heading)]">
              समझो, जुड़ो, वोट करो
            </p>
            <p className="mt-1 text-xs sm:text-sm text-text-muted tracking-wide">
              Understand. Connect. Vote.
            </p>

            <p className="mt-6 text-sm sm:text-base md:text-lg text-text-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
              India has 960 million voters. Most don't know what Form 6 is,
              where their polling booth is, or how votes are actually counted.
              Election Saathi changes that — one conversation at a time.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
              <motion.button
                onClick={() => navigate('/chat')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-3.5 bg-saffron text-white rounded-full font-semibold text-base
                           shadow-lg shadow-saffron/25 hover:bg-saffron-hover transition-colors duration-200
                           flex items-center justify-center gap-2 cursor-pointer"
              >
                Start a Conversation
                <span>→</span>
              </motion.button>

              <motion.a
                href="#how-it-works"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-3.5 border-2 border-saffron text-saffron rounded-full font-semibold text-base
                           hover:bg-saffron/5 transition-colors duration-200 text-center flex items-center justify-center"
              >
                How it Works
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-10"
            >
              <p className="inline-block text-xs sm:text-sm text-text-muted font-medium bg-gray-50 border border-gray-100 rounded-full px-5 py-2.5 shadow-sm">
                Made with <span className="font-semibold text-text-primary">Google Antigravity</span> and Powered by <span className="font-semibold text-text-primary">Google Gemini</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Right — Ashoka Chakra */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px]">
              <div className="absolute inset-0 rounded-full bg-deep-blue/5 blur-3xl scale-110" />
              <AshokaChakra className="w-full h-full animate-spin-slow relative z-10 drop-shadow-lg" />
              <div className="absolute inset-4 rounded-full border border-deep-blue/10" />
              <div className="absolute inset-10 rounded-full border border-deep-blue/5" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
