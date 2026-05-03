import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

import { STARTER_CHIPS } from '../../constants';

interface Props {
  onSelect: (question: string) => void;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const chipVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' as const },
  },
};

const StarterChips = React.memo(function StarterChips({ onSelect }: Props) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide flex-nowrap sm:grid sm:grid-cols-2 sm:gap-2.5 w-full max-w-2xl mx-auto"
    >
      {STARTER_CHIPS.map((q) => (
        <motion.button
          key={q}
          variants={chipVariants}
          whileHover={{ scale: 1.02, x: 2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(q)}
          className="flex items-center gap-2 text-left px-3 py-2 sm:px-4 sm:py-3 rounded-xl
                     bg-saffron-light border-l-[3px] border-l-saffron
                     hover:bg-saffron/10 hover:shadow-md hover:shadow-saffron/8
                     transition-all duration-200 cursor-pointer group"
        >
          <span className="text-[12px] sm:text-[13px] whitespace-nowrap sm:whitespace-normal text-text-primary flex-1 leading-snug">{q}</span>
          <ChevronRight className="w-4 h-4 text-saffron/50 group-hover:text-saffron
                                   transition-colors flex-shrink-0" />
        </motion.button>
      ))}
    </motion.div>
  );
});

export default StarterChips;
