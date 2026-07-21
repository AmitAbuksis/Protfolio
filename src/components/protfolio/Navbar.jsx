import { useEffect, useState } from "react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 backdrop-blur-xl bg-[#060214]/60 border-b border-white/10" : "py-6 bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a
          href="#hero"
          onClick={(e) => handleClick(e, "#hero")}
          className="font-mono text-sm font-bold tracking-widest text-white"
        >
          AA<span className="text-[#00F5FF]">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleClick(e, l.href)}
              className="font-mono text-xs uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-[#00F5FF]"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-white transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden">
          <div className="mx-4 mt-3 rounded-2xl border border-white/10 bg-[#060214]/80 p-4 backdrop-blur-xl">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleClick(e, l.href)}
                className="block py-3 font-mono text-sm uppercase tracking-widest text-white/70 hover:text-[#00F5FF]"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}