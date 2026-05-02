import { useState, useEffect } from 'react';
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

const phaseIcons: Record<number, LucideIcon> = {
  1: Megaphone,
  2: UserCheck,
  3: FileText,
  4: Flag,
  5: Vote,
  6: Calculator,
  7: Trophy,
  8: Landmark,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function ElectionPhases() {
  const [phasesData, setPhasesData] = useState<Phase[]>([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/election/phases')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          const updatedPhases = data.map((d: any) => {
            return {
              num: d.phase_number,
              title: d.title,
              desc: d.description,
              icon: phaseIcons[d.phase_number] || Trophy
            };
          });
          setPhasesData(updatedPhases);
        }
      })
      .catch(err => console.error("Error fetching phases:", err));
  }, []);

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
          {phasesData.map((phase) => {
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
