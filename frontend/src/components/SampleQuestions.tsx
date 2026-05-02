import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const questions = [
  'How do I register to vote for the first time?',
  'I moved cities. How do I transfer my voter registration?',
  'What documents do I need to bring on voting day?',
  'What is EVM and is it tamper-proof?',
  'What is the Model Code of Conduct?',
  'How are votes counted after polling ends?',
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 15 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

export default function SampleQuestions() {
  const navigate = useNavigate();

  return (
    <section id="questions" className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Ask Me Anything About Indian Elections
          </h2>
          <div className="mt-3 w-16 h-1 bg-saffron rounded-full mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {questions.map((q, i) => (
            <motion.button
              key={i}
              variants={chipVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-5 py-2.5 bg-saffron-light text-text-primary text-sm sm:text-base
                         rounded-full border border-saffron/15 hover:border-saffron/40
                         hover:shadow-md hover:shadow-saffron/10
                         transition-all duration-200 cursor-pointer"
            >
              "{q}"
            </motion.button>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-text-muted text-sm"
        >
          And thousands more questions — just ask.
        </motion.p>

        <motion.button
          onClick={() => navigate('/chat')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 bg-saffron text-white rounded-full
                     font-semibold shadow-lg shadow-saffron/25 hover:bg-saffron-hover transition-colors cursor-pointer"
        >
          Open Election Saathi
          <span>→</span>
        </motion.button>
      </div>
    </section>
  );
}
