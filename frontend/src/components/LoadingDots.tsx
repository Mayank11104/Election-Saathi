import { motion } from 'framer-motion';

const dotVariants = {
  initial: { y: 0 },
  animate: { y: [0, -8, 0] },
};

export default function LoadingDots() {
  return (
    <div className="flex items-center gap-1.5 px-1 py-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          variants={dotVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 0.3,
            delay: i * 0.15,
            ease: 'easeInOut',
          }}
          className="w-2 h-2 rounded-full bg-saffron"
        />
      ))}
    </div>
  );
}
