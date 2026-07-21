import { useEffect, useRef } from "react";

const SKILLS = [
  "JavaScript (ES6)", "React", "Node.js", "TypeScript", "Angular", "MongoDB",
  "Redis", "AWS", "Docker", "Kubernetes", "NestJS", "HTML5", "CSS3", "Redux",
  "Express", "Storybook", "Java", "Git", "Jira",
];

/**
 * CSS 3D rotating "tag cloud" — spherical distribution of skill labels
 * rotating around the Y axis. Pure CSS 3D transforms (no Three.js text).
 */
const SkillCloud = () => {
  const containerRef = useRef(null);
  const stateRef = useRef({ rx: -10, ry: 0, vx: 0.2, vy: 0, dragging: false, lastX: 0, lastY: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const radius = 180;
    const items = container.querySelectorAll(".skill-tag");
    const total = items.length;

    items.forEach((el, i) => {
      const phi = Math.acos(-1 + (2 * (i + 1)) / total);
      const theta = Math.sqrt(total * Math.PI) * phi;
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      el.dataset.x = x;
      el.dataset.y = y;
      el.dataset.z = z;
    });

    const s = stateRef.current;
    let raf;

    const render = () => {
      items.forEach((el) => {
        const x = parseFloat(el.dataset.x);
        const y = parseFloat(el.dataset.y);
        const z = parseFloat(el.dataset.z);

        const cosY = Math.cos((s.ry * Math.PI) / 180);
        const sinY = Math.sin((s.ry * Math.PI) / 180);
        const cosX = Math.cos((s.rx * Math.PI) / 180);
        const sinX = Math.sin((s.rx * Math.PI) / 180);

        const x1 = x * cosY - z * sinY;
        const z1 = x * sinY + z * cosY;
        const y1 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;

        const scale = (z2 + radius * 2) / (radius * 3);
        const opacity = Math.max(0.25, Math.min(1, scale));
        el.style.transform = `translate3d(${x1}px, ${y1}px, ${z2}px) scale(${scale})`;
        el.style.opacity = opacity;
        el.style.zIndex = Math.round(z2 + 500);
      });
    };

    const animate = () => {
      raf = requestAnimationFrame(animate);
      if (!s.dragging && !reduceMotion) {
        s.ry += s.vx;
      }
      render();
    };
    animate();

    const onDown = (e) => {
      s.dragging = true;
      s.lastX = e.clientX || (e.touches && e.touches[0].clientX);
      s.lastY = e.clientY || (e.touches && e.touches[0].clientY);
    };
    const onMove = (e) => {
      if (!s.dragging) return;
      const cx = e.clientX || (e.touches && e.touches[0].clientX);
      const cy = e.clientY || (e.touches && e.touches[0].clientY);
      s.ry += (cx - s.lastX) * 0.5;
      s.rx -= (cy - s.lastY) * 0.5;
      s.lastX = cx;
      s.lastY = cy;
    };
    const onUp = () => { s.dragging = false; };

    container.addEventListener("mousedown", onDown);
    container.addEventListener("touchstart", onDown, { passive: true });
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);

    return () => {
      cancelAnimationFrame(raf);
      container.removeEventListener("mousedown", onDown);
      container.removeEventListener("touchstart", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  return (
    <div className="flex items-center justify-center" style={{ perspective: "800px" }}>
      <div
        ref={containerRef}
        className="relative cursor-grab active:cursor-grabbing"
        style={{ width: "360px", height: "360px", transformStyle: "preserve-3d" }}
        aria-label="Interactive 3D skill cloud"
      >
        {SKILLS.map((skill) => (
          <span
            key={skill}
            className="skill-tag absolute left-1/2 top-1/2 -ml-16 -mt-6 select-none whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-4 py-2 font-mono text-xs font-medium text-white/90 backdrop-blur-md transition-colors hover:border-[#00F5FF]/60 hover:text-[#00F5FF]"
            style={{ transformStyle: "preserve-3d", willChange: "transform, opacity" }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillCloud;