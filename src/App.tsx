import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/Button/Button";
import { Text } from "@/components/Text/Text";
import { CardPreview } from "@/components/Card/CardPreview";
import { ButtonPreview } from "@/components/Button/ButtonPreview";
import { HeaderPreview } from "@/components/Header/HeaderPreview";
import { TextPreview } from "@/components/Text/TextPreview";
import { BadgePreview } from "@/components/Badge/BadgePreview";
import { SwitchPreview } from "@/components/Switch/SwitchPreview";
import { SkeletonPreview } from "@/components/Skeleton/SkeletonPreview";
import { InputPreview } from "@/components/Input/InputPreview";
import { SelectPreview } from "@/components/Select/SelectPreview";
import { AccordionPreview } from "@/components/Accordion/AccordionPreview";
import { DataTablePreview } from "@/components/DataTable/DataTablePreview";
import { ModalPreview } from "@/components/Modal/ModalPreview";
import { ToastPreview } from "@/components/Toast/ToastPreview";
import { ToastProvider } from "@/components/Toast/ToastProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher";
import { translations, type Language, type ExperienceItemData } from "@/i18n/translations";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronDown,
  ChevronUp,
  Download,
  Github,
  LayoutGrid,
  Linkedin,
  Mail,
  MousePointerClick,
  Moon,
  PanelTop,
  Sun,
  Type,
  Tag,
  ToggleLeft,
  Loader,
  TextCursorInput,
  ChevronDownSquare,
  ChevronsDownUp,
  Table,
  SquareStack,
  Bell,
} from "lucide-react";

type ActiveView =
  | "card"
  | "button"
  | "header"
  | "text"
  | "badge"
  | "switch"
  | "skeleton"
  | "input"
  | "select"
  | "accordion"
  | "table"
  | "modal"
  | "toast";

interface CategoryGroup {
  label: string;
  items: { id: ActiveView; label: string; icon: React.ElementType }[];
}

function buildCategories(t: typeof translations["ENG"]): CategoryGroup[] {
  const n = t.components.componentNames;
  return [
    {
      label: t.components.categories.foundations,
      items: [
        { id: "card", label: n.card, icon: LayoutGrid },
        { id: "button", label: n.button, icon: MousePointerClick },
        { id: "header", label: n.header, icon: PanelTop },
        { id: "text", label: n.text, icon: Type },
      ],
    },
    {
      label: t.components.categories.formsInputs,
      items: [
        { id: "input", label: n.input, icon: TextCursorInput },
        { id: "select", label: n.select, icon: ChevronDownSquare },
        { id: "switch", label: n.switch, icon: ToggleLeft },
      ],
    },
    {
      label: t.components.categories.dataDisplay,
      items: [
        { id: "table", label: n.table, icon: Table },
        { id: "accordion", label: n.accordion, icon: ChevronsDownUp },
        { id: "badge", label: n.badge, icon: Tag },
      ],
    },
    {
      label: t.components.categories.feedbackOverlays,
      items: [
        { id: "modal", label: n.modal, icon: SquareStack },
        { id: "toast", label: n.toast, icon: Bell },
        { id: "skeleton", label: n.skeleton, icon: Loader },
      ],
    },
  ];
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

interface TechLogo {
  name: string;
  src: string;
}

type Theme = "light" | "dark";

function App() {
  const [activeView, setActiveView] = useState<ActiveView>("card");
  const [showExperience, setShowExperience] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState<Language>("ENG");
  const [theme, setTheme] = useState<Theme>("dark");
  const heroRef = useRef<HTMLDivElement>(null);

  const t = translations[language];
  const categories = buildCategories(t);
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToComponents = () => {
    heroRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const renderActiveView = () => {
    switch (activeView) {
      case "card":
        return <CardPreview />;
      case "button":
        return <ButtonPreview />;
      case "header":
        return <HeaderPreview />;
      case "text":
        return <TextPreview />;
      case "badge":
        return <BadgePreview />;
      case "switch":
        return <SwitchPreview />;
      case "skeleton":
        return <SkeletonPreview />;
      case "input":
        return <InputPreview />;
      case "select":
        return <SelectPreview />;
      case "accordion":
        return <AccordionPreview />;
      case "table":
        return <DataTablePreview />;
      case "modal":
        return <ModalPreview />;
      case "toast":
        return <ToastPreview />;
      default:
        return null;
    }
  };

  return (
    <ToastProvider>
      <div className={`min-h-screen ${isDark ? "bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" : "bg-gradient-to-br from-zinc-100 via-white to-zinc-100"}`}>
        {/* Open to Work — floating circular badge */}
        <a
          href="mailto:daniel.niewiarowski@op.pl"
          className="animate-open-to-work group fixed top-5 left-5 z-50 flex h-24 w-24 flex-col items-center justify-center rounded-full border border-emerald-500/40 bg-white/90 backdrop-blur-md transition-all duration-300 hover:border-emerald-400 hover:bg-zinc-50 dark:bg-zinc-900/90 dark:hover:bg-zinc-800/90"
        >
          <span className="relative mb-1 flex h-2.5 w-2.5 flex-shrink-0">
            <span className="animate-dot-blink absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500" />
          </span>
          <span className="text-[10px] font-bold uppercase leading-none tracking-widest text-emerald-500">{t.nav.openTo}</span>
          <span className="mt-1 text-lg font-extrabold uppercase leading-none tracking-wider text-emerald-500">{t.nav.work}</span>
        </a>

        {/* Language switcher — top right */}
        <div className="fixed top-5 right-5 z-50 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-emerald-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-emerald-400"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <LanguageSwitcher language={language} onChange={setLanguage} />
        </div>

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
                  content={t.hero.role}
                  color="#059669"
                  size="sm"
                  weight="bold"
                  uppercase
                  letterSpacing="widest"
                />
                <h1 className={`mt-4 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none ${isDark ? "text-zinc-100" : "text-zinc-900"}`}>
                  Daniel
                  <span className="block text-emerald-500">Niewiarowski</span>
                </h1>
                <p className={`mt-7 max-w-2xl text-lg leading-relaxed ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
                  {t.hero.description}
                </p>

                <div className="mt-8 flex flex-nowrap gap-3">
                  <a href="/documents/Daniel_Niewiarowski_Frontend_CV.pdf" download>
                    <Button text={t.buttons.downloadCV} icon={Download} color="#059669" size="lg" rounded="lg" />
                  </a>
                  <a href="mailto:daniel.niewiarowski@op.pl">
                    <Button text={t.buttons.contactMe} icon={Mail} variant="outline" color={isDark ? "#E4E4E7" : "#27272A"} size="lg" rounded="lg" />
                  </a>
                  <Button
                    text={showExperience ? t.buttons.hideExperiences : t.buttons.myExperiences}
                    icon={showExperience ? ChevronUp : BriefcaseBusiness}
                    variant="outline"
                    color="#059669"
                    size="lg"
                    rounded="lg"
                    onClick={() => setShowExperience((visible) => !visible)}
                  />
                </div>

                <div className="mt-7 flex items-center gap-3">
                  <span className={`text-sm font-medium ${isDark ? "text-zinc-500" : "text-zinc-500"}`}>{t.connect}</span>
                  <a
                    href="https://www.linkedin.com/in/danielniewiarowski/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Daniel Niewiarowski on LinkedIn"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-500 border border-zinc-200 transition-colors hover:bg-emerald-500 hover:text-white hover:border-emerald-500 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700 dark:hover:text-zinc-950"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-500 border border-zinc-200 transition-colors hover:bg-emerald-500 hover:text-white hover:border-emerald-500 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700 dark:hover:text-zinc-950"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="mailto:daniel.niewiarowski@op.pl"
                    aria-label="Send email to Daniel Niewiarowski"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-500 border border-zinc-200 transition-colors hover:bg-emerald-500 hover:text-white hover:border-emerald-500 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700 dark:hover:text-zinc-950"
                  >
                    <Mail size={18} />
                  </a>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${showExperience ? "mt-8 max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}
                  aria-hidden={!showExperience}
                >
                  <div className={`rounded-2xl border p-5 shadow-xl shadow-emerald-500/5 ${isDark ? "border-zinc-700 bg-zinc-900/70" : "border-zinc-200 bg-white"}`}>
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                        <BriefcaseBusiness size={20} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-widest text-emerald-500">{t.experience.title}</div>
                        <div className={`mt-1 text-sm ${isDark ? "text-zinc-500" : "text-zinc-500"}`}>{t.experience.subtitle}</div>
                      </div>
                    </div>

                    <div className="space-y-5">
                      {t.experience.items.map((item, i) => (
                        <ExperienceItem key={i} item={item} isDark={isDark} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-sm">
                  <div className="absolute -inset-3 rounded-[2rem] bg-emerald-500/10 rotate-3" />
                  <div className={`relative overflow-hidden rounded-[2rem] border-4 shadow-2xl shadow-emerald-500/10 ${isDark ? "border-zinc-800 bg-zinc-800" : "border-zinc-200 bg-zinc-100"}`}>
                    <img
                      src="/images/image.png"
                      alt="Daniel Niewiarowski"
                      className="aspect-[4/5] w-full object-cover object-top"
                    />
                  </div>
                  <div className={`absolute -bottom-5 -left-5 rounded-2xl border px-5 py-4 shadow-xl ${isDark ? "bg-zinc-900 border-zinc-700 text-zinc-100" : "bg-white border-zinc-200 text-zinc-900"}`}>
                    <div className={`text-xs font-medium uppercase tracking-widest ${isDark ? "text-zinc-500" : "text-zinc-500"}`}>{t.basedIn}</div>
                    <div className="mt-1 text-base font-semibold text-emerald-500">{t.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core stack & Tools — one horizontal row */}
            <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-6">
              <div className="flex items-center gap-4">
                <div className={`flex items-center gap-3 text-sm font-semibold whitespace-nowrap ${isDark ? "text-zinc-500" : "text-zinc-500"}`}>
                  <span className={`h-px w-8 ${isDark ? "bg-zinc-700" : "bg-zinc-300"}`} />
                  {t.coreStack}
                </div>
                <div className="flex flex-nowrap gap-3">
                  {technologies.map((tech) => (
                    <TechLogoCard key={tech.name} tech={tech} isDark={isDark} />
                  ))}
                </div>
              </div>

              <span className={`hidden h-14 w-px lg:block ${isDark ? "bg-zinc-800" : "bg-zinc-200"}`} />

              <div className="flex items-center gap-4">
                <div className={`flex items-center gap-3 text-sm font-semibold whitespace-nowrap ${isDark ? "text-zinc-500" : "text-zinc-500"}`}>
                  <span className={`h-px w-8 ${isDark ? "bg-zinc-700" : "bg-zinc-300"}`} />
                  {t.tools}
                </div>
                <div className="flex flex-nowrap gap-3">
                  {tools.map((tool) => (
                    <TechLogoCard key={tool.name} tech={tool} isDark={isDark} />
                  ))}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToComponents}
              className={`mx-auto mt-16 flex flex-col items-center gap-2 transition-colors duration-300 group ${isDark ? "text-zinc-500 hover:text-emerald-400" : "text-zinc-500 hover:text-emerald-600"}`}
            >
              <Text
                content={t.scrollToExplore}
                color="#71717A"
                size="sm"
                weight="medium"
                align="center"
                uppercase
                letterSpacing="wide"
              />
              <ChevronDown size={32} strokeWidth={1.5} className="animate-bounce group-hover:text-emerald-500" />
            </button>
          </div>
        </section>

        <div ref={heroRef} className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <header className="text-center mb-10">
              <Text content={t.components.featuredWork} color="#059669" size="sm" weight="bold" align="center" uppercase letterSpacing="widest" />
              <h2 className={`mt-3 text-4xl font-bold mb-3 ${isDark ? "text-zinc-100" : "text-zinc-900"}`}>{t.components.title}</h2>
              <p className={`max-w-2xl mx-auto text-lg leading-relaxed ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
                {t.components.description}
              </p>
              <div className={`mt-5 flex justify-center gap-2 text-xs font-semibold uppercase tracking-wider ${isDark ? "text-zinc-500" : "text-zinc-500"}`}>
                <span>{t.components.techStack}</span><span>•</span><span>Tailwind CSS</span><span>•</span><span>SCSS</span>
              </div>
            </header>

            {/* Category navigation */}
            <div className="mb-10 space-y-4">
              {categories.map((cat) => (
                <div key={cat.label}>
                  <h3 className={`text-xs font-bold uppercase tracking-widest mb-2 px-1 ${isDark ? "text-zinc-600" : "text-zinc-400"}`}>
                    {cat.label}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((item) => (
                      <ToggleButton
                        key={item.id}
                        active={activeView === item.id}
                        onClick={() => setActiveView(item.id)}
                        icon={item.icon}
                        label={item.label}
                        isDark={isDark}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {renderActiveView()}
          </div>
        </div>

        <footer className={`border-t px-4 py-10 ${isDark ? "border-zinc-800 bg-zinc-900/80" : "border-zinc-200 bg-zinc-50"}`}>
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
            <div>
              <div className={`text-sm font-bold ${isDark ? "text-zinc-100" : "text-zinc-900"}`}>{t.footer.name}</div>
              <div className={`mt-1 text-sm ${isDark ? "text-zinc-500" : "text-zinc-500"}`}>{t.footer.role}</div>
            </div>
            <a href="mailto:daniel.niewiarowski@op.pl" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-500 hover:text-emerald-600">
              daniel.niewiarowski@op.pl <ArrowUpRight size={16} />
            </a>
          </div>
        </footer>

        <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 transition-opacity duration-500 pointer-events-none ${scrolled ? "opacity-0" : "opacity-100"}`}>
          <ArrowDown size={16} className={isDark ? "text-zinc-600" : "text-zinc-400"} />
        </div>
      </div>
    </ToastProvider>
  );
}

function TechLogoCard({ tech, isDark }: { tech: TechLogo; isDark: boolean }) {
  return (
    <div className="group flex flex-col items-center gap-2">
      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-emerald-500/50 ${isDark ? "border-zinc-700 bg-zinc-800/80" : "border-zinc-200 bg-white"}`}>
        <img src={tech.src} alt={`${tech.name} logo`} className="h-8 w-8" />
      </div>
      <span className={`text-xs font-semibold ${isDark ? "text-zinc-400" : "text-zinc-500"}`}>{tech.name}</span>
    </div>
  );
}

function ExperienceItem({ item, isDark }: { item: ExperienceItemData; isDark: boolean }) {
  return (
    <article className="relative border-l border-emerald-500/30 pl-4">
      <div className={`absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-emerald-500 ring-4 ${isDark ? "ring-zinc-900" : "ring-white"}`} />
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className={`text-sm font-bold ${isDark ? "text-zinc-100" : "text-zinc-900"}`}>{item.role}</h3>
        <span className="text-xs font-semibold uppercase tracking-wide text-emerald-500">{item.period}</span>
      </div>
      <div className={`mt-1 text-xs font-medium ${isDark ? "text-zinc-500" : "text-zinc-500"}`}>{item.company}</div>
      <ul className="mt-2 space-y-1.5">
        {item.bullets.map((bullet, i) => (
          <li key={i} className={`flex items-start gap-2 text-sm leading-relaxed ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
            <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-emerald-500/60" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function ToggleButton({
  active,
  onClick,
  icon: Icon,
  label,
  isDark,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ElementType;
  label: string;
  isDark: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${active ? "bg-emerald-500 text-white shadow-sm shadow-emerald-500/30" : isDark ? "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700/50 border border-zinc-700/50" : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 border border-zinc-200"}`}
    >
      <Icon size={16} strokeWidth={2} />
      {label}
    </button>
  );
}

export default App;
