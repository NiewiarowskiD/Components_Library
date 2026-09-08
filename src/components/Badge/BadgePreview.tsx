import React from "react";
import { Badge } from "./Badge";
import { CheckCircle2, AlertCircle, Info, XCircle, Sparkles, Bell } from "lucide-react";

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
      <div className="flex flex-wrap gap-3 items-stretch bg-zinc-800/80 rounded-xl shadow-sm border border-zinc-700 p-6">
        {children}
      </div>
    </div>
  );
}

export function BadgePreview() {
  return (
    <div>
      <Section title="Badges — Status Variants">
        <Badge label="Active" variant="emerald" dot />
        <Badge label="Pending" variant="amber" dot />
        <Badge label="Error" variant="red" dot />
        <Badge label="Info" variant="blue" dot />
        <Badge label="New" variant="violet" dot />
        <Badge label="Draft" variant="zinc" dot />
      </Section>

      <Section title="Badges — Without Dot">
        <Badge label="Active" variant="emerald" />
        <Badge label="Pending" variant="amber" />
        <Badge label="Error" variant="red" />
        <Badge label="Info" variant="blue" />
        <Badge label="New" variant="violet" />
        <Badge label="Draft" variant="zinc" />
      </Section>

      <Section title="Badges — Sizes">
        <Badge label="Small" variant="emerald" size="sm" dot />
        <Badge label="Medium" variant="emerald" size="md" dot />
        <Badge label="Large" variant="emerald" size="lg" dot />
      </Section>

      <Section title="Badges — With Icons">
        <Badge label="Verified" variant="emerald" icon={<CheckCircle2 size={14} />} />
        <Badge label="Warning" variant="amber" icon={<AlertCircle size={14} />} />
        <Badge label="Failed" variant="red" icon={<XCircle size={14} />} />
        <Badge label="Details" variant="blue" icon={<Info size={14} />} />
        <Badge label="Feature" variant="violet" icon={<Sparkles size={14} />} />
        <Badge label="Notify" variant="zinc" icon={<Bell size={14} />} />
      </Section>
    </div>
  );
}

export default BadgePreview;
