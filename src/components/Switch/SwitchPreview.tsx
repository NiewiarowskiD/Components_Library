import React, { useState } from "react";
import { Switch } from "./Switch";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-4">
        {title}
      </h2>
      <div className="flex flex-wrap gap-6 items-center bg-white dark:bg-zinc-800/80 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700 p-6">
        {children}
      </div>
    </div>
  );
}

export function SwitchPreview() {
  const [basic, setBasic] = useState(false);
  const [custom, setCustom] = useState(true);
  const [sm, setSm] = useState(false);
  const [md, setMd] = useState(true);
  const [lg, setLg] = useState(false);

  return (
    <div>
      <Section title="Switch — Basic Toggle">
        <Switch checked={basic} onChange={setBasic} label="Enable notifications" />
        <Switch checked={custom} onChange={setCustom} label="Dark mode" color="#3B82F6" />
      </Section>

      <Section title="Switch — Sizes">
        <Switch checked={sm} onChange={setSm} size="sm" label="Small" />
        <Switch checked={md} onChange={setMd} size="md" label="Medium" />
        <Switch checked={lg} onChange={setLg} size="lg" label="Large" />
      </Section>

      <Section title="Switch — Custom Colors">
        <Switch checked={true} onChange={() => {}} color="#EF4444" label="Red" />
        <Switch checked={true} onChange={() => {}} color="#F59E0B" label="Amber" />
        <Switch checked={true} onChange={() => {}} color="#A855F7" label="Violet" />
        <Switch checked={true} onChange={() => {}} color="#0891B2" label="Cyan" />
      </Section>

      <Section title="Switch — Disabled States">
        <Switch checked={false} onChange={() => {}} disabled label="Disabled off" />
        <Switch checked={true} onChange={() => {}} disabled label="Disabled on" />
      </Section>
    </div>
  );
}

export default SwitchPreview;
