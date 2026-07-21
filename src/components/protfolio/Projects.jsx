import { motion } from "framer-motion";
import { Image } from "../ui/Image";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const PROJECTS = [
  {
    name: "Wix Purchase Flow",
    tag: "E-Commerce Platform",
    description:
      "Designed and implemented critical features in Wix's purchase and management flows. Owned performance optimization of the most impactful parts of the purchase flow, directly affecting company-wide KPIs.",
    stack: ["React", "TypeScript", "NestJS", "Node.js"],
    image: "https://media.base44.com/images/public/6a5e165b560695a3b654e95d/5d0158295_generated_image.png",
    metric: "Company-wide KPIs",
  },
  {
    name: "Harel Insurance Platform",
    tag: "Insurance Domain System",
    description:
      "Led a 4-person agile team to architect and deliver several end-to-end insurance domain applications for Harel Group — from React frontends to Java microservices on AWS.",
    stack: ["React", "Redux", "Node.js", "Java", "AWS", "Kubernetes"],
    image: "https://media.base44.com/images/public/6a5e165b560695a3b654e95d/35d08337d_generated_image.png",
    metric: "4-person team lead",
  },
  {
    name: "FleetCar.net",
    tag: "Fleet Management System",
    description:
      "A vehicle fleet management system built for the company responsible for Shufersal Online shipments. Full-stack platform covering client-side interactivity, Node.js server, and MongoDB data layer.",
    stack: ["JavaScript", "Node.js", "MongoDB", "jQuery"],
    image: "https://media.base44.com/images/public/6a5e165b560695a3b654e95d/7653a3486_generated_image.png",
    metric: "Shufersal Online",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-32">
      <SectionLabel index="03" title="Artifacts" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 font-display text-5xl font-black leading-tight text-white md:text-6xl"
      >
        Featured Projects
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl transition-all hover:-translate-y-1 hover:border-[#00F5FF]/30 hover:shadow-[0_30px_80px_-30px_rgba(0,245,255,0.25)]"
          >
            <div className="relative h-44 overflow-hidden">
              <Image
                src={p.image}
                alt={p.name}
                fittingType="fill"
                className="h-full w-full transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060214] via-[#060214]/40 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-[#060214]/60 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-[#00F5FF] backdrop-blur-md">
                {p.tag}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-xl font-bold text-white">{p.name}</h3>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-white/30 transition-all group-hover:text-[#00F5FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-white/65">{p.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[0.7rem] text-white/70"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00F5FF] opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00F5FF]" />
                </span>
                <span className="font-mono text-xs text-white/50">{p.metric}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}