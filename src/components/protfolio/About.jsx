import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

export const About = () => {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-32">
      <SectionLabel index="01" title="Biography" />

      <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-5xl font-black leading-tight text-white md:text-6xl">
            Hello!
            <br />
            I'm <span className="text-[#00F5FF]">Amit</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl md:p-10"
          style={{ boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.08), 0 20px 60px -20px rgba(0,0,0,0.5)" }}
        >
          <p className="text-lg font-light leading-relaxed text-white/80">
            As a Senior Software Engineer with over <span className="font-medium text-white">8 years of experience</span>,
            I specialize in designing, developing, and implementing applications using a diverse set of
            technologies and programming languages. My expertise lies in{" "}
            <span className="font-medium text-[#00F5FF]">React</span> for front-end development and{" "}
            <span className="font-medium text-[#00F5FF]">Node.js</span> for back-end.
          </p>
          <p className="mt-5 text-lg font-light leading-relaxed text-white/70">
            I currently lead the frontend part of the team at Check Point Software Technologies, driving
            architecture, code quality, and delivery across security products. Previously I shipped
            high-impact features at Wix and led an agile team at Harel Insurance.
          </p>
          <p className="mt-5 text-lg font-light leading-relaxed text-white/70">
            Additionally, I serve as a lecturer for Node.js and React, focusing on practical projects
            at several technical colleges. I'm passionate about building complex, high-impact products
            and mentoring the next generation of engineers.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { k: "Experience", v: "8+ years" },
              { k: "Current", v: "Check Point" },
              { k: "Focus", v: "React / Node.js" },
            ].map((item) => (
              <div
                key={item.k}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3"
              >
                <p className="font-mono text-[0.65rem] uppercase tracking-widest text-white/40">{item.k}</p>
                <p className="text-sm font-semibold text-white">{item.v}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}