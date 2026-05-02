import { motion } from 'framer-motion';
import {
  Megaphone, UserCheck, FileText, Flag,
  Vote, Calculator, Trophy, Landmark,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Phase {
  num: number;
  title: string;
  desc: string;
  icon: LucideIcon;
}

const phases: Phase[] = [
  { num: 1, title: 'Election Announcement', desc: 'The Election Commission announces dates and the Model Code of Conduct kicks in.', icon: Megaphone },
  { num: 2, title: 'Voter Registration', desc: 'Citizens verify and update their names on the electoral roll.', icon: UserCheck },
  { num: 3, title: 'Candidate Nominations', desc: 'Candidates file nominations; scrutiny and withdrawals follow.', icon: FileText },
  { num: 4, title: 'Election Campaign', desc: 'Parties campaign across constituencies within strict guidelines.', icon: Flag },
  { num: 5, title: 'Voting Day', desc: 'Citizens cast their vote at designated polling stations using EVMs.', icon: Vote },
  { num: 6, title: 'Vote Counting', desc: 'Sealed EVMs are opened and votes are counted under strict observation.', icon: Calculator },
  { num: 7, title: 'Result Declaration', desc: 'Winners are declared constituency by constituency by the Returning Officer.', icon: Trophy },
  { num: 8, title: 'Government Formation', desc: 'The party or coalition with a majority forms the government.', icon: Landmark },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function ElectionPhases() {
  return (
    <section id="phases" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            The 8 Phases of Indian Elections
          </h2>
          <p className="mt-3 text-text-muted text-base sm:text-lg">
            Most citizens only know Phase 5. We explain all 8.
          </p>
          <div className="mt-3 w-16 h-1 bg-saffron rounded-full mx-auto" />
        </motion.div>

        {/* Desktop: horizontal scroll | Mobile: vertical stack */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex overflow-x-auto pb-4 gap-5 snap-x snap-mandatory phase-scroll
                     md:grid md:grid-cols-4 md:overflow-visible md:pb-0"
        >
          {phases.map((phase) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={phase.num}
                variants={cardVariants}
                className="group min-w-[260px] md:min-w-0 snap-start bg-white rounded-2xl p-6 border border-gray-100
                           hover:border-saffron/40 hover:shadow-lg hover:shadow-saffron/5
                           transition-all duration-300 cursor-default"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-9 h-9 rounded-full bg-saffron/10 text-saffron font-bold text-sm
                                   flex items-center justify-center group-hover:bg-saffron group-hover:text-white
                                   transition-colors duration-300">
                    {phase.num}
                  </span>
                  <Icon className="w-5 h-5 text-deep-blue/70 group-hover:text-saffron transition-colors" />
                </div>
                <h3 className="text-base font-bold text-text-primary mb-1.5">{phase.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{phase.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
