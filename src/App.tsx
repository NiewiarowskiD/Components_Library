import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { Text } from "@/components/Text";
import type { HeaderLayout } from "@/components/Header";
import {
  Download,
  Trash2,
  Heart,
  ArrowRight,
  Check,
  Settings,
  Mail,
  Bell,
  Star,
  TrendingUp,
  ImageIcon,
  FileText,
  MousePointerClick,
  LayoutGrid,
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

  const handleClick = (data: { name?: string; timestamp: number }) => {
    void data;
  };

  const scrollToComponents = () => {
    heroRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200">
      {/* ===== HERO HEADER ===== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        {/* Background decoration */}
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

          {/* ===== CARD SHOWCASE ===== */}
          {activeView === "card" && (
            <>
              <Section title="Cards — Basic with Title & Close">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  <Card title="My First Card" color="#ffffff">
                    <p className="text-sm">You can put any content here — text, images, or other components.</p>
                  </Card>
                  <Card title="Dark Card" color="#1e293b" borderColor="#334155">
                    <p className="text-sm">This card has a dark background with automatically contrasting text.</p>
                  </Card>
                </div>
              </Section>

              <Section title="Cards — Custom HEX Colors">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                  <Card title="Blue" color="#3b82f6" borderColor="#2563eb" shadow="lg">
                    <p className="text-sm">Shadow set to large for a more elevated feel.</p>
                  </Card>
                  <Card title="Green" color="#22c55e" borderColor="#16a34a" shadow="sm">
                    <p className="text-sm">Shadow set to small for a subtle look.</p>
                  </Card>
                  <Card title="Amber" color="#f59e0b" borderColor="#d97706" shadow="xl">
                    <p className="text-sm">Shadow set to extra large for maximum depth.</p>
                  </Card>
                </div>
              </Section>

              <Section title="Cards — Title Icons">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                  <Card title="Trending" titleIcon={TrendingUp} color="#ffffff" borderColor="#e2e8f0">
                    <p className="text-sm">Add an icon next to the title for extra context.</p>
                  </Card>
                  <Card title="Starred" titleIcon={Star} color="#fef3c7" borderColor="#fcd34d">
                    <p className="text-sm">Any lucide-react icon can be used as the title icon.</p>
                  </Card>
                  <Card title="Document" titleIcon={FileText} color="#1e293b" borderColor="#334155">
                    <p className="text-sm">Text color auto-adjusts to the background.</p>
                  </Card>
                </div>
              </Section>

              <Section title="Cards — With Images">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  <Card
                    title="Mountain View"
                    titleIcon={ImageIcon}
                    color="#ffffff"
                    borderColor="#e2e8f0"
                    image="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=600"
                    imageAlt="Mountain landscape"
                    imageHeight="h-44"
                  >
                    <p className="text-sm">Add an image at the top of the card. The image height is adjustable.</p>
                  </Card>
                  <Card
                    title="Ocean Sunset"
                    titleIcon={ImageIcon}
                    color="#ffffff"
                    borderColor="#e2e8f0"
                    image="https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&w=600"
                    imageAlt="Ocean sunset"
                    imageHeight="h-44"
                    shadow="lg"
                  >
                    <p className="text-sm">Images are cropped to fit and use rounded corners matching the card.</p>
                  </Card>
                </div>
              </Section>

              <Section title="Cards — Roundness Levels">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                  <Card title="No Round" rounded="none" color="#ffffff" borderColor="#e2e8f0">
                    <p className="text-sm">Sharp corners.</p>
                  </Card>
                  <Card title="Medium" rounded="md" color="#ffffff" borderColor="#e2e8f0">
                    <p className="text-sm">Medium rounding.</p>
                  </Card>
                  <Card title="Extra Large" rounded="xl" color="#ffffff" borderColor="#e2e8f0">
                    <p className="text-sm">Very rounded corners.</p>
                  </Card>
                </div>
              </Section>

              <Section title="Cards — With Buttons Inside">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  <Card title="Action Card" titleIcon={Bell} color="#ffffff" borderColor="#e2e8f0" shadow="lg">
                    <p className="text-sm mb-3">You can place buttons or any other content inside a card.</p>
                    <Button text="Subscribe" icon={Bell} color="#3b82f6" size="sm" name="subscribe" onClick={handleClick} />
                  </Card>
                  <Card title="Download Center" titleIcon={Download} color="#0891b2" borderColor="#0e7490" shadow="lg">
                    <p className="text-sm mb-3">Buttons inside cards work just like they do anywhere else.</p>
                    <Button text="Download" icon={Download} color="#ffffff" size="sm" name="card-download" onClick={handleClick} />
                  </Card>
                </div>
              </Section>

              <Section title="Cards — Non-Closable">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  <Card title="Persistent" closable={false} color="#ffffff" borderColor="#e2e8f0">
                    <p className="text-sm">This card has no close button — it stays visible permanently.</p>
                  </Card>
                  <Card title="Always Visible" closable={false} color="#6366f1" borderColor="#4f46e5">
                    <p className="text-sm">Set closable to false to hide the X button.</p>
                  </Card>
                </div>
              </Section>
            </>
          )}

          {/* ===== BUTTON SHOWCASE ===== */}
          {activeView === "button" && (
            <>
              <Section title="Solid Buttons — Custom HEX Colors">
                <Button text="Primary" color="#3b82f6" name="primary" onClick={handleClick} />
                <Button text="Success" color="#22c55e" name="success" onClick={handleClick} />
                <Button text="Warning" color="#f59e0b" name="warning" onClick={handleClick} />
                <Button text="Danger" color="#ef4444" name="danger" onClick={handleClick} />
                <Button text="Dark" color="#1e293b" name="dark" onClick={handleClick} />
                <Button text="Light" color="#f1f5f9" name="light" onClick={handleClick} />
              </Section>

              <Section title="Outline Buttons — Border Color via HEX">
                <Button text="Outline Blue" variant="outline" color="#3b82f6" name="outline-blue" onClick={handleClick} />
                <Button text="Outline Green" variant="outline" color="#22c55e" name="outline-green" onClick={handleClick} />
                <Button text="Outline Red" variant="outline" color="#ef4444" name="outline-red" onClick={handleClick} />
                <Button text="Custom Border" variant="outline" color="#3b82f6" outlineColor="#a855f7" name="outline-custom" onClick={handleClick} />
              </Section>

              <Section title="Sizes — Small, Medium, Large">
                <Button text="Small" size="sm" color="#6366f1" name="sm" onClick={handleClick} />
                <Button text="Medium" size="md" color="#6366f1" name="md" onClick={handleClick} />
                <Button text="Large" size="lg" color="#6366f1" name="lg" onClick={handleClick} />
              </Section>

              <Section title="Roundness — None to Full Pill">
                <Button text="None" rounded="none" color="#0ea5e9" name="r-none" onClick={handleClick} />
                <Button text="Small" rounded="sm" color="#0ea5e9" name="r-sm" onClick={handleClick} />
                <Button text="Medium" rounded="md" color="#0ea5e9" name="r-md" onClick={handleClick} />
                <Button text="Large" rounded="lg" color="#0ea5e9" name="r-lg" onClick={handleClick} />
                <Button text="Full" rounded="full" color="#0ea5e9" name="r-full" onClick={handleClick} />
              </Section>

              <Section title="Icons — Left & Right Positions">
                <Button text="Download" icon={Download} color="#3b82f6" name="download" onClick={handleClick} />
                <Button text="Delete" icon={Trash2} color="#ef4444" name="delete" onClick={handleClick} />
                <Button text="Like" icon={Heart} color="#ec4899" name="like" onClick={handleClick} />
                <Button text="Continue" icon={ArrowRight} iconPosition="right" color="#22c55e" name="continue" onClick={handleClick} />
                <Button text="Save" icon={Check} color="#14b8a6" name="save" onClick={handleClick} />
                <Button icon={Settings} color="#64748b" name="settings-only" onClick={handleClick} />
              </Section>

              <Section title="Combinations — Everything Together">
                <Button text="Get Started" icon={ArrowRight} iconPosition="right" color="#7c3aed" size="lg" rounded="full" name="get-started" onClick={handleClick} />
                <Button text="Email Me" icon={Mail} color="#0891b2" size="md" rounded="lg" name="email" onClick={handleClick} />
                <Button text="Notifications" icon={Bell} variant="outline" color="#f59e0b" outlineColor="#f59e0b" size="md" rounded="full" name="notify" onClick={handleClick} />
              </Section>

              <Section title="Disabled State">
                <Button text="Disabled" color="#3b82f6" disabled name="disabled-1" onClick={handleClick} />
                <Button text="Disabled Outline" variant="outline" color="#22c55e" disabled name="disabled-2" onClick={handleClick} />
                <Button text="Disabled with Icon" icon={Download} color="#ef4444" disabled name="disabled-3" onClick={handleClick} />
              </Section>
            </>
          )}

          {/* ===== HEADER SHOWCASE ===== */}
          {activeView === "header" && (
            <>
              <Section title="Headers — Layout: Start / Center / End">
                <div className="w-full space-y-4">
                  <Header color="#1e293b" layout="start" rounded="lg" shadow="md" height="md">
                    <Text content="Start Layout" color="#f8fafc" size="lg" weight="bold" />
                  </Header>
                  <Header color="#3b82f6" layout="center" rounded="lg" shadow="md" height="md">
                    <Text content="Center Layout" color="#ffffff" size="lg" weight="bold" />
                  </Header>
                  <Header color="#22c55e" layout="end" rounded="lg" shadow="md" height="md">
                    <Text content="End Layout" color="#ffffff" size="lg" weight="bold" />
                  </Header>
                </div>
              </Section>

              <Section title="Headers — Layout: Between / Around / Evenly">
                <div className="w-full space-y-4">
                  <Header color="#0f172a" layout="between" rounded="lg" shadow="md" height="md">
                    <Text content="Left Item" color="#f8fafc" size="base" weight="semibold" />
                    <Text content="Right Item" color="#f8fafc" size="base" weight="semibold" />
                  </Header>
                  <Header color="#f59e0b" layout="around" rounded="lg" shadow="md" height="md">
                    <Text content="Item A" color="#1e293b" size="base" weight="semibold" />
                    <Text content="Item B" color="#1e293b" size="base" weight="semibold" />
                    <Text content="Item C" color="#1e293b" size="base" weight="semibold" />
                  </Header>
                  <Header color="#0891b2" layout="evenly" rounded="lg" shadow="md" height="md">
                    <Text content="One" color="#ffffff" size="base" weight="semibold" />
                    <Text content="Two" color="#ffffff" size="base" weight="semibold" />
                    <Text content="Three" color="#ffffff" size="base" weight="semibold" />
                    <Text content="Four" color="#ffffff" size="base" weight="semibold" />
                  </Header>
                </div>
              </Section>

              <Section title="Headers — Custom HEX Colors">
                <div className="w-full space-y-4">
                  <Header color="#ef4444" layout="center" rounded="lg" shadow="md" height="md">
                    <Text content="Red Header" color="#ffffff" size="lg" weight="bold" />
                  </Header>
                  <Header color="#f1f5f9" borderColor="#cbd5e1" layout="center" rounded="lg" shadow="sm" height="md">
                    <Text content="Light Header" color="#1e293b" size="lg" weight="bold" />
                  </Header>
                  <Header color="#14b8a6" layout="center" rounded="lg" shadow="lg" height="md">
                    <Text content="Teal Header" color="#ffffff" size="lg" weight="bold" />
                  </Header>
                </div>
              </Section>

              <Section title="Headers — Roundness Levels">
                <div className="w-full space-y-4">
                  <Header color="#6366f1" layout="center" rounded="none" shadow="md" height="md">
                    <Text content="No Round" color="#ffffff" size="lg" weight="bold" />
                  </Header>
                  <Header color="#6366f1" layout="center" rounded="md" shadow="md" height="md">
                    <Text content="Medium Round" color="#ffffff" size="lg" weight="bold" />
                  </Header>
                  <Header color="#6366f1" layout="center" rounded="xl" shadow="md" height="md">
                    <Text content="Extra Large Round" color="#ffffff" size="lg" weight="bold" />
                  </Header>
                </div>
              </Section>

              <Section title="Headers — Height Variations">
                <div className="w-full space-y-4">
                  <Header color="#1e293b" layout="center" rounded="lg" shadow="md" height="sm">
                    <Text content="Small Height" color="#f8fafc" size="base" weight="semibold" />
                  </Header>
                  <Header color="#1e293b" layout="center" rounded="lg" shadow="md" height="lg">
                    <Text content="Large Height" color="#f8fafc" size="xl" weight="bold" />
                  </Header>
                  <Header color="#1e293b" layout="center" rounded="lg" shadow="md" height="2xl">
                    <Text content="Extra Large Height" color="#f8fafc" size="2xl" weight="extrabold" />
                  </Header>
                </div>
              </Section>

              <Section title="Headers — With Buttons & Text Inside">
                <div className="w-full space-y-4">
                  <Header color="#0f172a" layout="between" rounded="lg" shadow="md" height="md">
                    <Text content="My App" color="#f8fafc" size="xl" weight="bold" />
                    <Button text="Sign In" color="#3b82f6" size="sm" name="header-signin" onClick={handleClick} />
                  </Header>
                  <Header color="#f8fafc" borderColor="#e2e8f0" layout="between" rounded="lg" shadow="sm" height="md">
                    <Text content="Dashboard" color="#1e293b" size="xl" weight="bold" />
                    <div className="flex gap-2">
                      <Button text="Settings" icon={Settings} size="sm" color="#64748b" name="header-settings" onClick={handleClick} />
                      <Button text="Logout" variant="outline" size="sm" color="#ef4444" name="header-logout" onClick={handleClick} />
                    </div>
                  </Header>
                </div>
              </Section>
            </>
          )}

          {/* ===== TEXT SHOWCASE ===== */}
          {activeView === "text" && (
            <>
              <Section title="Text — Sizes">
                <div className="w-full space-y-3">
                  <Text content="Extra Small (xs)" color="#1e293b" size="xs" />
                  <Text content="Small (sm)" color="#1e293b" size="sm" />
                  <Text content="Base (base)" color="#1e293b" size="base" />
                  <Text content="Large (lg)" color="#1e293b" size="lg" />
                  <Text content="Extra Large (xl)" color="#1e293b" size="xl" />
                  <Text content="2XL" color="#1e293b" size="2xl" weight="bold" />
                  <Text content="3XL" color="#1e293b" size="3xl" weight="bold" />
                  <Text content="4XL" color="#1e293b" size="4xl" weight="extrabold" />
                </div>
              </Section>

              <Section title="Text — Weights">
                <div className="w-full space-y-2">
                  <Text content="Normal weight" color="#1e293b" size="lg" weight="normal" />
                  <Text content="Medium weight" color="#1e293b" size="lg" weight="medium" />
                  <Text content="Semibold weight" color="#1e293b" size="lg" weight="semibold" />
                  <Text content="Bold weight" color="#1e293b" size="lg" weight="bold" />
                  <Text content="Extrabold weight" color="#1e293b" size="lg" weight="extrabold" />
                </div>
              </Section>

              <Section title="Text — Custom HEX Colors">
                <div className="w-full space-y-2">
                  <Text content="Blue text (#3b82f6)" color="#3b82f6" size="lg" weight="semibold" />
                  <Text content="Green text (#22c55e)" color="#22c55e" size="lg" weight="semibold" />
                  <Text content="Red text (#ef4444)" color="#ef4444" size="lg" weight="semibold" />
                  <Text content="Amber text (#f59e0b)" color="#f59e0b" size="lg" weight="semibold" />
                  <Text content="Slate text (#1e293b)" color="#1e293b" size="lg" weight="semibold" />
                </div>
              </Section>

              <Section title="Text — Alignment">
                <div className="w-full space-y-2">
                  <Text content="Left aligned text" color="#1e293b" size="lg" align="left" />
                  <Text content="Center aligned text" color="#1e293b" size="lg" align="center" />
                  <Text content="Right aligned text" color="#1e293b" size="lg" align="right" />
                  <Text content="Justify aligned text — this longer line demonstrates how justify alignment distributes space evenly between words in a paragraph." color="#1e293b" size="base" align="justify" />
                </div>
              </Section>

              <Section title="Text — Styles">
                <div className="w-full space-y-2">
                  <Text content="Italic text" color="#1e293b" size="lg" italic />
                  <Text content="Underlined text" color="#1e293b" size="lg" underline />
                  <Text content="Uppercase text" color="#1e293b" size="lg" uppercase />
                  <Text content="Wide tracking" color="#1e293b" size="lg" letterSpacing="wide" />
                  <Text content="Widest tracking" color="#1e293b" size="lg" letterSpacing="widest" />
                </div>
              </Section>

              <Section title="Text — Inside Headers">
                <div className="w-full space-y-4">
                  <Header color="#0f172a" layout="center" rounded="lg" shadow="md" height="lg">
                    <Text content="Header Title" color="#f8fafc" size="2xl" weight="bold" />
                  </Header>
                  <Header color="#3b82f6" layout="between" rounded="lg" shadow="md" height="md">
                    <Text content="Brand Name" color="#ffffff" size="xl" weight="extrabold" />
                    <Text content="Menu" color="#ffffff" size="base" weight="medium" />
                  </Header>
                </div>
              </Section>
            </>
          )}
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

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-4">
        {title}
      </h2>
      <div className="flex flex-wrap gap-3 items-stretch bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        {children}
      </div>
    </div>
  );
}

export default App;
