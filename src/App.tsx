import React, { useState } from "react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
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
} from "lucide-react";

type ActiveView = "button" | "card";

function App() {
  const [activeView, setActiveView] = useState<ActiveView>("card");
  const [clickLog, setClickLog] = useState<string[]>([]);

  const handleClick = (data: {
    name?: string;
    timestamp: number;
  }) => {
    const time = new Date(data.timestamp).toLocaleTimeString();
    const entry = data.name
      ? `"${data.name}" clicked at ${time}`
      : `Button clicked at ${time}`;
    setClickLog((prev) => [entry, ...prev].slice(0, 5));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-slate-800 mb-3">
            Reusable Components
          </h1>
          <p className="text-slate-500 text-lg">
            Flexible Button and Card components with custom colors, icons, sizes, and more.
          </p>
        </header>

        {/* Component selector */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex gap-1 bg-white rounded-xl shadow-sm border border-slate-200 p-1.5">
            <ToggleButton
              active={activeView === "card"}
              onClick={() => setActiveView("card")}
              icon={LayoutGrid}
              label="Card"
            />
            <ToggleButton
              active={activeView === "button"}
              onClick={() => setActiveView("button")}
              icon={MousePointerClick}
              label="Button"
            />
          </div>
        </div>

        {/* ===== CARD SHOWCASE ===== */}
        {activeView === "card" && (
          <>
            {/* Basic Cards */}
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

            {/* Cards with Custom Colors */}
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

            {/* Cards with Title Icons */}
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

            {/* Cards with Images */}
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

            {/* Cards with Rounded Corners */}
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

            {/* Card with Button inside */}
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

            {/* Non-closable card */}
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
            {/* Solid Buttons - Different Colors */}
            <Section title="Solid Buttons — Custom HEX Colors">
              <Button text="Primary" color="#3b82f6" name="primary" onClick={handleClick} />
              <Button text="Success" color="#22c55e" name="success" onClick={handleClick} />
              <Button text="Warning" color="#f59e0b" name="warning" onClick={handleClick} />
              <Button text="Danger" color="#ef4444" name="danger" onClick={handleClick} />
              <Button text="Dark" color="#1e293b" name="dark" onClick={handleClick} />
              <Button text="Light" color="#f1f5f9" name="light" onClick={handleClick} />
            </Section>

            {/* Outline Buttons */}
            <Section title="Outline Buttons — Border Color via HEX">
              <Button text="Outline Blue" variant="outline" color="#3b82f6" name="outline-blue" onClick={handleClick} />
              <Button text="Outline Green" variant="outline" color="#22c55e" name="outline-green" onClick={handleClick} />
              <Button text="Outline Red" variant="outline" color="#ef4444" name="outline-red" onClick={handleClick} />
              <Button
                text="Custom Border"
                variant="outline"
                color="#3b82f6"
                outlineColor="#a855f7"
                name="outline-custom"
                onClick={handleClick}
              />
            </Section>

            {/* Sizes */}
            <Section title="Sizes — Small, Medium, Large">
              <Button text="Small" size="sm" color="#6366f1" name="sm" onClick={handleClick} />
              <Button text="Medium" size="md" color="#6366f1" name="md" onClick={handleClick} />
              <Button text="Large" size="lg" color="#6366f1" name="lg" onClick={handleClick} />
            </Section>

            {/* Rounded */}
            <Section title="Roundness — None to Full Pill">
              <Button text="None" rounded="none" color="#0ea5e9" name="r-none" onClick={handleClick} />
              <Button text="Small" rounded="sm" color="#0ea5e9" name="r-sm" onClick={handleClick} />
              <Button text="Medium" rounded="md" color="#0ea5e9" name="r-md" onClick={handleClick} />
              <Button text="Large" rounded="lg" color="#0ea5e9" name="r-lg" onClick={handleClick} />
              <Button text="Full" rounded="full" color="#0ea5e9" name="r-full" onClick={handleClick} />
            </Section>

            {/* Icons */}
            <Section title="Icons — Left & Right Positions">
              <Button text="Download" icon={Download} color="#3b82f6" name="download" onClick={handleClick} />
              <Button text="Delete" icon={Trash2} color="#ef4444" name="delete" onClick={handleClick} />
              <Button text="Like" icon={Heart} color="#ec4899" name="like" onClick={handleClick} />
              <Button text="Continue" icon={ArrowRight} iconPosition="right" color="#22c55e" name="continue" onClick={handleClick} />
              <Button text="Save" icon={Check} color="#14b8a6" name="save" onClick={handleClick} />
              <Button icon={Settings} color="#64748b" name="settings-only" onClick={handleClick} />
            </Section>

            {/* Combined Combinations */}
            <Section title="Combinations — Everything Together">
              <Button
                text="Get Started"
                icon={ArrowRight}
                iconPosition="right"
                color="#7c3aed"
                size="lg"
                rounded="full"
                name="get-started"
                onClick={handleClick}
              />
              <Button
                text="Email Me"
                icon={Mail}
                color="#0891b2"
                size="md"
                rounded="lg"
                name="email"
                onClick={handleClick}
              />
              <Button
                text="Notifications"
                icon={Bell}
                variant="outline"
                color="#f59e0b"
                outlineColor="#f59e0b"
                size="md"
                rounded="full"
                name="notify"
                onClick={handleClick}
              />
            </Section>

            {/* Disabled */}
            <Section title="Disabled State">
              <Button text="Disabled" color="#3b82f6" disabled name="disabled-1" onClick={handleClick} />
              <Button text="Disabled Outline" variant="outline" color="#22c55e" disabled name="disabled-2" onClick={handleClick} />
              <Button text="Disabled with Icon" icon={Download} color="#ef4444" disabled name="disabled-3" onClick={handleClick} />
            </Section>
          </>
        )}

        {/* Click Log */}
        {clickLog.length > 0 && (
          <div className="mt-10 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-lg font-bold text-slate-700 mb-4">
              Click Activity
            </h2>
            <div className="space-y-2">
              {clickLog.map((entry, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 rounded-lg px-4 py-2"
                >
                  <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                  {entry}
                </div>
              ))}
            </div>
          </div>
        )}
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
