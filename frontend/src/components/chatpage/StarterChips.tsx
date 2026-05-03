import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const starterQuestions = [
  'How do I register to vote for the first time?',
  'I moved cities. How do I transfer my voter ID?',
  'What documents do I need on voting day?',
  'What is EVM and how does it work?',
  'What is the Model Code of Conduct?',
  'How are votes counted after polling?',
];

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

export default function StarterChips({ onSelect }: Props) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full max-w-xl mx-auto"
    >
      {starterQuestions.map((q) => (
        <motion.button
          key={q}
          variants={chipVariants}
          whileHover={{ scale: 1.02, x: 2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(q)}
          className="flex items-center gap-2 text-left px-4 py-3 rounded-xl
                     bg-saffron-light border-l-[3px] border-l-saffron
                     hover:bg-saffron/10 hover:shadow-md hover:shadow-saffron/8
                     transition-all duration-200 cursor-pointer group"
        >
          <span className="text-sm text-text-primary flex-1 leading-snug">{q}</span>
          <ChevronRight className="w-4 h-4 text-saffron/50 group-hover:text-saffron
                                   transition-colors flex-shrink-0" />
        </motion.button>
      ))}
    </motion.div>
  );
}
