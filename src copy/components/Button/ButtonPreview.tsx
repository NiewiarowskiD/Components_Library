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
      <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-4">
        {title}
      </h2>
      <div className="flex flex-wrap gap-3 items-stretch bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        {children}
      </div>
    </div>
  );
}

export function ButtonPreview() {
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

      {log.length > 0 && (
        <div className="mt-10 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-lg font-bold text-slate-700 mb-4">Click Activity</h2>
          <div className="space-y-2">
            {log.map((entry, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 rounded-lg px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
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
