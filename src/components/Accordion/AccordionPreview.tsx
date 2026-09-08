import React from "react";
import { Accordion } from "./Accordion";
import type { AccordionItemData } from "./Accordion";

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
      <div className="flex flex-wrap gap-5 items-stretch bg-white dark:bg-zinc-800/80 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700 p-6">
        {children}
      </div>
    </div>
  );
}

const singleItems: AccordionItemData[] = [
  {
    id: "faq-1",
    title: "What technologies do you work with?",
    content: "I specialize in React, Next.js, Angular, and TypeScript. I also have experience with Tailwind CSS, SCSS, and various build tools like Vite and Webpack.",
  },
  {
    id: "faq-2",
    title: "Where are you based?",
    content: "I am based in Zurich, Switzerland, and I am open to remote work opportunities across Europe.",
  },
  {
    id: "faq-3",
    title: "What is your experience level?",
    content: "I have worked in international Agile teams for the Swiss agency Dreipol and in the banking sector at BNP Paribas, building scalable web applications and reusable UI component libraries.",
  },
  {
    id: "faq-4",
    title: "Are you available for freelance work?",
    content: "Yes, I am currently open to work — both full-time positions and freelance engagements. Feel free to reach out via email or LinkedIn.",
  },
];

const multiItems: AccordionItemData[] = [
  {
    id: "multi-1",
    title: "React",
    content: "A JavaScript library for building user interfaces with a component-based architecture and virtual DOM.",
  },
  {
    id: "multi-2",
    title: "Angular",
    content: "A full-featured TypeScript framework for building scalable web and mobile applications.",
  },
  {
    id: "multi-3",
    title: "Next.js",
    content: "A React framework with server-side rendering, static generation, and built-in routing for production applications.",
  },
];

export function AccordionPreview() {
  return (
    <div>
      <Section title="Accordion — Single Open (Default)">
        <div className="w-full max-w-2xl">
          <Accordion items={singleItems} defaultOpen="faq-1" />
        </div>
      </Section>

      <Section title="Accordion — Multiple Open">
        <div className="w-full max-w-2xl">
          <Accordion items={multiItems} multiple defaultOpen={["multi-1"]} />
        </div>
      </Section>

      <Section title="Accordion — All Closed">
        <div className="w-full max-w-2xl">
          <Accordion items={singleItems.slice(0, 2)} />
        </div>
      </Section>
    </div>
  );
}

export default AccordionPreview;
