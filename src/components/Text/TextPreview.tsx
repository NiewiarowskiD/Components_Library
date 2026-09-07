import React from "react";
import { Text } from "./Text";
import { Header } from "@/components/Header/Header";

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

export function TextPreview() {
  return (
    <div>
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
    </div>
  );
}

export default TextPreview;
