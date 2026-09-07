import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/Button/Button";
import { Header } from "@/components/Header/Header";
import { Text } from "@/components/Text/Text";
import { CardPreview } from "@/components/Card/CardPreview";
import { ButtonPreview } from "@/components/Button/ButtonPreview";
import { HeaderPreview } from "@/components/Header/HeaderPreview";
import { TextPreview } from "@/components/Text/TextPreview";
import {
  LayoutGrid,
  MousePointerClick,
  PanelTop,
  Type,
  ChevronDown,
} from "lucide-react";

type ActiveView = "button" | "card" | "header" | "text";

function App() {
  const [activeView, setActiveView] = useState<ActiveView>("card");
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToComponents = () => {
    heroRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200">
      {/* ===== HERO HEADER ===== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-slate-800/5 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-slate-800/5 blur-3xl" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-slate-700/3 blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-4xl">
          <Header
            color="#0f172a"
            borderColor="#1e293b"
            layout="center"
            rounded="xl"
            shadow="xl"
            height="2xl"
            padding="xl"
          >
            <Text
              content="Daniel Niewiarowski"
              color="#f8fafc"
              size="5xl"
              weight="extrabold"
              align="center"
              letterSpacing="tight"
              lineHeight="tight"
            />
          </Header>

          <div className="mt-8 flex flex-col items-center gap-4">
            <Text
              content="Reusable Components Library"
              color="#475569"
              size="xl"
              weight="medium"
              align="center"
            />
            <Text
              content="Flexible Button, Card, Header & Text components with custom colors, icons, sizes, and more."
              color="#94a3b8"
              size="base"
              align="center"
              lineHeight="relaxed"
            />

            <button
              type="button"
              onClick={scrollToComponents}
              className="mt-6 flex flex-col items-center gap-2 text-slate-400 hover:text-slate-700 transition-colors duration-300 group"
            >
              <Text
                content="Scroll to explore"
                color="#94a3b8"
                size="sm"
                weight="medium"
                align="center"
                uppercase
                letterSpacing="wide"
              />
              <ChevronDown
                size={32}
                strokeWidth={1.5}
                className="animate-bounce group-hover:text-slate-700 transition-colors"
              />
            </button>
          </div>
        </div>
      </section>

      {/* ===== COMPONENTS SHOWCASE ===== */}
      <div ref={heroRef} className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-10">
            <h1 className="text-4xl font-bold text-slate-800 mb-3">
              Reusable Components
            </h1>
            <p className="text-slate-500 text-lg">
              Flexible Button, Card, Header & Text components with custom colors, icons, sizes, and more.
            </p>
          </header>

          {/* Component selector */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex flex-wrap gap-1 bg-white rounded-xl shadow-sm border border-slate-200 p-1.5">
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

      {/* Scroll indicator fade */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 transition-opacity duration-500 pointer-events-none ${
          scrolled ? "opacity-0" : "opacity-100"
        }`}
      />
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
      className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 ${
        active
          ? "bg-slate-800 text-white shadow-sm"
          : "text-slate-500 hover:text-slate-700 hover:bg-slate-100"
      }`}
    >
      <Icon size={18} strokeWidth={2} />
      {label}
    </button>
  );
}

export default App;
