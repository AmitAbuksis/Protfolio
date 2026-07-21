import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

const EXPERIENCE = [
  {
    company: "Wix",
    period: "2021 — Present",
    role: "Senior Full Stack Developer",
    summary:
      "Designing and implementing critical features in Wix's purchase and management flows, owning performance optimization of the most impactful parts of the purchase flow.",
    points: [
      "Collaborate with Frontend & Backend teams and Product Managers on Wix's focus goals",
      "Own features impacting company-wide KPIs",
      "Lead performance and flow optimizations for critical purchase flows",
    ],
    stack: ["React", "TypeScript", "NestJS", "Node.js", "Storybook", "HTML5", "CSS3"],
  },
  {
    company: "Harel Insurance",
    period: "2019 — 2021",
    role: "Full Stack Developer · Team Lead",
    summary:
      "Led a 4-person agile team through the creation of several end-to-end domain applications for Harel Group — a major insurance company.",
    points: [
      "Architected and delivered end-to-end insurance domain applications",
      "Led a 4-person agile team across multiple domains",
      "Built microservices on AWS with Docker & Kubernetes",
    ],
    stack: ["React", "Redux", "Angular", "Node.js", "Java", "MongoDB", "Redis", "AWS", "Docker", "Kubernetes"],
  },
  {
    company: "A.A. Software Solutions",
    period: "2017 — 2018",
    role: "Full Stack Developer",
    summary:
      "Built fleecar.net — a vehicle fleet management system for the company responsible for Shufersal Online shipments.",
    points: [
      "Developed full-stack fleet management platform end-to-end",
      "Client-side JavaScript, jQuery & Bootstrap with Node.js server",
      "MongoDB data layer with Git version control",
    ],
    stack: ["JavaScript", "jQuery", "Bootstrap", "Node.js", "MongoDB", "Git"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="relative mx-auto max-w-7xl px-6 py-32">
      <SectionLabel index="02" title="Chronicle" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 font-display text-5xl font-black leading-tight text-white md:text-6xl"
      >
        Experience
      </motion.h2>

      <div className="space-y-6">
        {EXPERIENCE.map((exp, i) => (
          <motion.article
            key={exp.company}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl transition-all hover:border-[#00F5FF]/30 md:p-10"
            style={{ boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.08), 0 20px 60px -30px rgba(0,0,0,0.6)" }}
          >
            <div className="grid gap-6 md:grid-cols-[200px_1fr]">
              <div>
                <p className="font-mono text-sm font-medium text-[#00F5FF]">{exp.period}</p>
                <h3 className="mt-2 text-2xl font-bold text-white">{exp.company}</h3>
                <p className="mt-1 text-sm font-light text-white/50">{exp.role}</p>
              </div>

              <div>
                <p className="text-base font-light leading-relaxed text-white/75">{exp.summary}</p>
                <ul className="mt-4 space-y-2">
                  {exp.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm font-light text-white/60">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#BD00FF]" />
                      {p}
                    </li>
                  ))}
                </ul>

                {/* Floating glass-on-glass tech stack */}
                <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 font-mono text-xs text-white/80 backdrop-blur-md transition-colors group-hover:border-[#00F5FF]/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}