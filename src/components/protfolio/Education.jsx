import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

export const Education = () => {
  return (
    <section id="education" className="relative mx-auto max-w-7xl px-6 py-32">
      <SectionLabel index="05" title="Foundation" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-start gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl md:flex-row md:items-center md:p-12"
        style={{ boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.08), 0 20px 60px -30px rgba(0,0,0,0.5)" }}
      >
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#00F5FF]/30 bg-[#00F5FF]/10">
          <GraduationCap className="h-8 w-8 text-[#00F5FF]" />
        </div>

        <div className="flex-1">
          <p className="font-mono text-sm font-medium text-[#00F5FF]">2014 — 2018</p>
          <h3 className="mt-1 text-2xl font-bold text-white md:text-3xl">Ariel University</h3>
          <p className="mt-2 text-lg font-light text-white/70">B.Sc. Computer Science &amp; Mathematics</p>
        </div>

        <div className="flex gap-3">
          {["Computer Science", "Mathematics"].map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 font-mono text-xs text-white/70"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}