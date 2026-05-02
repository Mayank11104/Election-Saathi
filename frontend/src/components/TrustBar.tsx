import { motion } from 'framer-motion';

const sources = [
  {
    emoji: '🗳️',
    name: 'Election Commission of India',
    desc: 'Official electoral data',
  },
  {
    emoji: '📋',
    name: 'ADR India',
    desc: 'Candidate affidavit data',
  },
  {
    emoji: '🤖',
    name: 'Google Gemini',
    desc: 'AI reasoning engine',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function TrustBar() {
  return (
    <section className="py-16 sm:py-20 bg-green-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">
            Built on Trusted Sources
          </h2>
          <div className="mt-3 w-16 h-1 bg-india-green rounded-full mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {sources.map((src) => (
            <motion.div
              key={src.name}
              variants={itemVariants}
              className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-india-green/10"
            >
              <span className="text-3xl">{src.emoji}</span>
              <h3 className="mt-3 font-bold text-text-primary text-base">{src.name}</h3>
              <p className="mt-1 text-sm text-text-muted">{src.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center text-xs text-text-muted max-w-lg mx-auto"
        >
          Election Saathi is non-partisan and educational. We do not endorse any political party or candidate.
        </motion.p>
      </div>
    </section>
  );
}
