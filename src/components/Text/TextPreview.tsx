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
      <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-4">
        {title}
      </h2>
      <div className="flex flex-wrap gap-3 items-stretch bg-white dark:bg-zinc-800/80 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700 p-6">
        {children}
      </div>
    </div>
  );
}

export function TextPreview({ isDark = true }: { isDark?: boolean }) {
  const textColor = isDark ? "#E4E4E7" : "#27272A";
  const headerBg = isDark ? "#09090B" : "#F4F4F5";
  const headerBorder = isDark ? "#27272A" : "#D4D4D8";
  const headerText = isDark ? "#E4E4E7" : "#27272A";

  return (
    <div>
      <Section title="Text — Sizes">
        <div className="w-full space-y-3">
          <Text content="Extra Small (xs)" color={textColor} size="xs" />
          <Text content="Small (sm)" color={textColor} size="sm" />
          <Text content="Base (base)" color={textColor} size="base" />
          <Text content="Large (lg)" color={textColor} size="lg" />
          <Text content="Extra Large (xl)" color={textColor} size="xl" />
          <Text content="2XL" color={textColor} size="2xl" weight="bold" />
          <Text content="3XL" color={textColor} size="3xl" weight="bold" />
          <Text content="4XL" color={textColor} size="4xl" weight="extrabold" />
        </div>
      </Section>

      <Section title="Text — Weights">
        <div className="w-full space-y-2">
          <Text content="Normal weight" color={textColor} size="lg" weight="normal" />
          <Text content="Medium weight" color={textColor} size="lg" weight="medium" />
          <Text content="Semibold weight" color={textColor} size="lg" weight="semibold" />
          <Text content="Bold weight" color={textColor} size="lg" weight="bold" />
          <Text content="Extrabold weight" color={textColor} size="lg" weight="extrabold" />
        </div>
      </Section>

      <Section title="Text — Custom HEX Colors">
        <div className="w-full space-y-2">
          <Text content="Emerald text (#10B981)" color="#10B981" size="lg" weight="semibold" />
          <Text content="Green text (#22c55e)" color="#22c55e" size="lg" weight="semibold" />
          <Text content="Red text (#ef4444)" color="#ef4444" size="lg" weight="semibold" />
          <Text content="Amber text (#f59e0b)" color="#f59e0b" size="lg" weight="semibold" />
          <Text content={`Light text (${textColor})`} color={textColor} size="lg" weight="semibold" />
        </div>
      </Section>

      <Section title="Text — Alignment">
        <div className="w-full space-y-2">
          <Text content="Left aligned text" color={textColor} size="lg" align="left" />
          <Text content="Center aligned text" color={textColor} size="lg" align="center" />
          <Text content="Right aligned text" color={textColor} size="lg" align="right" />
          <Text content="Justify aligned text — this longer line demonstrates how justify alignment distributes space evenly between words in a paragraph." color={textColor} size="base" align="justify" />
        </div>
      </Section>

      <Section title="Text — Styles">
        <div className="w-full space-y-2">
          <Text content="Italic text" color={textColor} size="lg" italic />
          <Text content="Underlined text" color={textColor} size="lg" underline />
          <Text content="Uppercase text" color={textColor} size="lg" uppercase />
          <Text content="Wide tracking" color={textColor} size="lg" letterSpacing="wide" />
          <Text content="Widest tracking" color={textColor} size="lg" letterSpacing="widest" />
        </div>
      </Section>

      <Section title="Text — Inside Headers">
        <div className="w-full space-y-4">
          <Header color={headerBg} borderColor={headerBorder} layout="center" rounded="lg" shadow="md" height="lg">
            <Text content="Header Title" color={headerText} size="2xl" weight="bold" />
          </Header>
          <Header color="#10B981" layout="between" rounded="lg" shadow="md" height="md">
            <Text content="Brand Name" color="#ffffff" size="xl" weight="extrabold" />
            <Text content="Menu" color="#ffffff" size="base" weight="medium" />
          </Header>
        </div>
      </Section>
    </div>
  );
}

export default TextPreview;
