import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, Download } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const CONTACTS = [
  {
    icon: Mail,
    label: "Email",
    value: "Amitabuksis8@gmail.com",
    href: "mailto:Amitabuksis8@gmail.com",
    aria: "Email Amit Abuksis",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "amit-abuksis",
    href: "https://www.linkedin.com/in/amit-abuksis-762ab561/",
    aria: "Visit Amit Abuksis on LinkedIn",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+972-54-551-2329",
    href: "tel:+972545512329",
    aria: "Call Amit Abuksis",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-32">
      <SectionLabel index="07" title="Connect" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl md:p-16"
        style={{ boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.08), 0 30px 80px -30px rgba(0,0,0,0.7)" }}
      >
        {/* Glow accents */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#00F5FF]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#BD00FF]/10 blur-3xl" />

        <div className="relative">
          <h2 className="font-display text-4xl font-black leading-tight text-white md:text-6xl">
            Let's <span className="bg-gradient-to-r from-[#00F5FF] to-[#BD00FF] bg-clip-text text-transparent">build</span>
            <br />
            something great.
          </h2>
          <p className="mt-5 max-w-md text-lg font-light text-white/60">
            Open to freelance opportunities and collaborations. Reach out and let's create
            high-impact products together.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {CONTACTS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                aria-label={c.aria}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex min-h-[44px] flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all hover:border-[#00F5FF]/40 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F5FF] focus-visible:ring-offset-4 focus-visible:ring-offset-[#060214]"
              >
                <c.icon className="h-6 w-6 text-[#00F5FF] transition-transform group-hover:scale-110" />
                <span className="font-mono text-xs uppercase tracking-widest text-white/40">{c.label}</span>
                <span className="text-sm font-medium text-white break-all">{c.value}</span>
              </a>
            ))}
          </div>

          {/* Download CV — spinning conic-gradient border */}
          <div className="mt-10">
            <a
              href="https://res.cloudinary.com/dep28cdpr/image/upload/v1784635767/Amit_Abuksis_CV_n8zgtd.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Amit's CV in PDF format"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full p-[2px] transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F5FF] focus-visible:ring-offset-4 focus-visible:ring-offset-[#060214]"
            >
              <span
                className="absolute inset-[-100%] animate-spin-slow"
                style={{
                  background:
                    "conic-gradient(from 0deg, #00F5FF, #BD00FF, #00F5FF)",
                }}
              />
              <span className="relative flex items-center gap-3 rounded-full bg-[#060214] px-8 py-4 text-sm font-semibold text-white">
                <Download className="h-4 w-4 text-[#00F5FF]" />
                Download CV
              </span>
            </a>
          </div>
        </div>
      </motion.div>

      <footer className="mt-20 border-t border-white/10 pt-8 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/30">
          Amit Abuksis &nbsp;//&nbsp; Senior Full Stack Engineer &nbsp;//&nbsp; {new Date().getFullYear()}
        </p>
      </footer>
    </section>
  );
}