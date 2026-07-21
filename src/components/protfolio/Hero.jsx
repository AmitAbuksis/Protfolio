import { Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import NeuralMesh from "./NeuralMesh";

export const Hero = () => {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, #2D1B4E 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, #0D3B4F 0%, transparent 50%), #060214",
        }}
      />
      <Suspense fallback={null}>
        <NeuralMesh />
      </Suspense>
      <div className="pointer-events-none absolute inset-0 opacity-60" style={{
        background: "radial-gradient(circle at 70% 50%, rgba(0,245,255,0.08) 0%, transparent 40%)",
      }} />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs uppercase tracking-[0.25em] text-[#00F5FF] backdrop-blur-md">
            <Sparkles className="h-3 w-3" /> Available for opportunities
          </span>

          <h1 className="font-display text-[15vw] font-black leading-[0.85] tracking-tight text-white md:text-[10vw] lg:text-[8rem]">
            Amit
            <br />
            <span className="bg-gradient-to-r from-[#00F5FF] via-[#BD00FF] to-[#00F5FF] bg-clip-text text-transparent">
              Abuksis
            </span>
          </h1>

          <div className="flex flex-col gap-3">
            <p className="text-2xl font-bold text-white md:text-3xl">Senior Full Stack Engineer</p>
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-white/50 md:text-base">
              8+ years of experience &nbsp;//&nbsp; React / Node.js
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => scrollTo("#projects")}
              aria-label="View My Work"
              className="group relative overflow-hidden rounded-full border border-[#00F5FF]/50 bg-[#00F5FF]/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-[#00F5FF]/20 hover:shadow-[0_0_30px_rgba(0,245,255,0.4)]"
            >
              View My Work
              <ArrowDown className="ml-2 inline h-4 w-4 transition-transform group-hover:translate-y-1" />
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white/80 backdrop-blur-md transition-all hover:border-white/30 hover:text-white"
            >
              Get in Touch
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-[#00F5FF]" />
        </div>
      </div>
    </section>
  );
}