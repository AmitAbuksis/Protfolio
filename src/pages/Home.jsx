import { Navbar } from "../components/protfolio/Navbar";
import { Hero } from "../components/protfolio/Hero";
import { About } from "../components/protfolio/About";
import { Experience } from "../components/protfolio/Experience";
import { Projects } from "../components/protfolio/Projects";
import { Skills } from "../components/protfolio/Skills";
import { Education } from "../components/protfolio/Education";
import { Contact } from "../components/protfolio/Contact";

export const Home = () => {

    return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#060214] text-white">
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 15% 20%, rgba(45,27,78,0.6) 0%, transparent 50%), radial-gradient(ellipse at 85% 80%, rgba(13,59,79,0.5) 0%, transparent 50%)",
        }}
      />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  );
}