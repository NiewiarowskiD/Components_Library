import React from "react";
import { Header } from "./Header";
import { Text } from "@/components/Text/Text";
import { Button } from "@/components/Button/Button";
import { Settings } from "lucide-react";

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

export function HeaderPreview({ isDark = true }: { isDark?: boolean }) {
  const darkBg = isDark ? "#18181B" : "#FFFFFF";
  const darkerBg = isDark ? "#09090B" : "#F4F4F5";
  const midBg = isDark ? "#27272A" : "#E4E4E7";
  const darkBorder = isDark ? "#27272A" : "#D4D4D8";
  const midBorder = isDark ? "#3F3F46" : "#A1A1AA";
  const headerText = isDark ? "#E4E4E7" : "#27272A";

  return (
    <div>
      <Section title="Headers — Layout: Start / Center / End">
        <div className="w-full space-y-4">
          <Header color={darkBg} borderColor={darkBorder} layout="start" rounded="lg" shadow="md" height="md">
            <Text content="Start Layout" color={headerText} size="lg" weight="bold" />
          </Header>
          <Header color="#10B981" layout="center" rounded="lg" shadow="md" height="md">
            <Text content="Center Layout" color="#ffffff" size="lg" weight="bold" />
          </Header>
          <Header color="#22c55e" layout="end" rounded="lg" shadow="md" height="md">
            <Text content="End Layout" color="#ffffff" size="lg" weight="bold" />
          </Header>
        </div>
      </Section>

      <Section title="Headers — Layout: Between / Around / Evenly">
        <div className="w-full space-y-4">
          <Header color={darkerBg} borderColor={darkBorder} layout="between" rounded="lg" shadow="md" height="md">
            <Text content="Left Item" color={headerText} size="base" weight="semibold" />
            <Text content="Right Item" color={headerText} size="base" weight="semibold" />
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
          <Header color={midBg} borderColor={midBorder} layout="center" rounded="lg" shadow="sm" height="md">
            <Text content="Zinc Header" color={headerText} size="lg" weight="bold" />
          </Header>
          <Header color="#14b8a6" layout="center" rounded="lg" shadow="lg" height="md">
            <Text content="Teal Header" color="#ffffff" size="lg" weight="bold" />
          </Header>
        </div>
      </Section>

      <Section title="Headers — Roundness Levels">
        <div className="w-full space-y-4">
          <Header color="#10B981" layout="center" rounded="none" shadow="md" height="md">
            <Text content="No Round" color="#ffffff" size="lg" weight="bold" />
          </Header>
          <Header color="#10B981" layout="center" rounded="md" shadow="md" height="md">
            <Text content="Medium Round" color="#ffffff" size="lg" weight="bold" />
          </Header>
          <Header color="#10B981" layout="center" rounded="xl" shadow="md" height="md">
            <Text content="Extra Large Round" color="#ffffff" size="lg" weight="bold" />
          </Header>
        </div>
      </Section>

      <Section title="Headers — Height Variations">
        <div className="w-full space-y-4">
          <Header color={darkBg} borderColor={darkBorder} layout="center" rounded="lg" shadow="md" height="sm">
            <Text content="Small Height" color={headerText} size="base" weight="semibold" />
          </Header>
          <Header color={darkBg} borderColor={darkBorder} layout="center" rounded="lg" shadow="md" height="lg">
            <Text content="Large Height" color={headerText} size="xl" weight="bold" />
          </Header>
          <Header color={darkBg} borderColor={darkBorder} layout="center" rounded="lg" shadow="md" height="2xl">
            <Text content="Extra Large Height" color={headerText} size="2xl" weight="extrabold" />
          </Header>
        </div>
      </Section>

      <Section title="Headers — With Buttons & Text Inside">
        <div className="w-full space-y-4">
          <Header color={darkerBg} borderColor={darkBorder} layout="between" rounded="lg" shadow="md" height="md">
            <Text content="My App" color={headerText} size="xl" weight="bold" />
            <Button text="Sign In" color="#10B981" size="sm" name="header-signin" />
          </Header>
          <Header color={darkBg} borderColor={darkBorder} layout="between" rounded="lg" shadow="sm" height="md">
            <Text content="Dashboard" color={headerText} size="xl" weight="bold" />
            <div className="flex gap-2">
              <Button text="Settings" icon={Settings} size="sm" color="#71717A" name="header-settings" />
              <Button text="Logout" variant="outline" size="sm" color="#ef4444" name="header-logout" />
            </div>
          </Header>
        </div>
      </Section>
    </div>
  );
}

export default HeaderPreview;
