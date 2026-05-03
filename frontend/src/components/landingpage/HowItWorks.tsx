import { motion } from 'framer-motion';
import { MessageCircleQuestion, Brain, Rocket } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Step {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Ask',
    description: 'Type your question in plain language. No forms. No jargon.',
    icon: MessageCircleQuestion,
  },
  {
    number: '02',
    title: 'Understand',
    description: 'Get clear, simple, non-partisan answers powered by Google Gemini.',
    icon: Brain,
  },
  {
    number: '03',
    title: 'Act',
    description: 'Know exactly what to do next — register, find your booth, or learn your rights.',
    icon: Rocket,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            How Election Saathi Works
          </h2>
          <div className="mt-3 w-16 h-1 bg-saffron rounded-full mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={cardVariants}
                className="relative group bg-surface rounded-2xl p-8 border border-gray-100
                           hover:border-saffron/30 hover:shadow-lg hover:shadow-saffron/5
                           transition-all duration-300"
              >
                <span className="text-5xl font-extrabold text-saffron/15 absolute top-4 right-6 select-none">
                  {step.number}
                </span>
                <div className="w-12 h-12 rounded-xl bg-saffron/10 flex items-center justify-center mb-5
                               group-hover:bg-saffron/20 transition-colors">
                  <Icon className="w-6 h-6 text-saffron" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">{step.title}</h3>
                <p className="text-text-muted leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
