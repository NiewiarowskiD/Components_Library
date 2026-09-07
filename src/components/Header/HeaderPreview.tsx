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
      <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-4">
        {title}
      </h2>
      <div className="flex flex-wrap gap-3 items-stretch bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        {children}
      </div>
    </div>
  );
}

export function HeaderPreview() {
  return (
    <div>
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
            <Button text="Sign In" color="#3b82f6" size="sm" name="header-signin" />
          </Header>
          <Header color="#f8fafc" borderColor="#e2e8f0" layout="between" rounded="lg" shadow="sm" height="md">
            <Text content="Dashboard" color="#1e293b" size="xl" weight="bold" />
            <div className="flex gap-2">
              <Button text="Settings" icon={Settings} size="sm" color="#64748b" name="header-settings" />
              <Button text="Logout" variant="outline" size="sm" color="#ef4444" name="header-logout" />
            </div>
          </Header>
        </div>
      </Section>
    </div>
  );
}

export default HeaderPreview;
