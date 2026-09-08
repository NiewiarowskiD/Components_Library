import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/Button/Button";
import { Header } from "@/components/Header/Header";
import { Text } from "@/components/Text/Text";
import { CardPreview } from "@/components/Card/CardPreview";
import { ButtonPreview } from "@/components/Button/ButtonPreview";
import { HeaderPreview } from "@/components/Header/HeaderPreview";
import { TextPreview } from "@/components/Text/TextPreview";
import {
  ArrowDown,
  ArrowUpRight,
  ChevronDown,
  Download,
  Github,
  LayoutGrid,
  Linkedin,
  Mail,
  MousePointerClick,
  PanelTop,
  Type,
} from "lucide-react";

type ActiveView = "button" | "card" | "header" | "text";

interface TechLogo {
  name: string;
  src: string;
}

const technologies: TechLogo[] = [
  { name: "React", src: "/logos/react.svg" },
  { name: "TypeScript", src: "/logos/typescript.svg" },
  { name: "Next.js", src: "/logos/nextjs.svg" },
  { name: "Angular", src: "/logos/angular.svg" },
];

const tools: TechLogo[] = [
  { name: "ChatGPT", src: "/logos/openai.svg" },
  { name: "Claude", src: "/logos/claude.svg" },
  { name: "Figma", src: "/logos/figma.svg" },
  { name: "Gerrit", src: "/logos/gerrit.svg" },
  { name: "Jenkins", src: "/logos/jenkins.svg" },
  { name: "GitHub", src: "/logos/github.svg" },
];

function App() {
  const [activeView, setActiveView] = useState<ActiveView>("card");
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToComponents = () => {
    heroRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      <section className="relative min-h-screen flex items-center px-4 py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-emerald-500/8 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-emerald-600/4 blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center">
            <div>
              <Text
                content="FRONTEND ENGINEER"
                color="#10B981"
                size="sm"
                weight="bold"
                uppercase
                letterSpacing="widest"
              />
              <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-zinc-100">
                Daniel
                <span className="block text-emerald-400">Niewiarowski</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-zinc-400">
                I am a Frontend Engineer with experience in building scalable web applications and reusable UI component libraries. I specialize in React, Next.js, and Angular. I gained my experience working in international Agile teams for the Swiss agency Dreipol and in the banking sector (BNP Paribas).
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/documents/Daniel_Niewiarowski_Frontend_CV.pdf" download>
                  <Button text="Download CV" icon={Download} color="#10B981" size="lg" rounded="lg" />
                </a>
                <a href="mailto:daniel.niewiarowski@op.pl">
                  <Button text="Contact me" icon={Mail} variant="outline" color="#E4E4E7" size="lg" rounded="lg" />
                </a>
              </div>

              <div className="mt-7 flex items-center gap-3">
                <span className="text-sm font-medium text-zinc-500">Connect</span>
                <a
                  href="https://www.linkedin.com/in/danielniewiarowski/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Daniel Niewiarowski on LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700 transition-colors hover:bg-emerald-500 hover:text-zinc-950 hover:border-emerald-500"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700 transition-colors hover:bg-emerald-500 hover:text-zinc-950 hover:border-emerald-500"
                >
                  <Github size={18} />
                </a>
                <a
                  href="mailto:daniel.niewiarowski@op.pl"
                  aria-label="Send email to Daniel Niewiarowski"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700 transition-colors hover:bg-emerald-500 hover:text-zinc-950 hover:border-emerald-500"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm">
                <div className="absolute -inset-3 rounded-[2rem] bg-emerald-500/10 rotate-3" />
                <div className="relative overflow-hidden rounded-[2rem] border-4 border-zinc-800 bg-zinc-800 shadow-2xl shadow-emerald-500/10">
                  <img
                    src="/images/image.png"
                    alt="Daniel Niewiarowski"
                    className="aspect-[4/5] w-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-5 -left-5 rounded-2xl bg-zinc-900 border border-zinc-700 px-5 py-4 text-zinc-100 shadow-xl">
                  <div className="text-xs font-medium uppercase tracking-widest text-zinc-500">Based in</div>
                  <div className="mt-1 text-base font-semibold text-emerald-400">Zurich, Switzerland</div>
                </div>
              </div>
            </div>
          </div>

          {/* Core stack — official logos */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 items-center">
            <div className="flex items-center gap-3 text-sm font-semibold text-zinc-500">
              <span className="h-px w-8 bg-zinc-700" />
              Core stack
            </div>
            <div className="flex flex-wrap gap-4">
              {technologies.map((tech) => (
                <div key={tech.name} className="group flex flex-col items-center gap-2">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-800/80 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-emerald-500/50">
                    <img src={tech.src} alt={`${tech.name} logo`} className="h-9 w-9" />
                  </div>
                  <span className="text-xs font-semibold text-zinc-400">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools — official logos */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 items-center">
            <div className="flex items-center gap-3 text-sm font-semibold text-zinc-500">
              <span className="h-px w-8 bg-zinc-700" />
              Tools
            </div>
            <div className="flex flex-wrap gap-4">
              {tools.map((tool) => (
                <div key={tool.name} className="group flex flex-col items-center gap-2">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-800/80 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-emerald-500/50">
                    <img src={tool.src} alt={`${tool.name} logo`} className="h-9 w-9" />
                  </div>
                  <span className="text-xs font-semibold text-zinc-400">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToComponents}
            className="mx-auto mt-16 flex flex-col items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors duration-300 group"
          >
            <Text
              content="Scroll to explore"
              color="#71717A"
              size="sm"
              weight="medium"
              align="center"
              uppercase
              letterSpacing="wide"
            />
            <ChevronDown size={32} strokeWidth={1.5} className="animate-bounce group-hover:text-emerald-400" />
          </button>
        </div>
      </section>

      <div ref={heroRef} className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-10">
            <Text content="FEATURED WORK" color="#10B981" size="sm" weight="bold" align="center" uppercase letterSpacing="widest" />
            <h2 className="mt-3 text-4xl font-bold text-zinc-100 mb-3">Reusable UI Components</h2>
            <p className="max-w-2xl mx-auto text-zinc-400 text-lg leading-relaxed">
              A configurable component library built with React, TypeScript, Tailwind CSS and SCSS, focused on consistency, accessibility and speed.
            </p>
            <div className="mt-5 flex justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              <span>React</span><span>•</span><span>Tailwind CSS</span><span>•</span><span>SCSS</span>
            </div>
          </header>

          <div className="flex justify-center mb-10">
            <div className="inline-flex flex-wrap justify-center gap-1 bg-zinc-800/80 rounded-xl shadow-sm border border-zinc-700 p-1.5">
              <ToggleButton active={activeView === "card"} onClick={() => setActiveView("card")} icon={LayoutGrid} label="Card" />
              <ToggleButton active={activeView === "button"} onClick={() => setActiveView("button")} icon={MousePointerClick} label="Button" />
              <ToggleButton active={activeView === "header"} onClick={() => setActiveView("header")} icon={PanelTop} label="Header" />
              <ToggleButton active={activeView === "text"} onClick={() => setActiveView("text")} icon={Type} label="Text" />
            </div>
          </div>

          {activeView === "card" && <CardPreview />}
          {activeView === "button" && <ButtonPreview />}
          {activeView === "header" && <HeaderPreview />}
          {activeView === "text" && <TextPreview />}
        </div>
      </div>

      <footer className="border-t border-zinc-800 bg-zinc-900/80 px-4 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <div>
            <div className="text-sm font-bold text-zinc-100">Daniel Niewiarowski</div>
            <div className="mt-1 text-sm text-zinc-500">Frontend Engineer · Zurich, Switzerland</div>
          </div>
          <a href="mailto:daniel.niewiarowski@op.pl" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300">
            daniel.niewiarowski@op.pl <ArrowUpRight size={16} />
          </a>
        </div>
      </footer>

      <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 transition-opacity duration-500 pointer-events-none ${scrolled ? "opacity-0" : "opacity-100"}`}>
        <ArrowDown size={16} className="text-zinc-600" />
      </div>
    </div>
  );
}

function ToggleButton({
  active,
  onClick,
  icon: Icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ElementType;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 ${active ? "bg-emerald-500 text-zinc-950 shadow-sm shadow-emerald-500/30" : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700/50"}`}
    >
      <Icon size={18} strokeWidth={2} />
      {label}
    </button>
  );
}

export default App;
