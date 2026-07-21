import { motion } from "framer-motion";
import { Suspense } from "react";
import { SectionLabel } from "./SectionLabel";
import SkillCloud from "./SkillCloud";

const PROFICIENT = [
  { name: "JavaScript (ES6)", level: "Proficient" },
  { name: "React", level: "Proficient" },
  { name: "Node.js", level: "Proficient" },
];

const ADVANCED = [
  { name: "Angular", level: "Advanced" },
  { name: "English", level: "Advanced" },
  { name: "Hebrew", level: "Mother Tongue" },
];

export const Skills = () => {
  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-6 py-32">
      <SectionLabel index="04" title="Command Center" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 font-display text-5xl font-black leading-tight text-white md:text-6xl"
      >
        Skills
      </motion.h2>

      <div className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 flex justify-center lg:order-1"
        >
          <Suspense
            fallback={
              <div className="flex h-[360px] w-[360px] items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-[#00F5FF]" />
              </div>
            }
          >
            <SkillCloud />
          </Suspense>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="order-1 space-y-6 lg:order-2"
        >
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-[#00F5FF]">Proficient</h3>
            <div className="mt-4 space-y-3">
              {PROFICIENT.map((s) => (
                <div key={s.name} className="flex items-center justify-between">
                  <span className="font-medium text-white">{s.name}</span>
                  <span className="font-mono text-xs text-white/40">{s.level}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-[#BD00FF]">Advanced</h3>
            <div className="mt-4 space-y-3">
              {ADVANCED.map((s) => (
                <div key={s.name} className="flex items-center justify-between">
                  <span className="font-medium text-white">{s.name}</span>
                  <span className="font-mono text-xs text-white/40">{s.level}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="px-2 font-mono text-xs leading-relaxed text-white/40">
            // Drag the cloud to explore — skills rotate in 3D space
          </p>
        </motion.div>
      </div>
    </section>
  );
}