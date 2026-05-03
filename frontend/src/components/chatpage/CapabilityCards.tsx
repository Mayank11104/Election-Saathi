import { motion } from 'framer-motion';
import { BookOpen, UserCheck, Shield } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Card {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const cards: Card[] = [
  {
    icon: BookOpen,
    title: 'Learn the Process',
    desc: 'Understand all 8 phases of Indian elections',
  },
  {
    icon: UserCheck,
    title: 'Voter Registration',
    desc: 'Get guided help with Form 6, Form 8, and more',
  },
  {
    icon: Shield,
    title: 'Know Your Rights',
    desc: 'Understand EVM, VVPAT, and your voting rights',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 260, damping: 20 },
  },
};

export default function CapabilityCards() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full max-w-2xl mx-auto"
    >
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={card.title}
            variants={cardVariants}
            className="flex flex-col items-center text-center p-3.5 sm:p-4 lg:p-5 rounded-xl
                       bg-surface border border-gray-100 hover:border-saffron/30
                       hover:shadow-md hover:shadow-saffron/5 transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-lg bg-saffron/10 flex items-center justify-center mb-2.5">
              <Icon className="w-[20px] h-[20px] sm:w-5 sm:h-5 text-saffron" />
            </div>
            <h4 className="text-[13px] sm:text-[14px] font-semibold text-text-primary">{card.title}</h4>
            <p className="text-[12px] sm:text-[13px] text-text-muted mt-1 leading-relaxed line-clamp-2">{card.desc}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
