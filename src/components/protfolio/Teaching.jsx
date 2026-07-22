import { motion } from "framer-motion";
import { GraduationCap, Monitor, Users } from "lucide-react";
import { Image } from "../ui/Image";
import { SectionLabel } from "./SectionLabel";

const COURSES = [
  { name: "React", level: "Frontend" },
  { name: "Node.js", level: "Backend" },
  { name: "Angular", level: "Frontend" },
  { name: "JavaScript (ES6)", level: "Core" },
];

const INSTITUTIONS = [
  {
    name: "Mamram",
    logo: "https://res.cloudinary.com/dep28cdpr/image/upload/v1784714898/mamram_hstkhh.png",
  },
  {
    name: "IITC",
    logo: "https://res.cloudinary.com/dep28cdpr/image/upload/v1784714897/iitc_cd87yj.png",
  },
  {
    name: "SQLabs",
    logo: "https://res.cloudinary.com/dep28cdpr/image/upload/v1784714897/sqlabs_yamosd.png",
  },
  {
    name: "Smart College",
    logo: "https://res.cloudinary.com/dep28cdpr/image/upload/v1784714897/smart_college_vlospn.png",
  },
  {
    name: "Religious College",
    logo: "https://res.cloudinary.com/dep28cdpr/image/upload/v1784714897/religious_college_qufmyz.png",
  },
  {
    name: "Shufersal",
    logo: "https://res.cloudinary.com/dep28cdpr/image/upload/v1784714897/shufersal_nvow5r.png",
  },
];

export const Teaching = () => {
  return (
    <section id="teaching" className="relative mx-auto max-w-7xl px-6 py-32">
      <SectionLabel index="06" title="Teaching" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-6 font-display text-5xl font-black leading-tight text-white md:text-6xl"
      >
        Lecturer & <span className="bg-gradient-to-r from-[#00F5FF] to-[#BD00FF] bg-clip-text text-transparent">Mentor</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mb-16 max-w-2xl text-lg font-light text-white/60"
      >
        Beyond my engineering work, I lecture on modern software development — both digital and frontal —
        delivering hands-on, project-based courses in React, Node.js and Angular at technical colleges and
        leading organizations.
      </motion.p>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            icon: Monitor,
            title: "Digital Courses",
            text: "Design and deliver online software courses covering full-stack development with practical, real-world projects.",
          },
          {
            icon: Users,
            title: "Frontal Training",
            text: "Lead in-person, classroom-style training sessions for groups of developers at colleges and organizations.",
          },
          {
            icon: GraduationCap,
            title: "Mentorship",
            text: "Mentor the next generation of engineers, focusing on practical projects and real-world delivery.",
          },
        ].map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl transition-all hover:border-[#00F5FF]/30"
            style={{ boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.08), 0 20px 60px -30px rgba(0,0,0,0.5)" }}
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#00F5FF]/20 bg-[#00F5FF]/5">
              <f.icon className="h-6 w-6 text-[#00F5FF]" />
            </div>
            <h3 className="text-xl font-bold text-white">{f.title}</h3>
            <p className="mt-3 text-sm font-light leading-relaxed text-white/65">{f.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Courses I teach */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl md:p-10"
      >
        <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-white/40">Courses I teach</h3>
        <div className="mt-5 flex flex-wrap gap-3">
          {COURSES.map((c) => (
            <span
              key={c.name}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 font-mono text-sm text-white/80 backdrop-blur-md transition-colors hover:border-[#00F5FF]/40"
            >
              {c.name}
              <span className="text-[0.65rem] uppercase tracking-widest text-[#00F5FF]/70">{c.level}</span>
            </span>
          ))}
        </div>

        <h3 className="mt-10 font-mono text-xs uppercase tracking-[0.25em] text-white/40">Where I've taught</h3>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {INSTITUTIONS.map((inst) => (
            <div
              key={inst.name}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition-colors hover:border-[#00F5FF]/30"
            >
              <Image
                src={inst.logo}
                alt={`${inst.name} logo`}
                fittingType="fit"
                className="h-10 w-10 shrink-0 rounded-lg bg-white/90 p-1"
              />
              <span className="text-sm font-medium text-white/85">{inst.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}