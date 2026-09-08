import React, { useState } from "react";
import { Button } from "./Button";
import {
  Download,
  Trash2,
  Heart,
  ArrowRight,
  Check,
  Settings,
  Mail,
  Bell,
} from "lucide-react";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-sm font-semibold text-zinc-500 dark:text-zinc-500 uppercase tracking-wide mb-4">
        {title}
      </h2>
      <div className="flex flex-wrap gap-3 items-stretch bg-white dark:bg-zinc-800/80 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700 p-6">
        {children}
      </div>
    </div>
  );
}

export function ButtonPreview({ isDark = true }: { isDark?: boolean }) {
  const [log, setLog] = useState<string[]>([]);

  const handleClick = (data: { name?: string; timestamp: number }) => {
    const time = new Date(data.timestamp).toLocaleTimeString();
    const entry = data.name
      ? `"${data.name}" clicked at ${time}`
      : `Button clicked at ${time}`;
    setLog((prev) => [entry, ...prev].slice(0, 5));
  };

  return (
    <div>
      <Section title="Solid Buttons — Custom HEX Colors">
        <Button text="Primary" color="#3B82F6" name="primary" onClick={handleClick} />
        <Button text="Success" color="#22C55E" name="success" onClick={handleClick} />
        <Button text="Warning" color="#F59E0B" name="warning" onClick={handleClick} />
        <Button text="Danger" color="#EF4444" name="danger" onClick={handleClick} />
        <Button text="Dark" color="#1E293B" name="dark" onClick={handleClick} />
        <Button text="Light" color="#F1F5F9" name="light" onClick={handleClick} />
      </Section>

      <Section title="Outline Buttons — Border Color via HEX">
        <Button text="Outline Blue" variant="outline" color="#3B82F6" name="outline-emerald" onClick={handleClick} />
        <Button text="Outline Green" variant="outline" color="#22C55E" name="outline-green" onClick={handleClick} />
        <Button text="Outline Red" variant="outline" color="#EF4444" name="outline-red" onClick={handleClick} />
        <Button text="Custom Border" variant="outline" color="#3B82F6" outlineColor="#A855F7" name="outline-custom" onClick={handleClick} />
      </Section>

      <Section title="Sizes — Small, Medium, Large">
        <Button text="Small" size="sm" color="#6366F1" name="sm" onClick={handleClick} />
        <Button text="Medium" size="md" color="#6366F1" name="md" onClick={handleClick} />
        <Button text="Large" size="lg" color="#6366F1" name="lg" onClick={handleClick} />
      </Section>

      <Section title="Roundness — None to Full Pill">
        <Button text="None" rounded="none" color="#0EA5E9" name="r-none" onClick={handleClick} />
        <Button text="Small" rounded="sm" color="#0EA5E9" name="r-sm" onClick={handleClick} />
        <Button text="Medium" rounded="md" color="#0EA5E9" name="r-md" onClick={handleClick} />
        <Button text="Large" rounded="lg" color="#0EA5E9" name="r-lg" onClick={handleClick} />
        <Button text="Full" rounded="full" color="#0EA5E9" name="r-full" onClick={handleClick} />
      </Section>

      <Section title="Icons — Left & Right Positions">
        <Button text="Download" icon={Download} color="#3B82F6" name="download" onClick={handleClick} />
        <Button text="Delete" icon={Trash2} color="#EF4444" name="delete" onClick={handleClick} />
        <Button text="Like" icon={Heart} color="#EC4899" name="like" onClick={handleClick} />
        <Button text="Continue" icon={ArrowRight} iconPosition="right" color="#22C55E" name="continue" onClick={handleClick} />
        <Button text="Save" icon={Check} color="#14B8A6" name="save" onClick={handleClick} />
        <Button icon={Settings} color="#71717A" name="settings-only" onClick={handleClick} />
      </Section>

      <Section title="Combinations — Everything Together">
        <Button text="Get Started" icon={ArrowRight} iconPosition="right" color="#7C3AED" size="lg" rounded="full" name="get-started" onClick={handleClick} />
        <Button text="Email Me" icon={Mail} color="#0891B2" size="md" rounded="lg" name="email" onClick={handleClick} />
        <Button text="Notifications" icon={Bell} variant="outline" color="#F59E0B" outlineColor="#F59E0B" size="md" rounded="full" name="notify" onClick={handleClick} />
      </Section>

      <Section title="Disabled State">
        <Button text="Disabled" color="#3B82F6" disabled name="disabled-1" onClick={handleClick} />
        <Button text="Disabled Outline" variant="outline" color="#22c55e" disabled name="disabled-2" onClick={handleClick} />
        <Button text="Disabled with Icon" icon={Download} color="#EF4444" disabled name="disabled-3" onClick={handleClick} />
      </Section>

      {log.length > 0 && (
        <div className="mt-10 bg-white dark:bg-zinc-800/80 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700 p-6">
          <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4">Click Activity</h2>
          <div className="space-y-2">
            {log.map((entry, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-900/60 rounded-lg px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                {entry}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ButtonPreview;
